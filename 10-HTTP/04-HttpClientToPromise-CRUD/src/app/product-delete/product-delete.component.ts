import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";

import { Product, ProductService } from "../shared/index";

@Component({
  moduleId: module.id,
  selector: "product-delete",
  templateUrl: "product-delete.component.html",
  styleUrls: [ "../../../node_modules/bootstrap/dist/css/bootstrap.css" ]
})
export class ProductDeleteComponent implements OnInit {

  currentProduct: Product;
  errorMessage: string;

  constructor( private activatedRoute: ActivatedRoute,
               private router: Router,
               private service: ProductService ) {
  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params[ "id" ];
    if ( id ) {
      this.service.getProduct(id)
        .then(
          product => this.currentProduct = product,
          error => this.errorMessage = error
        );
    }
  }

  deleteProduct() {
    this.service.deleteProduct(this.currentProduct)
      .then(
        () => this.goBack(),
        error => this.errorMessage = error
      );
  }

  goBack() {
    this.router.navigate([ "/products" ]);
  }
}