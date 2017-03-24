// Интерфейс Shape определяет соглашение, указывающее, что классы реализующие этот интерфейс должны
// определить свойство строкового типа с именем name и метод printArea без параметров и возвращаемого значения
interface Shape {
  name: string;
  printArea: () => void;
}

// Определение класса Rectangle реализующего интерфейс Shape
class Rectangle implements Shape {
  name: string = "Rectangle";

  height: number;
  width: number;

  constructor( h: number, w: number ) {
    this.height = h;
    this.width = w;
  }

  printArea() {
    let area: number = this.height * this.width;
    console.log(`Area of ${this.name} is ${area}`);
  }
}

// Определение класса Circle реализующего интерфейс Shape
class Circle implements Shape {
  name: string = "Circle";
  radius: number;

  constructor( r: number ) {
    this.radius = r;
  }

  printArea() {
    let area = Math.PI * Math.pow(this.radius, 2);
    console.log(`Area of ${this.name} is ${area}`);
  }
}

// Определение массива Shape
let shapes: Array<Shape> = new Array<Shape>();
// Или
// let shapes: Shape[] = new Array<Shape>();

// В данном массиве могут находиться только те объекты, которые имеют метод printArea и свойство name
shapes[ 0 ] = new Rectangle(100, 200);
shapes[ 1 ] = new Circle(20);

for ( let i = 0; i < shapes.length; i++ ) {
  let currentShape = shapes[ i ];
  currentShape.printArea();
}
