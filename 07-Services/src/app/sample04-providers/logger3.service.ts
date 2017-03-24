import { Injectable } from "@angular/core";

@Injectable()
export class Logger3 {
  constructor( private prefix: string ) {
  }

  log( message: string ) {
    console.log(this.prefix + "_" + message);
  }
}