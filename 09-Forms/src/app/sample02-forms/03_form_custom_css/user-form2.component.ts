import { Component } from "@angular/core";
import { User } from "../user";

@Component({
  moduleId: module.id,
  selector: "user-form2",
  templateUrl: "user-form2.component.html",
  styleUrls: [
    "../../../node_modules/bootstrap/dist/css/bootstrap.css",
    "user-form2.component.css"
  ]
})
export class UserForm2Component {
  roles: string[] = [ "Guest", "Moderator", "Administrator" ];

  model: User = new User(1, "", "", null);

  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
  }
}