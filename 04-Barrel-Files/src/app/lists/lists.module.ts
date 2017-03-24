import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { List1Component, List2Component } from "./index";

@NgModule({
  imports: [ CommonModule ],
  declarations: [ List1Component, List2Component ],
  exports: [ List1Component, List2Component ]
})
export class ListsModule {
}