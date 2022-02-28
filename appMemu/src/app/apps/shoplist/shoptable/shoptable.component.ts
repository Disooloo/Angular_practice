import {Component, OnInit} from '@angular/core';
import {ShoppingService} from "../shopping.service";

@Component({
  selector: 'app-shoptable',
  templateUrl: './shoptable.component.html',
  styleUrls: ['./shoptable.component.scss']
})
export class ShoptableComponent implements OnInit {


  onChange(id:number){
     this.shoppingService.onToggle(id)
  }
  removeShop(id:number){
    this.shoppingService.removeShop(id)
  }

  constructor(public shoppingService:ShoppingService) { }

  ngOnInit(): void {
  }



}
