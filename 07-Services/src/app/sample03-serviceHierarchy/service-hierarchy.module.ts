import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  CounterParentComponent,
  Counter1Component,
  Counter2Component,
  Counter3Component,
  CounterService
} from "./index";

@NgModule({
  imports: [ CommonModule ],
  declarations: [ CounterParentComponent, Counter1Component, Counter2Component, Counter3Component ],
  providers: [ CounterService ]
})
export class ServiceHierarchyModule {
}