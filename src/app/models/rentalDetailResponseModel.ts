import { RentalDetail } from "./rental-details";
import { ResponseModel } from "./responseModel";


export interface RentalDetailResponseModel extends ResponseModel{
    data:RentalDetail[];
}