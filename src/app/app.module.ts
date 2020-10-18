import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosListComponent } from './productos-list/productos-list.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { FormsModule} from '@angular/forms';
import { DeliveryContactComponent } from './delivery-contact/delivery-contact.component';
import { DeliveryProductosComponent } from './delivery-productos/delivery-productos.component';
import { DeliveryAboutComponent } from './delivery-about/delivery-about.component';
import { DeliveryAzulenioComponent } from './delivery-azulenio/delivery-azulenio.component';
import { DeliveryFaqComponent } from './delivery-faq/delivery-faq.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosListComponent,
    CarritoComprasComponent,
    DeliveryContactComponent,
    DeliveryProductosComponent,
    DeliveryAboutComponent,
    DeliveryAzulenioComponent,
    DeliveryFaqComponent
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
