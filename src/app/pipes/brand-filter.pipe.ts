import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
import { CarDetail } from '../models/car-detail';

@Pipe({
  name: 'brandFilter',
})
export class BrandFilterPipe implements PipeTransform {
  transform(value: CarDetail[], selectedBrand: CarDetail): CarDetail[] {
    return selectedBrand
      ? value.filter(
          (c: CarDetail) =>
            c.brandName.toLocaleLowerCase().indexOf(selectedBrand.brandName) !==
            -1
        )
      : value;
  }
}
