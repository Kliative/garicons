import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GariconsComponent } from './garicons.component';
import { RainComponent } from './components/rain/rain.component';
import { HeavyRainComponent } from './components/heavy-rain/heavy-rain.component';
import { OvercastComponent } from './components/overcast/overcast.component';
import { OvercastSunComponent } from './components/overcast-sun/overcast-sun.component';
import { ThunderStormComponent } from './components/thunder-storm/thunder-storm.component';
import { LayersComponent } from './components/layers/layers.component';
import { PrinterComponent } from './components/printer/printer.component';
import { MenuComponent } from './components/menu/menu.component';
import { MinimizeComponent } from './components/minimize/minimize.component';
import { RotateComponent } from './components/rotate/rotate.component';
import { ChevronComponent } from './components/chevron/chevron.component';
import { MoonComponent } from './components/moon/moon.component';
import { SunComponent } from './components/sun/sun.component';
import { CornerComponent } from './components/corner/corner.component';

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
    ThunderStormComponent,
    // UI
    LayersComponent,
    PrinterComponent,
    MenuComponent,
    MinimizeComponent,
    RotateComponent,
    ChevronComponent,
    // Misc
    CornerComponent,
    MoonComponent,
    SunComponent
  ],
  exports: [
    GariconsComponent,
    RainComponent,
    HeavyRainComponent,
    OvercastComponent,
    OvercastSunComponent,
    ThunderStormComponent,
    // UI
    LayersComponent,
    PrinterComponent,
    MenuComponent,
    MinimizeComponent,
    RotateComponent,
    ChevronComponent,
    // Misc
    CornerComponent,
    MoonComponent,
    SunComponent
  ]
})
export class GariconsModule { }
