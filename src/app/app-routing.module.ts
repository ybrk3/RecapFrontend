import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailPageComponent } from './components/car-detail/car-detail-page/car-detail-page.component';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:CarComponent},
  {path:"cars", component:CarComponent},
  {path:"cars/brands/:brandId", component:CarComponent},
  {path:"cars/colors/:id", component:CarComponent},
  {path:"cars/car-detail-page/:id", component:CarDetailPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
