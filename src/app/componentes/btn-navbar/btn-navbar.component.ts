import { Component } from '@angular/core';

//imports pára enviar parametros al padre
import { Output, EventEmitter } from '@angular/core';

//import pára recibir parametros al padre
import { Input } from '@angular/core';

@Component({
  selector: 'app-btn-navbar',
  templateUrl: './btn-navbar.component.html',
  styleUrls: ['./btn-navbar.component.css'],
})
export class BtnNavbarComponent {
  //envia el parametro al padre
  @Output() clickEvent = new EventEmitter<boolean>();

  //recibe el parametro del padre
  @Input() abrirMenu: boolean = false;

  //metodo que envia el parametro al padre
  onClick() {
    if (this.abrirMenu == false) {
      this.abrirMenu = true;
      this.clickEvent.emit(this.abrirMenu);
    } else {
      this.abrirMenu = false;
      this.clickEvent.emit(this.abrirMenu);
    }
  }

  onActivo() {
    this.abrirMenu = !this.abrirMenu;
  }
}
