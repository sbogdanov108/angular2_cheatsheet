// Декораторы - экспериментальная функциональность, которая может измениться в будущем
// Для того чтобы пример работал, в настройках компилятора нужно указать параметры experimentalDecorators и emitDecoratorMetadata

// Декораторы дают возможность использовать аннотации и добавлять метаданные к классам и их членам

// Декоратор Override позволяет заменить значение свойства на указанное в параметре
function Override( label: string ) {
  // target - объект, в котором используется декоратор
  // key - имя свойства
  return function ( target: any, key: string ) {
    // На объекте target определяем свойство key c конфигурацией {...}
    Object.defineProperty(target, key, {
      configurable: false,
      get: () => label
    })
  }
}

class Test {
  @Override("Hello world")
  name: string = "...";
}

let t = new Test();
console.log(t.name); // Hello world

// ReadOnly указывает, что свойство не может менять значение
function ReadOnly( target: any, key: string ) {
  Object.defineProperty(target, key, { writable: false });
}

class Test2 {
  @ReadOnly
  name: string;
}

let t2 = new Test2();
t2.name = "Ivan";
console.log(t2.name); // undefined
