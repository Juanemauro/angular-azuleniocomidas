import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from './productos-list/Producto';
/**
 * Lógica del "carrito"
 * 
 */
@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  private _cartList: Producto[] = [];
  cartList: BehaviorSubject <Producto[]> =  new BehaviorSubject([]);

  constructor() { }

  addToCart(producto :Producto){
    let item: Producto =  this._cartList.find((valor1) => valor1.name == producto.name);
    if (!item) {
      this._cartList.push({... producto});
    }else{
      item.quantity += producto.quantity;
      item.price += (producto.price*producto.quantity);
    }

    console.log('carrito:', this._cartList);
    this.cartList.next(this._cartList); // -> sería emmitt de un evento
  }
  
}
