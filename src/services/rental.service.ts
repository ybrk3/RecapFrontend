import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetailResponseModel } from 'src/app/models/rentalDetailResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = 'https://localhost:7082/api/rentals/';

  constructor(private httpClient:HttpClient) { }

  getRentalDetails():Observable<RentalDetailResponseModel>{
   return this.httpClient.get<RentalDetailResponseModel>(this.apiUrl+"getall");
  }

}
