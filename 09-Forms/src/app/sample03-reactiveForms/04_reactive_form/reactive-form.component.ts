import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { User } from "../user";

@Component({
  moduleId: module.id,
  selector: "reactive-form",
  templateUrl: "reactive-form.component.html",
  styleUrls: [
    "../../../node_modules/bootstrap/dist/css/bootstrap.css",
    "reactive-form.component.css"
  ]
})
export class ReactiveFormComponent implements OnInit {
  userForm: FormGroup;
  user: User = new User();

  roles: string[] = [ "Guest", "Moderator", "Administrator" ];

  // Объект с ошибками, которые будут выведены в пользовательском интерфейсе
  formErrors = {
    "name": "",
    "age": "",
    "email": "",
    "role": ""
  };

  // Объект с сообщениями ошибок
  validationMessages = {
    "name": {
      "required": "Обязательное поле.",
      "minlength": "Значение должно быть не менее 4х символов.",
      "maxlength": "Значение не должно быть больше 15 символов."
    },
    "email": {
      "required": "Обязательное поле.",
      "pattern": "Неправильный формат email адреса."
    },
    "role": {
      "required": "Обязательное поле."
    },
    "age": {
      "required": "Обязательное поле.",
      "pattern": "Значение должно быть целым числом."
    }
  };

  constructor( private fb: FormBuilder ) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.userForm = this.fb.group({
      "name": [ this.user.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15)
      ] ],
      "email": [ this.user.email, [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}")
      ] ],
      "role": [ this.user.role, [
        Validators.required
      ] ],
      "age": [ this.user.age, [
        Validators.required,
        Validators.pattern("\\d+")
      ] ]
    });

    this.userForm.valueChanges
      .subscribe(data => this.onValueChange(data));

    this.onValueChange();
  }

  onValueChange( data?: any ) {
    if ( !this.userForm ) return;

    let form = this.userForm;

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
    console.log("submitted");
    console.log(this.userForm.value);
  }
}