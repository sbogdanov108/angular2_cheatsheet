import { Injectable } from "@angular/core";

@Injectable()
export class Logger2 {
  messages: string[] = [];

  log( message: string ) {
    this.messages.push(message);
    console.log("Logger 2 " + message);
  }
}