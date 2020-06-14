import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GariconsComponent } from './garicons.component';
import { RainComponent } from './components/rain/rain.component';
import { HeavyRainComponent } from './components/heavy-rain/heavy-rain.component';
import { OvercastComponent } from './components/overcast/overcast.component';
import { OvercastSunComponent } from './components/overcast-sun/overcast-sun.component';
import { ThunderStormComponent } from './components/thunder-storm/thunder-storm.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [
    GariconsComponent,
    RainComponent,
    HeavyRainComponent,
    OvercastComponent,
    OvercastSunComponent,
    ThunderStormComponent
  ],
  exports: [
    GariconsComponent,
    RainComponent,
    HeavyRainComponent,
    OvercastComponent,
    OvercastSunComponent,
    ThunderStormComponent
  ]
})
export class GariconsModule { }
