import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GariconsComponent } from './garicons.component';
import { RainComponent } from './components/rain/rain.component';
import { HeavyRainComponent } from './components/heavy-rain/heavy-rain.component';

@NgModule({
  declarations: [
    GariconsComponent,
    RainComponent,
    HeavyRainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
    GariconsComponent,
    RainComponent,
    HeavyRainComponent
  ]
})
export class GariconsModule { }
