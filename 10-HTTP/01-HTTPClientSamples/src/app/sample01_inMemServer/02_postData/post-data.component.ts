import { Component, OnInit } from "@angular/core";
import { Http, RequestOptions } from "@angular/http";

@Component({
  moduleId: module.id,
  selector: "post-data",
  templateUrl: "post-data.component.html"
})
export class PostDataComponent implements OnInit {
  id: number;
  name: string;
  itemArray: any[];

  ngOnInit() {
    this.http.get("app/items").subscribe(
      result => this.itemArray = result.json().data,
      error => console.log(error.statusText)
    );
  }

  constructor( private http: Http ) {
  }

  clickHandler() {
    this.http.post("app/items", {
      id: this.id,
      name: this.name
    }).subscribe(
      result => {
        let json = result.json();

        if ( json )
          this.itemArray.push(json.data);
      },
      error => console.log(error.statusText)
    );
  }
}
