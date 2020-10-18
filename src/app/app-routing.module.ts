import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryProductosComponent } from './delivery-productos/delivery-productos.component';
import { DeliveryAboutComponent } from './delivery-about/delivery-about.component';
import { DeliveryFaqComponent } from './delivery-faq/delivery-faq.component';
import { DeliveryHomeComponent } from './delivery-home/delivery-home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', 
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: DeliveryHomeComponent
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
