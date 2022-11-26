import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { CarService } from 'src/services/car.service';
@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
})
export class CarAddComponent {
  carAddForum: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService
  ) {}
  ngOnInit(): void {
    this.createCarAddForm();
  }
  createCarAddForm() {
    this.carAddForum = this.formBuilder.group({
      carId: ['', Validators.required],
      carName: ['', Validators.required],
      brandId: ['', Validators.required],
      modelYear: ['', Validators.required],
    });
  }
  add() {
    if (this.carAddForum.valid) {
      let productModel = Object.assign({}, this.carAddForum.value);
      this.carService.add(productModel).subscribe((response) => {
        console.log(response);
      });
    }
  }
}
