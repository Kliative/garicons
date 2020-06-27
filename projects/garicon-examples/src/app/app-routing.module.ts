import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IconCollectionComponent } from './icon-collection/icon-collection.component';
import { WeatherCollectionComponent } from './weather-collection/weather-collection.component';
import { UiCollectionComponent } from './ui-collection/ui-collection.component';


const routes: Routes = [
   {
    path: '',
    component: IconCollectionComponent
  },
  {
    path: 'weather',
    component: WeatherCollectionComponent
  },
  {
    path: 'ui',
    component: UiCollectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
