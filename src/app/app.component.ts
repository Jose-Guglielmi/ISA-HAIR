import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  /*@HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(event: Event) {
    // Aquí puedes ejecutar acciones antes de que se cierre la pestaña

  }*/
}
