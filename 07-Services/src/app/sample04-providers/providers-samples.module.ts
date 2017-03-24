import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
  Sample1Component,
  Sample2Component,
  Sample3Component,
  Sample4Component,
  Sample5Component,
  Sample6Component,
  Sample7Component,
  Sample8Component
} from "./index";

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [ Sample1Component, Sample2Component, Sample3Component, Sample4Component, Sample5Component, Sample6Component, Sample7Component, Sample8Component ]
})
export class ProvidersSamplesModule {
}