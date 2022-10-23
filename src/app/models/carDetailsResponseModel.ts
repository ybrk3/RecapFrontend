import { CarDetail } from "./car-detail";
import { ResponseModel } from "./responseModel";

export interface CarDetailsResponseModel extends ResponseModel{
    data:CarDetail[];
}