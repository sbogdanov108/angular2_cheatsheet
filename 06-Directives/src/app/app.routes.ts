import { Routes } from "@angular/router";
import {
  InterpolationComponent,
  PropertyBindingComponent,
  EventBindingComponent,
  AttributeBindingComponent,
  ClassBindingComponent,
  StyleBindingComponent
} from "./sample01-binding/index";
import {
  CalcComponent,
  SampleNgModelComponent
} from "./sample02-two-way-databinding/index";
import {
  NgClassComponent,
  NgStyleComponent,
  NgIfComponent,
  NgSwitchComponent,
  NgForComponent
} from "./sample03-built-in-directives/index";
import {
  NgIfTemplateComponent,
  NgSwitchTemplateComponent,
  NgForTemplateComponent,
  TempRefVarComponent
} from "./sample04-templates/index";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "sample-01",
    pathMatch: "full"
  },
  {
    path: "sample-01",
    component: InterpolationComponent
  },
  {
    path: "sample-02",
    component: PropertyBindingComponent
  },
  {
    path: "sample-03",
    component: EventBindingComponent
  },
  {
    path: "sample-04",
    component: AttributeBindingComponent
  },
  {
    path: "sample-05",
    component: ClassBindingComponent
  },
  {
    path: "sample-06",
    component: StyleBindingComponent
  },
  {
    path: "sample-07",
    component: CalcComponent
  },
  {
    path: "sample-08",
    component: SampleNgModelComponent
  },
  {
    path: "sample-09",
    component: NgClassComponent
  },
  {
    path: "sample-10",
    component: NgStyleComponent
  },
  {
    path: "sample-11",
    component: NgIfComponent
  },
  {
    path: "sample-12",
    component: NgSwitchComponent
  },
  {
    path: "sample-13",
    component: NgForComponent
  },
  {
    path: "sample-14",
    component: NgIfTemplateComponent
  },
  {
    path: "sample-15",
    component: NgSwitchTemplateComponent
  },
  {
    path: "sample-16",
    component: NgForTemplateComponent
  },
  {
    path: "sample-17",
    component: TempRefVarComponent
  }
];