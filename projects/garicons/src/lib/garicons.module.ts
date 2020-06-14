import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GariconsComponent } from './garicons.component';
import { RainComponent } from './components/rain/rain.component';
import { HeavyRainComponent } from './components/heavy-rain/heavy-rain.component';
import { OvercastComponent } from './components/overcast/overcast.component';

@NgModule({
  declarations: [
    GariconsComponent,
    RainComponent,
    HeavyRainComponent,
    OvercastComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
    GariconsComponent,
    RainComponent,
    HeavyRainComponent,
    OvercastComponent
  ]
})
export class GariconsModule { }
