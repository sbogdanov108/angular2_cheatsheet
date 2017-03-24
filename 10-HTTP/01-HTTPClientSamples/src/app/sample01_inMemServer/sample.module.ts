import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import {
  GetRequestComponent,
  PostDataComponent,
  RequestOptionsComponent,
  SearchParamsComponent
} from "./index";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    GetRequestComponent,
    PostDataComponent,
    RequestOptionsComponent,
    SearchParamsComponent
  ]
})
export class InMemoryServerModule {
}