import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarDetailPageComponent } from './components/car-detail/car-detail-page/car-detail-page.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarComponent },
  { path: 'cars', component: CarComponent },
  { path: 'cars/brands/:brandId', component: CarComponent },
  { path: 'cars/colors/:id', component: CarComponent },
  { path: 'cars/car-detail-page/:id', component: CarDetailPageComponent },
  { path: 'brands/add', component: BrandAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
