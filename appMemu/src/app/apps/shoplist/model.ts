var model = {
  user: 'Максим',
  items:[
    {shoppingitem: 'Хлеб', done: 'false'},
    {shoppingitem: 'Молоко', done: 'false'},
    {shoppingitem: 'Картошка', done: 'false'},
  ]
}

export class Model{
  user;
  items;
  constructor() {
    this.user = 'Максим';
    this.items  = [
      new TodoShoppingItem('Хлеб', 'false'),
      new TodoShoppingItem('Молоко', 'false'),
      new TodoShoppingItem('Картошка', 'false'),
    ]
  }
}
export class TodoShoppingItem {shoppingitem; done;
  constructor(shoppingitem:any, done:any) {
    this.shoppingitem = shoppingitem;
    this.done = done;
  }
}
