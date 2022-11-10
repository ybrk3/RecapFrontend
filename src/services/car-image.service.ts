import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from 'src/app/models/car-image';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarImageService {
  apiUrl = 'https://localhost:7082/api/CarImages/';

  constructor(private httpClient:HttpClient) {}

getImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
  let newPath =this.apiUrl+"getbycarid?carId="+carId;
  return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
}
}
