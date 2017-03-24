import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { CanComponentDeactivate } from "../../shared/can-deactivate-guard.service"
import { Phrase } from "../../shared/phrase";
import { PhraseService } from "../../shared/phrase.service";

@Component({
  moduleId: module.id,
  selector: "phrase-details",
  templateUrl: "phrase-details.component.html"
})
export class PhraseDetailsComponent implements OnInit, CanComponentDeactivate {
  phrase: Phrase;
  // Свойства, в которые будут скопированы значения для редактирования
  editValue: string;
  editLanguage: string;

  constructor( private router: Router,
               private activatedRoute: ActivatedRoute,
               private service: PhraseService ) {
  }

  ngOnInit() {
    this.activatedRoute.params.forEach(( params: Params ) => {
      let id = +params[ "id" ];
      this.service
        .getPhrase(id)
        .then(result => {
          this.phrase = result;
          this.editValue = this.phrase.value;
          this.editLanguage = this.phrase.language;
        });

    });
  }

  // Метод для сохранения изменений, сделанных пользователем.
  save() {
    this.phrase.value = this.editValue;
    this.phrase.language = this.editLanguage;
    this.goToPhrasesList();
  }

  goToPhrasesList() {
    let pId = this.phrase ? this.phrase.id : null;
    this.router.navigate([ "../", { id: pId } ], { relativeTo: this.activatedRoute });
  }

  // Метод для проверки возможности перенаправления пользователя на другой маршрут
  // Если метод возвращает true перенаправление возможно
  // Если метод вернет false пользователь получит уведомление с просьбой подтвердить переход
  // Данный метод будет использоваться при работе с CanDeactivateGuard (shared/can-deactivate-guard.service.ts)
  canDeactivate(): Promise<boolean> | boolean {
    if ( !this.phrase ) {
      return true;
    }

    if ( this.phrase.value == this.editValue && this.phrase.language == this.editLanguage ) {
      return true;
    }

    return confirm("Вы не сохранили изменения. Уйти со страницы?");
  }
}

