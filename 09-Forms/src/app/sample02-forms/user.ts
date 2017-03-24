export class User {
  constructor( public id: number,
               public name: string,
               public role: string,
               public age?: number ) {
  }
}