import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from '../productos-list/Producto';


@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  @Input()
  quantity: number;

  @Input()
  max:number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>() //tipo de objeto ----- esto es un emisor de eventos

  @Output()
  maxCantidad: EventEmitter<string> = new EventEmitter<string>()

  ngOnInit(): void {
  }

  //Aumentar cantidad de un producto
  upQuantity(): void{
    if (this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }else if (this.quantity == this.max){
      this.maxCantidad.emit("Llegaste al máximo que podés comprar");
    }
           
  }
  //Disminuir cantidad de un producto
  downQuantity(): void{
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
      
  }
  changeQuantity(event) : void{
    
    if (event.target.value >  this.max){
      this.maxCantidad.emit("No puedes comprar más de "+(this.max)+" productos.");
      event.target.value =  this.max;
    }
    if (event.target.value < 0){
      this.maxCantidad.emit("El valor ingresado es incorrecto.");
      event.target.value = 0;
      this.quantity = event.target.value;
    }
    this.quantityChange.emit(event.target.value);
     
  }

}
