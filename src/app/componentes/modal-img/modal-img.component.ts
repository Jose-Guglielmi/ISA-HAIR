import { Component } from '@angular/core';

//import para recibir parametros del padre
import { Input } from '@angular/core';

//imports pára enviar parametros al padre
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-img',
  templateUrl: './modal-img.component.html',
  styleUrls: ['./modal-img.component.css'],
})
export class ModalImgComponent {
  //recibir parametros del padre
  @Input() img: string = 'none';
  @Input() nombre: string = '';
  @Input() activo: boolean = false;

  @Output() modal = new EventEmitter();

  cerrarModal() {
    this.modal.emit(!this.activo);
  }
}
