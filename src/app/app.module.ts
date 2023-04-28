import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { CarritoComponent } from './paginas/carrito/carrito.component';
import { IconComponent } from './componentes/icon/icon.component';
import { BtnNavbarComponent } from './componentes/btn-navbar/btn-navbar.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { ModalImgComponent } from './componentes/modal-img/modal-img.component';
import { ModalComponent } from './componentes/modal/modal.component';
import { appRouting } from './app-routing.module';
import { ProductoCarritoComponent } from './componentes/producto-carrito/producto-carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductosComponent,
    InicioComponent,
    CarritoComponent,
    IconComponent,
    BtnNavbarComponent,
    ProductoComponent,
    ModalImgComponent,
    ModalComponent,
    ProductoCarritoComponent,
  ],
  imports: [BrowserModule, appRouting],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
