import { RouterModule, Routes } from '@angular/router';

import { ProductosComponent } from './paginas/productos/productos.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { CarritoComponent } from './paginas/carrito/carrito.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

export const appRouting = RouterModule.forRoot(routes);
