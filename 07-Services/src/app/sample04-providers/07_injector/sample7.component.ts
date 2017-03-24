import { Component, Injector } from "@angular/core";
import { Logger } from "../index";

@Component({
  moduleId: module.id,
  selector: "my-sample7",
  templateUrl: "sample7.component.html",
  providers: [ Logger ]
})
export class Sample7Component {
  logger: Logger = this.injector.get(Logger);

  constructor( private injector: Injector ) {
  }

  log() {
    this.logger.log("Hello world");
  }
}
