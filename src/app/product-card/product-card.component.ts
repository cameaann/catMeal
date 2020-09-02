import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input()
  product: Product;
  accepted = false;
  selected = false;
  
  constructor() { }

  ngOnInit() {}

  productInStock(){
    return this.product.inStock;
  }

  cardMessage(){
    if(this.selected){
      return this.product.text;
    }
    if(!this.product.inStock){
      return `Печалька, ${this.product.description} закончился.`
    }
    else{
      return "Чего сидишь? Порадуй котэ,"
    }
  }

  toggleItemSelected(){
    this.selected = !this.selected;
    this.accepted = false;
  }

  acceptItem(){
    if(this.selected){
      this.accepted = true;
    }   
  }

  cardClasses(){    
    return {
      'selected': this.selected == true,
      'noProduct': this.product.inStock == false,
      'accepted': this.accepted
    }
  }
}
