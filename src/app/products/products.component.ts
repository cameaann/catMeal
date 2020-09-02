import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../products-db';
import { from, Observable } from 'rxjs';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  $products = PRODUCTS;

  constructor() { }

  ngOnInit() {
    console.log(this.$products);
  }

}
