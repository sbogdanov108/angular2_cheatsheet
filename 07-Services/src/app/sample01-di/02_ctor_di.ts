export class Car {
  // При вызове данного конструктора, необходимо передать два параметра,
  // которые станут закрытыми свойствами класса Car
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

// Зависимости передаются при создании экземпляра класса.
let c1 = new Car(new Engine(), new Tires());

// Это дает возможность использовать другие классы зависимостей без внесения изменений в класс Car
let c2 = new Car(new Engine2(), new Tires());

// Также появляется возможность тестировать класс Car
class MockEngine extends Engine {
  cylinders = 8;
}

class MockTires extends Tires {
  name = "test";
}

let c3 = new Car(new MockEngine(), new MockTires());

// Но теперь появляется проблема с клиентами класса Car
// Для того, чтобы создать экземпляр класса, необходимо создать и настроить все зависимости.