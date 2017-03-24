import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Product, ProductService } from "../shared/index";

@Component({
  moduleId: module.id,
  selector: "product-create-edit",
  templateUrl: "product-create-edit.component.html",
  styleUrls: [ "../../../node_modules/bootstrap/dist/css/bootstrap.css" ]
})
export class ProductCreateEditComponent implements OnInit {
  currentProduct: Product;
  errorMessage: string;
  productForm: FormGroup;

  constructor( private service: ProductService,
               private activatedRoute: ActivatedRoute,
               private fb: FormBuilder,
               private router: Router ) {
  }

  ngOnInit() {
    this.buildForm();
    this.getProductFromRoute();
  }

  public checkError( element: string, errorType: string ) {
    return this.productForm.get(element).hasError(errorType) &&
      this.productForm.get(element).touched
  }

  public onSubmit( productForm: FormGroup ) {
    this.currentProduct.name = productForm.value.name;
    this.currentProduct.price = productForm.value.price;

    if ( this.currentProduct.id ) {
      this.service.updateProduct(this.currentProduct)
        .then(
          () => this.goBack(),
          error => this.errorMessage = error
        );
    } else {
      this.service.addProduct(this.currentProduct)
        .then(
          () => this.goBack(),
          error => this.errorMessage = error
        );
    }
  }

  public goBack() {
    this.router.navigate([ "/products" ]);
  }

  private getProductFromRoute() {
    this.activatedRoute.params.forEach(( params: Params ) => {
      let id = params[ "id" ];

      if ( id ) {
        this.service.getProduct(id).then(
          product => {
            this.currentProduct = product;
            this.productForm.patchValue(this.currentProduct);
          },
          error => this.errorMessage = error
        );
      }
      else {
        this.currentProduct = new Product(null, null, null);
        this.productForm.patchValue(this.currentProduct);
      }
    });
  }

  private buildForm() {
    this.productForm = this.fb.group({
      name: [ "", Validators.required ],
      price: [ "", Validators.required ]
    });
  }
}