export class Car {
  constructor( private engine: Engine, private tires: Tires ) {
  }

  drive() {
    return `Автомобиль с двигателем ${this.engine.cylinders} цилиндров и резиной ${this.tires.name}`;
  }
}

class Engine {
  cylinders: number;
}

class Engine2 {
  cylinders: number;
}

class Tires {
  name: string;
}

///////////////////////////////////////////
// BAD PRACTICE
//////////////////////////////////////////

// Сопровождение такого класса будет усложняться по мере роста приложения
// Для решения подобных проблем используется Dependency Injection Framework
class CarFactory {
  createCar() {
    let car = new Car(this.createEngine(), this.createTires());
    return car;
  }

  createEngine() {
    return new Engine();
  }

  createTires() {
    return new Tires();
  }
}