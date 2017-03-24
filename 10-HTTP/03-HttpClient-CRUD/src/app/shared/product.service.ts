import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Product } from "./product";

import { Observable } from "rxjs/Observable";

@Injectable()
export class ProductService {
  // Адрес API Backend
  private url = "http://EXAMPLE.COM/products";

  constructor( private http: Http ) {
  }

  // Отправка GET запроса на сервер
  public getProducts(): Observable<Product[]> {
    let products = this.http.get(this.url)
      .map(this.extractProducts) // преобразовывает ответ в массив экземпляров Product.
      .catch(this.handleError);

    return products;
  }

  public getProduct( id: string ): Observable<Product> {
    let product = this.http.get(this.url + "/" + id)
      .map(this.extractProduct) // преобразовывает ответ в экземпляр Product.
      .catch(this.handleError);

    return product;
  }

  // Отправка POST запроса на сервер, добавление нового продукта в базу.
  public addProduct( product: Product ): Observable<Product> {
    return this.http.post(this.url, product)
      .catch(this.handleError);
  }

  // Отправка PUT запроса и обновление продукта в базе.
  public updateProduct( product: Product ): Observable<Product> {
    return this.http.put(this.url + "/" + product.id, product)
      .catch(this.handleError);
  }

  // Отправка DELETE запроса и удаление продукта из базы.
  public deleteProduct( product: Product ): Observable<Product> {
    return this.http.delete(this.url + "/" + product.id)
      .catch(this.handleError);
  }

  private extractProducts( response: Response ) {
    let res = response.json();
    let products: Product[] = [];

    for ( let i = 0; i < res.length; i++ ) {
      products.push(new Product(res[ i ].id, res[ i ].name, res[ i ].price));
    }

    return products;
  }

  private extractProduct( response: Response ) {
    let res = response.json();
    let product = new Product(res.id, res.name, res.price);

    return product;
  }

  private handleError( error: any, caught: Observable<any> ): any {
    let message = "";

    if ( error instanceof Response ) {
      let errorData = error.json().error || JSON.stringify(error.json());
      message = `${error.status} - ${error.statusText || ''} ${errorData}`;
    } else {
      message = error.message ? error.message : error.toString();
    }

    console.error(message);

    return Observable.throw(message);
  }
}

