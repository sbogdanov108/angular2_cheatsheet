import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { User } from "../user";

@Component({
  moduleId: module.id,
  selector: "user-form5",
  templateUrl: "user-form5.component.html",
  styleUrls: [
    "../../../node_modules/bootstrap/dist/css/bootstrap.css",
    "user-form5.component.css"
  ]
})
export class UserForm5Component implements AfterViewInit {
  roles: string[] = [ "Guest", "Moderator", "Administrator" ];
  model: User = new User(1, "", "", null);
  submitted: boolean = false;

  // Объект с ошибками, которые будут выведены в пользовательском интерфейсе
  formErrors = {
    "name": "",
    "age": ""
  };

  // Объект с сообщениями ошибок
  validationMessages = {
    "name": {
      "required": "Обязательное поле.",
      "minlength": "Значение должно быть не менее 4х символов.",
    },
    "age": {
      "required": "Обязательное поле."
    }
  };

  // ViewChild - используем для получения доступа к указанному компоненту и его методам
  @ViewChild('userForm') userForm: NgForm;

  // Событие окончания инициализации шаблона
  ngAfterViewInit() {
    this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
  }

  onValueChanged( data?: any ) {
    if ( !this.userForm ) return;

    let form = this.userForm.form;

    for ( let field in this.formErrors ) {
      this.formErrors[ field ] = "";
      // form.get - получение элемента управления
      let control = form.get(field);

      if ( control && control.dirty && !control.valid ) {
        let message = this.validationMessages[ field ];

        for ( let key in control.errors ) {
          this.formErrors[ field ] += message[ key ] + " ";
        }
      }
    }
  }

  onSubmit() {
    this.submitted = true;
    console.log("submitted");
  }
}