import { Time } from "@angular/common";

export interface Rental{
    id:number,
    carId:number,
    customerId:number,
    brandId:number,
    rentDate:Time,
    returnDate:Time
}