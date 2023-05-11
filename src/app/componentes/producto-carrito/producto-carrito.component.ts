import { Component } from '@angular/core';

//import para recibir los datos del padre
import { Input } from '@angular/core';
import modificarProductos from 'src/app/script/productos';

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

  public carrito: modificarProductos = new modificarProductos();

  sumar() {
    this.carrito.updateProducto(
      this.carrito.localStorageName,
      { id: this.id, precio: this.precio, cantidad: this.cantidad },
      true
    );
  }

  restar() {
    this.carrito.updateProducto(
      this.carrito.localStorageName,
      { id: this.id, precio: this.precio, cantidad: this.cantidad },
      false
    );
  }

  eliminar() {
    this.carrito.deleteProducto(this.id, this.carrito.localStorageName);
  }
}
