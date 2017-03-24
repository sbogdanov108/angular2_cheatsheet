import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators, FormBuilder } from "@angular/forms";

interface login {
  login: string;
  password: string;
}

@Component({
  moduleId: module.id,
  selector: "form-builder-sample",
  templateUrl: "form-builder.component.html",
  styleUrls: [
    "../../../node_modules/bootstrap/dist/css/bootstrap.css"
  ]

})
export class FormBuilderComponent implements OnInit {
  constructor( private fb: FormBuilder ) {
  }

  loginForm: FormGroup;

  ngOnInit() {
    // FormBuilder - класс, предоставляющий удобный интерфейс для создания экземпляров FormControl и FormGroup
    this.loginForm = this.fb.group({
      login: [ "user1", Validators.required ],
      password: [ "", [ Validators.required, Validators.minLength(7) ] ]
    });
  }

  onSubmit( form ) {
    console.log(form.valid);
    console.log(form.value);
  }
}