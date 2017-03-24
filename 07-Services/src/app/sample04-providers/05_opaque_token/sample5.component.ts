import { Component, OpaqueToken, Inject } from "@angular/core";

// OpaqueToken может использоваться, когда создаваемая зависимость не является классом.
// При создании OpaqueToken в конструкторе в качестве параметра указывается строковое описание токена.
// Для того, чтобы внедрить связанное значение с этим токеном необходимо использовать декоратор @Inject
let APP_CONFIG = new OpaqueToken("app_config"); // в конструктор передается описание

const config = {
  prop1: "value 1",
  prop2: "value 2"
};

@Component({
  moduleId: module.id,
  selector: "my-sample5",
  templateUrl: "sample5.component.html",
  providers: [ {
    provide: APP_CONFIG,
    useValue: config
  } ]
})
export class Sample5Component {
  config: any;
  // При создании Sample5Component инжектор внедрит значение объекта config в аргумент конструктора с именем config
  constructor( @Inject(APP_CONFIG) config: any ) {
    this.config = config;
  }

  logConfigIngo() {
    console.log(this.config.prop1);
    console.log(this.config.prop2);
  }
}
