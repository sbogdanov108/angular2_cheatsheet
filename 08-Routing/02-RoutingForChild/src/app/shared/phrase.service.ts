import { Injectable } from "@angular/core";

import { Phrase } from "./phrase";

let phrases = [
  new Phrase(1, "Hello World", "English"),
  new Phrase(2, "Hola Mundo", "Spanish"),
  new Phrase(3, "Привіт Світ", "Ukrainian"),
  new Phrase(4, "Bonjour le monde", "French"),
  new Phrase(5, "Hallo Welt", "German"),
  new Phrase(6, "Привет Мир", "Russian"),
  new Phrase(7, "Ciao mondo", "Italian"),
  new Phrase(8, "Witaj świecie", "Polish"),
  new Phrase(9, "Hej världen", "Swdish"),
  new Phrase(10, "Pozdravljen, svet", "Slovenian"),
  new Phrase(11, "Прывітанне Сусвет", "Belarusian")
];

// Promise, который сразу переходит в состояние resolved с данными из массива phrases
let phrasesPromise = Promise.resolve(phrases);

// Сервис для работы с данными.
// в будущем его можно переделать на работу с сервером
@Injectable()
export class PhraseService {

  // Метод для получения всех фраз. Возвращает Promise с массивом Phrase
  getAll(): Promise<Phrase[]> {
    return phrasesPromise;
  }

  // Метод для получения фразы по id. Возвращает Promise c экземпляром Phrase
  getPhrase( id: number ): Promise<Phrase> {
    return phrasesPromise
      .then(phrases => phrases.find(x => x.id == id));
  }
}

