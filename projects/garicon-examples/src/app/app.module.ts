import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconCollectionComponent } from './icon-collection/icon-collection.component';
import { GariconsModule } from 'garicons';

@NgModule({
   declarations: [
      AppComponent,
      IconCollectionComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      GariconsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
