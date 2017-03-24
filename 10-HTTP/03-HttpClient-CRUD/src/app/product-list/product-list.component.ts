import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProductService, Product } from "../shared/index";

@Component({
  moduleId: module.id,
  selector: "product-list",
  templateUrl: "product-list.component.html",
  styleUrls: [ "../../../node_modules/bootstrap/dist/css/bootstrap.css" ]
})
export class ProductListComponent implements OnInit {
  products: Product[];
  errorMessage: string;

  constructor( private service: ProductService,
               private router: Router ) {
  }

  ngOnInit() {
    this.getProducts();
  }

  public refresh() {
    this.getProducts();
  }

  public editProduct( product: Product ) {
    this.router.navigate([ "products", "edit", product.id ]);
  }

  public deleteProduct( product: Product ) {
    this.router.navigate([ "products", "delete", product.id ]);
  }

  public createProduct() {
    this.router.navigate([ "products", "create" ]);
  }

  private getProducts() {
    this.service.getProducts().subscribe(
      products => this.products = products,
      error => this.errorMessage = error
    );
  }
}