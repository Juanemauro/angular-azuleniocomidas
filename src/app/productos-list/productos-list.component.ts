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
          },
          {
            name: 'Don Cripriano',
            description: 'Panceta, queso y cebolla',
            price: 450,
            stock: 5,
            image: 'assets/img/empanada.jpg',
            clearance: true,
          },
          {
            name: 'Verduras',
            description: 'Acelga, huevo y morrón',
            price: 120,
            stock: 0,
            image: 'assets/img/tarta.jpg',
            clearance: false,
          } 
  ]
  
   
  constructor() { }

  //ngOnInit(): void {
  //}

}
