import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryProductosComponent } from './delivery-productos/delivery-productos.component';

import { DeliveryContactComponent } from './delivery-contact/delivery-contact.component';
import { DeliveryAboutComponent } from './delivery-about/delivery-about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'productos', //agregar componente Home
    pathMatch: 'full'
  },
 
  {
    path: 'productos',
    component: DeliveryProductosComponent
  },
  
  {
    path: 'about',
    component: DeliveryAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
