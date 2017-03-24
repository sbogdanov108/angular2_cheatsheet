import { Component } from "@angular/core";

import { Logger, Logger2, Logger3 } from "../index";

@Component({
  moduleId: module.id,
  selector: "my-sample4",
  templateUrl: "sample4.component.html",
  providers: [ {
    provide: Logger,
    // фабричная ф-я
    useFactory: () => {
      return new Logger3("test");
    }
  } ]
})
export class Sample4Component {
  private message: string;

  constructor( private logger: Logger ) {
  }

  logMessage() {
    this.logger.log(this.message);
  }
}