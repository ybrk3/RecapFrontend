import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { BrandService } from 'src/services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css'],
})
export class BrandAddComponent implements OnInit {
  brandAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private brandService: BrandService
  ) {}

  ngOnInit(): void {
    this.createBrandAddForm();
  }
  createBrandAddForm() {
    this.brandAddForm = this.formBuilder.group({
      brandName: ['', Validators.required],
      brandId: ['', Validators.required],
    });
  }
  add() {
    if (this.brandAddForm.valid) {
      let productModel = Object.assign({}, this.brandAddForm.value);
      this.brandService.add(productModel).subscribe((response) => {
        console.log(response);
      });
    }
  }
}
