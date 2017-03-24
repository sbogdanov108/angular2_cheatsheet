import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms"; // для ngModel
import { CalcComponent, SampleNgModelComponent } from "./index";

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [ CalcComponent, SampleNgModelComponent ]
})
export class TwoWayBindingSamplesModule {
}