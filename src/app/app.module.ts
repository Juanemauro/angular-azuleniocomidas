import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosListComponent } from './productos-list/productos-list.component';

import { FormsModule} from '@angular/forms';
import { DeliveryContactComponent } from './delivery-contact/delivery-contact.component';
import { DeliveryProductosComponent } from './delivery-productos/delivery-productos.component';
import { DeliveryAboutComponent } from './delivery-about/delivery-about.component';
import { DeliveryAzulenioComponent } from './delivery-azulenio/delivery-azulenio.component';
import { DeliveryFaqComponent } from './delivery-faq/delivery-faq.component';
import { DeliveryHomeComponent } from './delivery-home/delivery-home.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosListComponent,
    DeliveryContactComponent,
    DeliveryProductosComponent,
    DeliveryAboutComponent,
    DeliveryAzulenioComponent,
    DeliveryFaqComponent,
    DeliveryHomeComponent,
    InputIntegerComponent,
    CarritoComprasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
