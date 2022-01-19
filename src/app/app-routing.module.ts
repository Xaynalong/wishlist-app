import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BallinComponent } from './ballin/ballin.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { MainComponent } from './main/main.component';
import { MiceComponent } from './mice/mice.component';
import { PadComponent } from './pad/pad.component';

const routes: Routes = [

  {
    path: '', component: MainComponent
  },

  {
    path: 'wishlist-app/ballin', component: BallinComponent
  },

  {
    path: 'wishlist-app/lifestyle', component: LifestyleComponent
  },

  {
    path: 'wishlist-app/mice', component: MiceComponent
  },

  {
    path: 'pad', component: PadComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
