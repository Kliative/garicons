import { NgModule } from '@angular/core';


import { GariconsComponent } from '../public-api';
import { RainComponent } from './rain/rain.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [RainComponent, GariconsComponent],
  imports: [
    BrowserModule
  ],
  exports: [RainComponent, GariconsComponent]
})
export class GariconsModule { }
