import { Injectable } from "@angular/core";
import { Jsonp, URLSearchParams } from "@angular/http";

import 'rxjs/add/operator/map';

@Injectable()
export class WikiService {
  // Jsonp сервис для работы с JSONP
  constructor( private jsonp: Jsonp ) {
  }

  public search( term: string ) {
    let wikiUrl = "http://ru.wikipedia.org/w/api.php";

    // Параметры поисковой строки
    let params = new URLSearchParams();
    params.set("search", term);
    params.set("action", "opensearch");
    params.set("format", "json");
    params.set("callback", "JSONP_CALLBACK");

    return this.jsonp
      .get(wikiUrl, { search: params })
      .map(response => {
        let responseData = <string[]>response.json(); // конвертируем данные в массив строк
        let names = responseData[ 1 ];
        let descriptions = responseData[ 2 ];
        let links = responseData[ 3 ];
        let length = names.length;

        let result: any[] = [];

        for ( let i = 0; i < length; ++i ) {
          result.push({
            name: names[ i ],
            link: links[ i ],
            description: descriptions[ i ]
          });
        }

        return result;
      });
  }
}