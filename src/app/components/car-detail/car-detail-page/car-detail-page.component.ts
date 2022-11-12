import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/car-detail';
import { CarImage } from 'src/app/models/car-image';
import { CarImageService } from 'src/services/car-image.service';
import { CarService } from 'src/services/car.service';

@Component({
  selector: 'app-car-detail-page',
  templateUrl: './car-detail-page.component.html',
  styleUrls: ['./car-detail-page.component.css'],
})
export class CarDetailPageComponent implements OnInit {
  carDetails: CarDetail[] = [];
  carImages: CarImage[];
  carDetail:CarDetail;
  currentImage: CarImage;
  imageUrl = 'https://localhost:7082';

  constructor(
    private carService: CarService,
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getCarById(params["id"]),
      this.getCarImagesByCarId(params["id"]);
    })
  }

  getCarById(carId: number) {
    this.carService.getCarDetailsByCarId(carId).subscribe(response => {
      this.carDetails = response.data;
    })
  }

  getCarImagesByCarId(carId: number) {
    this.carImageService.getImagesByCarId(carId).subscribe(response => {
      this.carImages = response.data;
    })
  }
  
  getImagePath(carDetail:CarDetail): string {
    let url: string = this.imageUrl + carDetail.imagePath
    return url
  }
}
