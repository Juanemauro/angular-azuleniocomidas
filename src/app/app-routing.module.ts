import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryProductosComponent } from './delivery-productos/delivery-productos.component';
import { DeliveryAboutComponent } from './delivery-about/delivery-about.component';
import { DeliveryFaqComponent } from './delivery-faq/delivery-faq.component';

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
  },
  {
    path: 'faq',
    component: DeliveryFaqComponent
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
