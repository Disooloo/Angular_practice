import { Component, OnInit } from '@angular/core';
import {Cars, CarService} from "./car.service";


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  cars: Cars[] = []

  constructor(public carService: CarService) { }

  ngOnInit(): void {

  }
  getCars(): void {
  }


}
