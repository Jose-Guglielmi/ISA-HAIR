import {
  Component,
  ElementRef,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

//importo las cosa para recibir los datos del padre
import { Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  //recibo los datos del padre
  @Input() subject: Subject<any> = new Subject<any>();

  //creo un array para guardar los datos que recibo del padre
  infos: any = '';

  ngOnInit() {
    this.subject.subscribe((text: any) => {
      this.infos = text;
      console.log(this.infos);
      this.cerrarModal();
    });
  }
  //usamos el decorador ViewChild para obtener el elemento del DOM (#contenedorModal)
  @ViewChild('contenedorModal') modal: ElementRef = new ElementRef(null);

  //usamos el decorador Renderer2 para agregar o quitar clases al elemento del DOM
  constructor(private renderer: Renderer2) {}

  cerrarModal() {
    setTimeout(() => {
      this.infos = '';
      this.renderer.removeClass(this.modal.nativeElement, 'open');
    }, 5000);
  }
}
