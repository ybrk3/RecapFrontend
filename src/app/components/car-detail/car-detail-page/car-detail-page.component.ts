import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/car-detail';
import { CarImage } from 'src/app/models/car-image';
import { CarImageService } from 'src/services/car-image.service';
import { CarService } from 'src/services/car.service';

@Component({
  selector: 'app-car-detail-page',
  templateUrl: './car-detail-page.component.html',
  styleUrls: ['./car-detail-page.component.css']
})
export class CarDetailPageComponent implements OnInit {
  
  carDetails:CarDetail[] = [];
  carImages:CarImage[];
  currentImage: CarImage;
  imageUrl = "https://localhost:44303"

  constructor(private carService:CarService, private carImageService:CarImageService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getCarById(params["carId"])
      this.getImageByCarId(params["carId"])
    })
  }

  getCarById(carId:number){
    this.carService.getCarDetailsByCarId(carId).subscribe(response => {
      this.carDetails = response.data;
    })
  }

  getImageByCarId(carId:number){
    this.carImageService.getImagesByCarId(carId).subscribe(response => {
      this.carImages = response.data;
    })
  }

  getButtonClass(image: CarImage) {
    if ((image === this.carImages[0])) {
      return 'active';
    } else {
      return '';
    }
  }

  getCurrentImageClass(image: CarImage) {
    if (this.carImages[0] == image) {
      return 'carousel-item active';
    } else {
      return 'carousel-item ';
    }
  }

  setCurrentImageClass(image: CarImage) {
    this.currentImage = image;
  }

  getCarImage(carImage:CarImage, carId: number){
    if (carImage.carId == 0) {
      let path = this.imageUrl + "/images/carDefault.png"
      return path;

    }
    else{
      let path = this.imageUrl + carImage.imagePath;
      return path;
    }
  }


  
}
