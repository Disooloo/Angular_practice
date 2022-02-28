import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";

export interface Cars {
  id: number
  name: string
  model: string
  speed: number
  colorsCar?: string
  colorsSalon?: string
  colorsWheels?: string
  options?: any[]
  img?: string
}

@Injectable({
  providedIn: 'root'
})
export class CarService {

  public cars: Cars[] = [
    {id: 1, name: 'Audi', model: 'RS8',speed: 237, colorsCar: 'White', colorsSalon: 'Black', colorsWheels: 'selver',
      options: ["ABS",  " Автопилот"], img: 'https://name-style.ru/assets/cache_image/brands/models/bmw-m5_1000x600_cf9.jpg'},
    {id: 2, name: 'BMW', model: 'M5',speed: 217, colorsCar: 'White', colorsSalon: 'Black', colorsWheels: 'selver',
      options: ["ABS",  " Автопилот"], img: 'https://i.auto-bild.de/ir_img/2/3/6/5/5/0/7/Audi-RS8-1200x800-5c258dbf659226a2.jpg'},
  ]

  constructor() {
  }

  getCars(id: number):Observable<Cars> {
    const cars = this.cars.find(h => h.id === id)!;
    return of(cars);


  }

}
