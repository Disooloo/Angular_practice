import { Component, OnInit } from '@angular/core';
import {Shopping, ShoppingService} from "../shopping.service";

@Component({
  selector: 'app-shoptable-form',
  templateUrl: './shoptable-form.component.html',
  styleUrls: ['./shoptable-form.component.scss']
})
export class ShoptableFormComponent implements OnInit {

  title: string = ''

  constructor(public shoppingService:ShoppingService) { }

  ngOnInit(): void {
  }

  addShop(){
    const shopping: Shopping = {
      title: this.title,
      id: Date.now(),
      completed: false
    }
    this.shoppingService.addShop(shopping)
    this.title = ''
  }

}
