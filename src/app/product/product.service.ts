import {Inject, Injectable} from '@angular/core';
import {Product} from './product';
import {ProductList} from './product-list.mock';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class ProductService {

path:string="api/products"


  constructor(private http:HttpClient,@Inject("apiUrl" ) private apiUrl) {

  }


  getProducts(){
  return this.http.get(this.apiUrl+this.path)
  }

}
