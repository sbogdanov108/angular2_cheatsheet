import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router"

import { Phrase } from "../shared/phrase";
import { PhraseService } from "../shared/phrase.service";

@Component({
  moduleId: module.id,
  selector: "phrase-list",
  templateUrl: "phrase-list.component.html",
  styleUrls: [ "phrase-list.component.css" ]
})
export class PhraseListComponent implements OnInit {
  phrases: Phrase[];

  constructor( private router: Router,
               private phraseService: PhraseService ) {
  }

  ngOnInit() {
    this.phraseService // обращаемся к сервису
      .getAll() // получаем Promise
      .then(result => this.phrases = result); // как только Promise перейдет в состояние resolved результат его работы присваиваем свойству phrases
  }

  onSelect( selected: Phrase ) {
    // При клике по элементу списка перенаправляем пользователя по адресу /phrases/id
    // адрес с обязательным параметром, указанным в настройках маршрутизации в файле app.routes.ts
    this.router.navigate([ "phrase", selected.id ]);
  }
}
