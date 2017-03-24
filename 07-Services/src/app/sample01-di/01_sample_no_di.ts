export class Car {
  private engine: Engine;
  private tires: Tires;

  // Проблема данного класса в том, что он хрупкий, не гибкий, тяжело расширяется и не поддается тестированию.

  // Если измениться конструктор класса Engine или Tires (например, нужно будет указать дополнительные параметры),
  // то нарушится работа класса Car. Это делает класс хрупким.

  // Если мы захотим поместить другой тип резины в свойство tires, то столкнемся с проблемой, связанной с тем,
  // что тип шин заранее определен конструктором и поменять его тяжело. Это делает класс негибким.

  // Если мы захотим использовать один и тот же экземпляр зависимостей, для разных экземпляров автомобилей
  // в текущей версии конструктора — это невозможно будет сделать. Данному классу не хватает гибкости.

  // Для данного класса тяжело написать Unit-тест, т.к. нет контроля над зависимостями. Нет возможности
  // контролировать какие значения будут возвращаться экземплярами классов Engine и Tires.
  constructor() {
    this.engine = new Engine();
    this.tires = new Tires();
  }

  drive() {
    return `Автомобиль с двигателем ${this.engine.cylinders} цилиндров и резиной ${this.tires.name}`;
  }
}

class Engine {
  cylinders: number;
}

class Tires {
  name: string;
}

// создание экземпляра
let c = new Car();