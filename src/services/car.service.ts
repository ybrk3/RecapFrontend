import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarDetail } from 'src/app/models/car-detail';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { ResponseModel } from 'src/app/models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:7082/api/cars/';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl + 'getall');
  }

  getCarDetails(): Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(
      this.apiUrl + 'getallcardetail'
    );
  }
  getCarDetailsByBrand(
    brandId: number
  ): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'getcarsbybrandiddetail?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarDetailsByColor(
    colorId: number
  ): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'getcarsbycoloriddetail?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarDetailsByCarId(
    carId: number
  ): Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(
      this.apiUrl + 'getallcardetailbycarid'
    );
  }
  add(car: Car): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'addcar', car);
  }
}
