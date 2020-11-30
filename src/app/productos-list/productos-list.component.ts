import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Producto } from './Producto';


@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.scss']
})
export class ProductosListComponent implements OnInit {
  productos : Producto []  = [
          {
            name: "Pizza libre",
            description: "Precio por docena",
            price: 500,
            stock: 5,
            image: 'assets/img/pizza.jpeg',
            clearance: false,
            quantity: 0,
          },
          {
            name: 'Don Cripriano',
            description: 'Panceta, queso y cebolla',
            price: 450,
            stock: 20,
            image: 'assets/img/empanada.jpg',
            clearance: true,
            quantity:0,
          },
          {
            name: 'Verduras',
            description: 'Acelga, huevo y morrón',
            price: 120,
            stock: 0,
            image: 'assets/img/tarta.jpg',
            clearance: false,
            quantity:0,
          } 
  ]; 
     
  constructor(private cart: ProductCartService) {     
  }

  ngOnInit(): void {
  }

  maxCantidad(mensaje:string){
    //console.log(mensaje);
    alert(mensaje);
  }

  addToCart(producto):void{
    this.cart.addToCart(producto);
    producto.stock -= producto.quantity; //cambio stock
    producto.quantity = 0; //reinicio para la siguiente compra
  }

}
