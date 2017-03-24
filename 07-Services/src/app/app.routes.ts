import { Routes } from "@angular/router";
import { DataListComponent } from "./sample02-simpleService/index";
import { CounterParentComponent } from "./sample03-serviceHierarchy/index";
import {
  Sample1Component,
  Sample2Component,
  Sample3Component,
  Sample4Component,
  Sample5Component,
  Sample6Component,
  Sample7Component,
  Sample8Component
} from "./sample04-providers/index";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "sample1",
    pathMatch: "full"
  },
  {
    path: "sample1",
    component: DataListComponent
  },
  {
    path: "sample2",
    component: CounterParentComponent
  },
  {
    path: "sample3",
    component: Sample1Component
  },
  {
    path: "sample4",
    component: Sample2Component
  },
  {
    path: "sample5",
    component: Sample3Component
  },
  {
    path: "sample6",
    component: Sample4Component
  },
  {
    path: "sample7",
    component: Sample5Component
  },
  {
    path: "sample8",
    component: Sample6Component
  },
  {
    path: "sample9",
    component: Sample7Component
  },
  {
    path: "sample10",
    component: Sample8Component
  }
];