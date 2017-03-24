import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { User } from "../user";
import { emailValidator, rangeValidator } from "./custom-validators";

@Component({
  moduleId: module.id,
  selector: "custom-validators",
  templateUrl: "custom-validators.component.html",
  styleUrls: [
    "../../../node_modules/bootstrap/dist/css/bootstrap.css",
    "custom-validators.component.css"
  ]
})
export class CustomValidatorsComponent implements OnInit {
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
      "emailValidator": "Неправильный формат email адреса."
    },
    "role": {
      "required": "Обязательное поле."
    },
    "age": {
      "required": "Обязательное поле.",
      "rangeValidator": "Значение должно быть в диапазоне от 10 до 100."
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
        emailValidator // использование пользовательского валидатора
      ] ],
      "role": [ this.user.role, [
        Validators.required
      ] ],
      "age": [ this.user.age, [
        Validators.required,
        rangeValidator(10, 100)
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