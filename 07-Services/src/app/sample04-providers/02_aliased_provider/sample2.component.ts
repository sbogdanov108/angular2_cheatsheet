import { Component } from "@angular/core";

import { Logger, Logger2 } from "../index";

@Component({
  moduleId: module.id,
  selector: "my-sample2",
  templateUrl: "sample2.component.html",
  providers: [
    Logger2,
    { provide: Logger, useExisting: Logger2 } // для токена Logger использовать существующий экземпляр Logger2, а не создавать новый.
  ]
  // Теперь компоненты будут использовать один объект, хотя при внедрении зависимости будут использоваться два разных токена Logger и Logger2
})
export class Sample2Component {
  private message: string;

  constructor( private logger: Logger ) {
  }

  logMessage() {
    this.logger.log(this.message);
  }
}