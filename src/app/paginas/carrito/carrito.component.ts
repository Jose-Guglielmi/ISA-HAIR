import { Component } from '@angular/core';
import modificarProductos from './../../script/productos';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent {
  public modificarProductos: modificarProductos = new modificarProductos();
  public carrito: any = '';

  ngOnInit() {
    this.carrito = this.modificarProductos.getProducto(
      this.modificarProductos.localStorageName
    );
  }
}
