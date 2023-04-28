import { Component } from '@angular/core';

//import para recibir los datos del padre
import { Input } from '@angular/core';

@Component({
  selector: 'app-producto-carrito',
  templateUrl: './producto-carrito.component.html',
  styleUrls: ['./producto-carrito.component.css'],
})
export class ProductoCarritoComponent {
  //datos del producto
  @Input() id: number = 0;
  @Input() nombre: string = '';
  @Input() precio: number = 0;
  @Input() imagen: string = '';
  @Input() cantidad: number = 0;
}
