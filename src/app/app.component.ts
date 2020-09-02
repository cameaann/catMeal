import { Component } from '@angular/core';
import { PRODUCTS } from '../app/products-db';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'catApp';
  

  ngOnInit(){}
}
