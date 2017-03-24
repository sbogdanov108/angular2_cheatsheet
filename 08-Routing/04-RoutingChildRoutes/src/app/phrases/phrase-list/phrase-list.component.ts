import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router"

import { Phrase } from "../../shared/phrase";
import { PhraseService } from "../../shared/phrase.service";

@Component({
  moduleId: module.id,
  selector: "phrase-list",
  templateUrl: "phrase-list.component.html",
  styleUrls: [ "phrase-list.component.css" ]
})
export class PhraseListComponent implements OnInit {

  selectedId: number;
  phrases: Phrase[];

  constructor( private router: Router,
               private activatedRoute: ActivatedRoute,
               private phraseService: PhraseService ) {
  }

  ngOnInit() {
    this.activatedRoute.params.forEach(( params: Params ) => {
      this.selectedId = +params[ "id" ]; // чтение опционального параметра
      this.phraseService
        .getAll()
        .then(result => this.phrases = result);
    });
  }

  isSelected( phrase: Phrase ) {
    return phrase.id == this.selectedId;
  }

  onSelect( selected: Phrase ) {
    // При клике по элементу списка перенаправляем пользователя по адресу /phrases/id
    // адрес с обязательным параметром указан в настройках маршрутизации в файле app.routes.ts
    this.router.navigate([ "/phrases", selected.id ]);
  }
}
