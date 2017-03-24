import { Routes } from "@angular/router";

import {
  BookComponent,
  CounterHostComponent,
  TimerHostComponent,
  NameCardHostComponent,
  MessageBoxHostComponent
} from "./01_components/index";

import {
  Sample1HostComponent,
  Sample2HostComponent,
  Sample3HostComponent,
  Sample4HostComponent
} from "./02_lifecycle/index";

import { BlockHostComponent, Block2HostComponent, ListHostComponent } from "./03_child_and_content/index";

export const routes: Routes = [
  { path: "", redirectTo: "sample1", pathMatch: "full" },
  { path: "sample1", component: BookComponent },
  { path: "sample2", component: CounterHostComponent },
  { path: "sample3", component: TimerHostComponent },
  { path: "sample4", component: NameCardHostComponent },
  { path: "sample5", component: MessageBoxHostComponent },
  { path: "sample6", component: Sample1HostComponent },
  { path: "sample7", component: Sample2HostComponent },
  { path: "sample8", component: Sample3HostComponent },
  { path: "sample9", component: Sample4HostComponent },
  { path: "sample10", component: BlockHostComponent },
  { path: "sample11", component: Block2HostComponent },
  { path: "sample12", component: ListHostComponent },
];