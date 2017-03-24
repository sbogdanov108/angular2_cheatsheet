import { List1Component, List2Component } from "./index";

export const routs = [
  { path: "list1", component: List1Component },
  { path: "list2", component: List2Component },
  { path: "", redirectTo: "list1", pathMatch: "full" }
];