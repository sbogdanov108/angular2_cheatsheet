import { Component, ReflectiveInjector } from "@angular/core";
import { Logger } from "../index";

@Component({
  moduleId: module.id,
  selector: "my-sample8",
  templateUrl: "sample8.component.html"
})
export class Sample8Component {
  onClick() {
    let injector = ReflectiveInjector.resolveAndCreate([ Logger ]);
    let logger = injector.get(Logger);
    logger.log("Hello world");
  }
}
