import { Component, Optional } from "@angular/core";
import { Logger } from "../index";

@Component({
  moduleId: module.id,
  selector: "my-sample6",
  templateUrl: "sample6.component.html",
  providers: [ Logger ]
})
export class Sample6Component {
  // @Optional() - зависимость является необязательной. Если инжектор не сможет ее создать, свойство logger будет null
  constructor( @Optional() private logger: Logger ) {
  }

  log() {
    if ( this.logger ) {
      this.logger.log("Option 1");
    }
    else {
      console.log("Option 2");
    }
  }
}
