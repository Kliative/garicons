import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IconCollectionComponent } from './icon-collection/icon-collection.component';


const routes: Routes = [
   {
    path: '',
    component: IconCollectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
