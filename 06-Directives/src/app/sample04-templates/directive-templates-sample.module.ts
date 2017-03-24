import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
  NgIfTemplateComponent,
  NgSwitchTemplateComponent,
  NgForTemplateComponent,
  TempRefVarComponent
} from "./index";

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [ NgIfTemplateComponent, NgSwitchTemplateComponent, NgForTemplateComponent, TempRefVarComponent ]
})
export class DirectiveTemplatesSamplesModule {
}