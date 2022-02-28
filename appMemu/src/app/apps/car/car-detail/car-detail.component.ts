import { Component, OnInit, Input} from '@angular/core';
import {Cars, CarService} from "../car.service";
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  cars: Cars | undefined


  constructor(
    public carService: CarService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCars()
  }

  getCars(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.carService.getCars(id)
      .subscribe(cars => this.cars = cars);
  }

  goBack(){
    this.location.back();
  }

}
