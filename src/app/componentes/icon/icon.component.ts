import { Component } from '@angular/core';

//import para recibir parametros del padre
import { Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css'],
})
export class IconComponent {
  //recibe el parametro del padre
  @Input() icono: string = '';
  @Input() heightAndWidth: number = 30;
  @Input() marginRight: number = 0;
  @Input() marginLeft: number = 0;

  constructor() {}
}
