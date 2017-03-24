import { Component, SimpleChange } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "sample3",
  templateUrl: "sample3.component.html",
  inputs: [ "name", "value" ]
})
export class Sample3Component {
  name: string;
  value: number;

  // { [propertyName: string]: SimpleChange } - массив с строковыми ключами и значением типа SimpleChange
  ngOnChanges( changes: { [propertyName: string]: SimpleChange } ) {

    let msgArray: string[] = [];

    for ( let propName in changes ) {
      msgArray.push(`property = ${propName}, current value = ${changes[ propName ].currentValue}, previous value = ${changes[ propName ].previousValue}`)
    }

    console.log(msgArray.join("; "));
  }
}