import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  Sample1Component,
  Sample1HostComponent,
  Sample2Component,
  Sample2HostComponent,
  Sample3Component,
  Sample3HostComponent,
  Sample4Component,
  Sample4HostComponent
} from "./index";

@NgModule({
  imports: [ CommonModule ],
  declarations: [
    Sample1Component,
    Sample1HostComponent,
    Sample2Component,
    Sample2HostComponent,
    Sample3Component,
    Sample3HostComponent,
    Sample4Component,
    Sample4HostComponent
  ]
})
export class LifecycleSampleModule {
}