import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

interface login {
  login: string;
  password: string;
}

@Component({
  moduleId: module.id,
  selector: "form-control-sample",
  templateUrl: "form-control-val.component.html",
  styleUrls: [
    "../../../node_modules/bootstrap/dist/css/bootstrap.css"
  ]

})
export class FormControlValComponent implements OnInit {
  // FormGroup - группа отдельных элементов управления (FormControl)
  // FormControl - класс, который представляет элемент управления
  loginForm: FormGroup;

  ngOnInit() {
    // Validators - класс, со статическими методами для валидции.
    // При вызове конструктора FormControl первый параметр, значение поля ввода
    // второй параметр - валидатор или массив валидаторов.
    this.loginForm = new FormGroup({
      login: new FormControl("user1", Validators.required),
      password: new FormControl("", [ Validators.required, Validators.minLength(7) ])
    });
  }

  onSubmit( form ) {
    console.log(form.valid);
    console.log(form.value);
  }
}