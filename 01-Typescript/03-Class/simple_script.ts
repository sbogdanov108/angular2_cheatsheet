class Human {
  // Свойства класса
  private messageElementId: any;
  name: string;
  age: number;

  // Конструктор класса
  constructor( nameValue: string, ageValue: number, selector: string ) {
    this.name = nameValue;
    this.age = ageValue;
    this.messageElementId = document.querySelector(selector);
  }

  // Метод класса
  say() {
    let message = `My name is ${this.name}, I'am ${this.age} years old`;
    this.messageElementId.innerHTML = message;
  }
}

let h = new Human('Valdemar', 25, '#output');
h.say();
