import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  title = 'В разработке'
  text = "My sample text"
  obj = {name: 'Ivan', info: {age: 25, job: 'Frontend'}}

  constructor() { }

  ngOnInit(): void {
  }


}
