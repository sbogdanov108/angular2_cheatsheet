import { Component } from "@angular/core";
import { WikiService } from "./wiki.service";

@Component({
  moduleId: module.id,
  selector: "my-wiki",
  templateUrl: "wiki.component.html"
})
export class WikiComponent {
  items: any[] = [];

  constructor( private wiki: WikiService ) {
  }

  public search( term: string ) {
    this.wiki.search(term).subscribe(
      response => this.items = response
    );
  }
}