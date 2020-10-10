import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.scss']
})
export class CarritoComprasComponent implements OnInit {
  producto = {
    "nombre": "Pizza libre",
    "cantidad": "Precio por docena",
    "precio": 500,
    "stock": 180 
  }
  constructor() { }

  ngOnInit(): void {
  }

}
