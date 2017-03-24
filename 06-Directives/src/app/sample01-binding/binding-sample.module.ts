import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  InterpolationComponent,
  PropertyBindingComponent,
  EventBindingComponent,
  AttributeBindingComponent,
  ClassBindingComponent,
  StyleBindingComponent
} from "./index";

@NgModule({
  imports: [ CommonModule ],
  declarations: [
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    AttributeBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent
  ]
})
export class BindingSamplesModule {
}