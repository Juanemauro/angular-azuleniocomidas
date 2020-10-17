import { Component, OnInit } from '@angular/core';
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
            quantity: 5,
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
  ] 
   
  constructor() { }

  ngOnInit(): void {
  }
  //Aumentar cantidad de un producto
  upQuantity(producto: Producto): void{
    if (producto.quantity < producto.stock)
      producto.quantity++;     
  }
  //Disminuir cantidad de un producto
  downQuantity(producto: Producto): void{
    if(producto.quantity > 0)
      producto.quantity--;
  }
  changeQuantity({ event, producto }: { event; producto: Producto; }) : void{
    if (event.target.value > producto.stock){
      producto.quantity = producto.stock;
    }
    if (event.target.value < 0){
      event.target.value = event.target.value*(-1);
      producto.quantity = event.target.value;
    } 
  }

}
