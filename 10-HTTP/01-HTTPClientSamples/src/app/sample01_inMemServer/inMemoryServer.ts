import { InMemoryDbService } from "angular2-in-memory-web-api";

export class ItemData implements InMemoryDbService {
  createDb() {
    let items = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
      { id: 4, name: 'Item 4' }
    ];

    return { items };
  }
}