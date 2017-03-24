import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Product } from "./product";

import { Observable } from "rxjs/Observable";

@Injectable()
export class ProductService {
  private url = "http://EXAMPLE.COM/products";

  constructor( private http: Http ) {
  }

  public getProducts(): Promise<Product[]> {
    let products = this.http.get(this.url)
      .toPromise()
      .then(this.extractProducts)
      .catch(this.handleError);

    return products;
  }

  public getProduct( id: string ): Promise<Product> {
    let product = this.http.get(this.url + "/" + id)
      .toPromise()
      .then(this.extractProduct)
      .catch(this.handleError);

    return product;
  }

  public addProduct( product: Product ) {
    return this.http.post(this.url, product)
      .toPromise()
      .catch(this.handleError);
  }

  public updateProduct( product: Product ) {
    return this.http.put(this.url + "/" + product.id, product)
      .toPromise()
      .catch(this.handleError);
  }

  public deleteProduct( product: Product ) {
    return this.http.delete(this.url + "/" + product.id)
      .toPromise()
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

  private handleError( error: any ): any {
    let message = "";

    if ( error instanceof Response ) {
      let errorData = error.json().error || JSON.stringify(error.json());
      message = `${error.status} - ${error.statusText || ''} ${errorData}`
    } else {
      message = error.message ? error.message : error.toString();
    }

    console.error(message);

    return Observable.throw(message);
  }
}