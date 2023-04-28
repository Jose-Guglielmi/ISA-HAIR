import { Component, NgModule } from '@angular/core';

//recibe el producto desde el componente padre
import { Input } from '@angular/core';

//imports pára enviar parametros al padre
import { Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import modificarProductos from 'src/app/script/productos';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent {
  modificar = new modificarProductos();

  estado: any = {};

  //datos del producto
  @Input() id: number = 0;
  @Input() nombre: string = '';
  @Input() descripcion: string = '';
  @Input() precio: number = 0;
  @Input() imagen: string = '';
  @Input() subject: Subject<string> = new Subject<string>();

  //metodo para enviar datos al padre o hermanos
  sendInfo = (): void => {
    //this.estado es el dato a enviar, al padre o a un hermano
    this.subject.next(this.estado);
  };

  agregarAlCarrito() {
    const datos = {
      id: this.id,
      imagen: this.imagen,
      nombre: this.nombre,
      precio: this.precio,
      cantidad: 1,
      total: this.precio,
    };
    this.estado = this.modificar.addProducto(
      this.modificar.localStorageName,
      datos
    );

    this.sendInfo();
  }

  //evento para enviar datos al padre
  @Output() imgSelect = new EventEmitter();

  //metodo para enviar datos al padre
  enviar() {
    const datos = { imagen: this.imagen, nombre: this.nombre, activo: true };
    this.imgSelect.emit(datos);
  }
}
