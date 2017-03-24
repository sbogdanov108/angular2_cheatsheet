export class Product {
  public id: string;
  public name: string;
  public price: number;

  constructor( id, name, price ) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}