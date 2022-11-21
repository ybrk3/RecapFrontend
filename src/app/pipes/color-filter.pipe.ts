import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/car-detail';

@Pipe({
  name: 'colorFilter',
})
export class ColorFilterPipe implements PipeTransform {
  transform(value: CarDetail[], selectedColor: CarDetail): CarDetail[] {
    return selectedColor
      ? value.filter(
          (c: CarDetail) =>
            c.colorName.toLocaleLowerCase().indexOf(selectedColor.colorName) !==
            -1
        )
      : value;
  }
}
