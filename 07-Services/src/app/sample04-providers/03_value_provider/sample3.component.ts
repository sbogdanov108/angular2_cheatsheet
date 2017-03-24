import { Component } from "@angular/core";

import { Logger } from "../index";

let simpleLogger = {
  log: ( m ) => {
    console.log("simple logger - " + m);
  }
};

@Component({
  moduleId: module.id,
  selector: "my-sample3",
  templateUrl: "sample3.component.html",
  providers: [ { provide: Logger, useValue: simpleLogger } ] // для токена Logger использовать существующий литерал simpleLogger
})
export class Sample3Component {
  private message: string;

  constructor( private logger: Logger ) {
  }

  logMessage() {
    this.logger.log(this.message);
  }
}