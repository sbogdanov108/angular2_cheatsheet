import { Component } from "@angular/core";

import { Logger, Logger2 } from "../index";

@Component({
  moduleId: module.id,
  selector: "my-sample1",
  templateUrl: "sample1.component.html",
  providers: [ { provide: Logger, useClass: Logger } ]
  // [Logger] - это сокращенная нотация регистрации провайдера
  // [{ provide: Logger, useClass: Logger }] - регистрация провайдера с использованием Provider Object Literal
  // первый параметр - token
  // второй параметр - provider definition object

  // альтернативный класс провайдера
  // providers: [{ provide: Logger, useClass: Logger2 }]
})
export class Sample1Component {
  private message: string;

  constructor( private logger: Logger ) {
  }

  logMessage() {
    this.logger.log(this.message);
  }
}