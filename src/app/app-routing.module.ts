import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryProductosComponent } from './delivery-productos/delivery-productos.component';
import { DeliveryContactComponent } from './delivery-contact/delivery-contact.component';

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
    path: 'contact', //acomodar formato y completarlo -> agregar componente faq
    component: DeliveryContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
