import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { routes } from "./app.routes";

import { ProductListComponent } from "./product-list/product-list.component";
import { ProductCreateEditComponent } from "./product-create-edit/product-create-edit.component";
import { ProductDeleteComponent } from "./product-delete/product-delete.component";
import { ProductService } from "./shared/index";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreateEditComponent,
    ProductDeleteComponent ],
  bootstrap: [ AppComponent ],
  providers: [ ProductService ]
})
export class AppModule {
}
