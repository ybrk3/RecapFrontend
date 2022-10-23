import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarResponseModel } from 'src/app/models/carResponseModel';
import { CarDetail } from 'src/app/models/car-detail';
import { Observable } from 'rxjs';
import { CarDetailsResponseModel } from 'src/app/models/carDetailsResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:7082/api/cars/';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<CarResponseModel> {
    return this.httpClient.get<CarResponseModel>(this.apiUrl + 'getall');
  }

  getCarDetails(): Observable<CarDetailsResponseModel> {
    return this.httpClient.get<CarDetailsResponseModel>(this.apiUrl + 'getallcardetail');
  }
}
