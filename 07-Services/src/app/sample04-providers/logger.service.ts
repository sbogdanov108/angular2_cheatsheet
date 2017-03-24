import { Injectable } from "@angular/core";

@Injectable()
export class Logger {
  messages: string[] = [];

  log( message: string ) {
    this.messages.push(message);
    console.log(message);
  }

  log2() {
  }
}