import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent {

  //creo un array para guardar los datos que recibo del padre
  subject = new Subject<string>();

  img: string = 'none';
  nombre: string = '';
  activo: boolean = false;

  abrirModal($event: any) {
    this.img = $event.imagen;
    this.nombre = $event.nombre;
    this.activo = $event.activo;
  }

  cerrarModal($event: any) {
    this.activo = $event;
  }

  productos = [
    {
      id: 1,
      nombre: 'Kit de 1/2',
      precio: 1000,
      descripcion:
        'Estimula el crecimiento, pelo mas sano y con mas volumen hidrata y suavisa',
      src: '../../../assets/img/Kit de 1-2.jpeg',
    },
    {
      id: 2,
      nombre: 'Baño de biotina 1/4',
      precio: 500,
      descripcion: `Estimula, hidrata, devuelve el brillo y fortalece el crecimiento del pelo`,
      src: '../../../assets/img/Baño de biotina.jpg',
    },
    {
      id: 3,
      nombre: 'Baño de biotina 1/2',
      precio: 900,
      descripcion:
        'Estimula, hidrata, devuelve el brillo y fortalece el crecimiento del pelo',
      src: '../../../assets/img/Baño de biotina.jpg',
    },
    {
      id: 4,
      nombre: 'Baño de biotina 1 Kilo',
      precio: 1700,
      descripcion:
        'Estimula, hidrata, devuelve el brillo y fortalece el crecimiento del pelo',
      src: '../../../assets/img/Baño de biotina.jpg',
    },
    {
      id: 5,
      nombre: 'Jalea para rulos',
      precio: 250,
      descripcion: 'Modela, da brillo y nutre. Rulos bien formados',
      src: '../../../assets/img/Jalea para rulos.jpg',
    },
    {
      id: 6,
      nombre: 'Shampoo y acondicionador acido',
      precio: 1000,
      descripcion:
        'Kit de 1/2 Evita el frizz. Controla el daño causado por el proceso alcalino de los tratamientos quimicos',
      src: '../../../assets/img/Shampoo y acondicionador acido.jpg',
    },
    {
      id: 7,
      nombre: 'Gel para afeitar 1/2',
      precio: 500,
      descripcion:
        'Facil desplazamiento. Forma una capa transparente que protege la piel',
      src: '../../../assets/img/Gel para afeitar.jpg',
    },
    {
      id: 8,
      nombre: 'Plex 1 y plex 2 Kit de 1/4.',
      precio: 1500,
      descripcion: `Plex 1 regenera fibra capilar luego del proceso quimico. Plex 2 evita que el pelo se quiebre durante la decoloracion`,
      src: '../../../assets/img/Plex 1 y plex 2.jpg',
    },
    {
      id: 9,
      nombre: 'Productos kids Botox 1/4',
      precio: 450,
      descripcion: '',
      src: '../../../assets/img/Productos kids botox.jpg',
    },
    {
      id: 10,
      nombre: 'Productos kids Keratina-Organico 1/4',
      precio: 450,
      descripcion: '',
      src: '../../../assets/img/Productos kids Keratina-Organico.jpg',
    },
    {
      id: 11,
      nombre: 'Protector termico kids',
      precio: 350,
      descripcion: '',
      src: '../../../assets/img/Protector termico kids.jpg',
    },
    {
      id: 12,
      nombre: 'Balsamo hidratante 1/2',
      precio: 600,
      descripcion: '',
      src: '../../../assets/img/Balsamo hidratante.jpg',
    },
    {
      id: 13,
      nombre: 'Crema para rulos',
      precio: 300,
      descripcion: '',
      src: '../../../assets/img/Crema para rulos.jpg',
    },
    {
      id: 14,

      nombre: 'Matizador hidratante violets 1/4',
      precio: 500,
      descripcion: '',
      src: '../../../assets/img/Matizador hidratante violets 1-4.jpg',
    },
    {
      id: 15,

      nombre: 'Matizador hidratante violets 1/2',
      precio: 900,
      descripcion: '',
      src: '../../../assets/img/Matizador hidratante violets 1-2.jpg',
    },
    {
      id: 16,

      nombre: 'Matizador hidratante violets 1 Kilo',
      precio: 1700,
      descripcion: '',
      src: '../../../assets/img/Matizador hidratante violets 1.jpg',
    },
    {
      id: 17,

      nombre: 'Matizador hidratante black 1/4',
      precio: 500,
      descripcion: '',
      src: '../../../assets/img/Matizador hidratante black 1-4.jpg',
    },
    {
      id: 18,

      nombre: 'Matizador hidratante black 1/2',
      precio: 900,
      descripcion: '',
      src: '../../../assets/img/Matizador hidratante black 1-2.jpg',
    },
    {
      id: 19,

      nombre: 'Matizador hidratante black 1 Kilo',
      precio: 1700,
      descripcion: '',
      src: '../../../assets/img/Matizador hidratante black 1.jpg',
    },
  ];
}
