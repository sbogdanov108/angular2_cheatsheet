import { Injectable } from "@angular/core";
import { Router, Resolve, ActivatedRouteSnapshot } from "@angular/router";

import { Phrase } from "../shared/phrase";
import { PhraseService } from "../shared/phrase.service";

// Resolve - интерфейс указывает на то, что объект может быть поставщиком данных (data provider)
// Подобные объекты позволяют избедать проблемы связанной с тем что компонент уже отобразился пользователю а данные для компонента еще не доступны.
@Injectable()
export class PhraseDetailsResolve implements Resolve<Phrase> {
  constructor( private service: PhraseService,
               private router: Router ) {
  }

  resolve( route: ActivatedRouteSnapshot ): Promise<Phrase> | Phrase {
    let id = +route.params[ "id" ];

    return this.service.getPhrase(id).then(phrase => {
      if ( phrase ) {
        return phrase;
      } else { // не удалось найти фразу по id
        this.router.navigate([ "/phrases" ]);
        return false;
      }
    });
  }
}
