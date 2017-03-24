import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  BlockComponent,
  BlockHostComponent,
  Block2Component,
  Block2HostComponent,
  ItemComponent,
  ListComponent,
  ListHostComponent
} from "./index";

@NgModule({
  imports: [ CommonModule ],
  declarations: [
    BlockComponent,
    BlockHostComponent,
    Block2Component,
    Block2HostComponent,
    ItemComponent,
    ListComponent,
    ListHostComponent
  ]
})
export class ChildAndContentSampleModule {
}