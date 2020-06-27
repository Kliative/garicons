import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavComponent } from './top-nav/top-nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ],
  declarations: [SharedComponent, TopNavComponent],
  exports: [SharedComponent, TopNavComponent]
})
export class SharedModule { }
