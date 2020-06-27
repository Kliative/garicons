import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconCollectionComponent } from './icon-collection/icon-collection.component';
import { GariconsModule } from 'garicons';
import { WeatherCollectionComponent } from './weather-collection/weather-collection.component';
import { UiCollectionComponent } from './ui-collection/ui-collection.component';
import { SharedModule } from './shared/shared.module';



@NgModule({
   declarations: [
      AppComponent,
      IconCollectionComponent,
      WeatherCollectionComponent,
      UiCollectionComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      GariconsModule,
      SharedModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
