import { Injectable } from '@angular/core';

export interface Shopping{
  id: number
  title: string
  completed: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  public shopping: Shopping[] = [
    {id: 1, title: 'Хлеб', completed: false},
    {id: 2, title: 'Молоко', completed: true},
    {id: 3, title: 'Картошка', completed: false},
  ]

  onToggle(id:number){
    const idx = this.shopping.findIndex(t => t.id === id)
    this.shopping[idx].completed = !this.shopping[idx].completed
  }

  removeShop(id:number){
    this.shopping = this.shopping.filter(t => t.id !== id)
  }

  addShop(shopping: Shopping){
    this.shopping.push(shopping)
  }
  constructor() { }
}
