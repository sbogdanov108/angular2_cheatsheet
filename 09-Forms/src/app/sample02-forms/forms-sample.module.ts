import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
  UserFormComponent,
  StylesSampleComponent,
  UserForm2Component,
  UserForm3Component,
  UserForm4Component,
  UserForm5Component,
  FormErrorsComponent
} from "./index";

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [ UserFormComponent, StylesSampleComponent, UserForm2Component, UserForm3Component, UserForm4Component, UserForm5Component, FormErrorsComponent ]
})
export class FormSampleModule {
}