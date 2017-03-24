import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgClassComponent, NgStyleComponent, NgIfComponent, NgSwitchComponent, NgForComponent } from "./index";

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [ NgClassComponent, NgStyleComponent, NgIfComponent, NgSwitchComponent, NgForComponent ]
})
export class BuiltInDirectivesSamplesModule {
}