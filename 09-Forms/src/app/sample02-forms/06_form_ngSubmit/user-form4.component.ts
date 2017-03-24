import { Component } from "@angular/core";
import { User } from "../user";

@Component({
  moduleId: module.id,
  selector: "user-form4",
  templateUrl: "user-form4.component.html",
  styleUrls: [
    "../../../node_modules/bootstrap/dist/css/bootstrap.css",
    "user-form4.component.css"
  ]
})
export class UserForm4Component {
  roles: string[] = [ "Guest", "Moderator", "Administrator" ];

  model: User = new User(1, "", "", null);

  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
    console.log("submitted");
  }
}