import { Component, OnInit } from '@angular/core';
import {Product} from './product';
import {ProductService} from './product.service';
import {NotificationsService} from 'angular2-notifications';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: []
})
export class ProductComponent implements OnInit {

  private products:Array<object>=[];

  addToProduce:string;
  constructor(private productService:ProductService, private notificationsService:NotificationsService) {

  }

  ngOnInit() {
this.getProducts()
  }
  public getProducts(){
    this.productService.getProducts().subscribe((data:  Array<object>) => {
      this.products  =  data;
      console.log(data);
    });
  }

  addToCart(test:Product){

    this.addToProduce=test.productName
    this.notificationsService.success("Succesful "+test.productName+" added to cart!")
  }

}
