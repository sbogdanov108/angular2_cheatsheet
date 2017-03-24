import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Phrase } from "../../shared/phrase";

@Component({
  moduleId: module.id,
  selector: "phrase-details",
  templateUrl: "phrase-details.component.html"
})
export class PhraseDetailsComponent implements OnInit {

  phrase: Phrase;
  // поля, в которые будут скопированы значения для редактирования
  editValue: string;
  editLanguage: string;

  constructor( private router: Router,
               private activatedRoute: ActivatedRoute ) {
  }

  ngOnInit() {
    // phrase - инициализируется с помощью PhraseDetailsResolve объекта, который указан
    // в настройках системы маршрутизации.
    // на activatedRoute обращаемся к свойству data, а не param как в прошлых примерах.
    // Данный компонент избавился от зависимости PhraseService
    this.activatedRoute.data.forEach(( data: { phrase: Phrase } ) => {
      this.phrase = data.phrase;
      this.editValue = data.phrase.value;
      this.editLanguage = data.phrase.language;
    });
  }

  // метод для сохранения изменений сделанных пользователем.
  save() {
    this.phrase.value = this.editValue;
    this.phrase.language = this.editLanguage;
    this.goToPhrasesList();
  }

  goToPhrasesList() {
    let pId = this.phrase ? this.phrase.id : null;
    this.router.navigate([ "../", { id: pId } ], { relativeTo: this.activatedRoute });
  }

  // метод для проверки возможности перенаправления пользователя на другой маршрут
  // если метод возвращает true перенаправление возможно
  // если метод вернет false пользователь получит уведомление с просьбой подтвердить переход
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

