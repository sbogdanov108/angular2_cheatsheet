// Декоратор для класса должен представлять функцию, возвращающую новый конструктор

function testClassDecorator() {
  return ( target ) => {

    let newConstructor: any = function () {
      target.apply(this); // выполняем конструктор класса для которого применен декоратор
      this.newProp = 123; // добавляем новое свойство
    };

    return newConstructor;
  }
}

// Применяем новый декоратор
@testClassDecorator()
class Test3 {
  prop1 = 10;
}

let t3 = new Test3();
console.log(t3);
