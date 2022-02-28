import { Component, OnInit } from '@angular/core';
import {Model} from "./model";

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.scss']
})
export class ShoplistComponent implements OnInit {

  model = new Model()

  constructor() { }

  ngOnInit(): void {
  }

  getName(){
    return this.model.user;
  }

}
