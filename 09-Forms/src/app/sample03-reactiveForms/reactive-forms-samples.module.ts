import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// Для работы с реактивными формами необходимо использовать модуль ReactiveFormsModule
// вместо ReactiveForms
import { ReactiveFormsModule } from "@angular/forms";

import {
  FormControlComponent,
  FormControlValComponent,
  FormBuilderComponent,
  ReactiveFormComponent,
  CustomValidatorsComponent
} from "./index";

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule ],
  declarations: [ ReactiveFormComponent, FormControlComponent, FormBuilderComponent, FormControlValComponent, CustomValidatorsComponent ]
})
export class ReactiveFormsSamplesModule {
}