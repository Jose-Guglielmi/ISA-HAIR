import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  public abrirMenu: boolean = false;

  recibir($event: any): void {
    this.abrirMenu = $event;
    if (this.abrirMenu) {
    }
  }

  close() {
    this.abrirMenu = false;
  }
}
