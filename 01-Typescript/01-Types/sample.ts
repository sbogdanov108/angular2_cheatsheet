// Определение переменной
// let идентификатор: тип = значение;

let isDone: boolean = true; // true/false
let value: number = 10; // целочисленные, вещественные Infinity и NaN
let stringValue: string = "test"; // строковые значения

let list1: number[] = [ 1, 2, 3 ]; // определение массива чисел
let list2: Array<number> = [ 1, 2, 3 ]; // определение массива чисел с использованием generic типа Array<elemType>

// определение перечисления
// перечисления дают возможность задать понятные имена для набора числовых значений
enum Color {
  Red = 1,
  Green = 2,
  Blue = 3
}

let c: Color = Color.Green; // определение переменной с типа перечисления Color

// any - тип для определения переменной, типа которой в данный момент мы не знаем
let someValue: any = 4;
someValue = 'test string';
someValue = false;

// определение функции, которая принимает аргумент типа string и ничего не возвращает
function showMessage( data: string ): void {
  alert(data);
}

showMessage('hello');
