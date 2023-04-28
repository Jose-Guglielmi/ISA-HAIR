import { state } from '@angular/animations';

class modificarProductos {
  localStorageName: string = 'carrito';
  state: any = {
    actualizado: 'Se a actualizado',
    agregado: 'Se a agregado al carrito',
    eliminado: 'Se eliminó del carrito',
    error: 'Error al actualizar el producto',
  };

  todoOk: string = '';

  public addProducto(nombreStorage: string, data: any) {
    let carrito = this.getProducto(nombreStorage);
    let existe = false;

    if (carrito == null) {
      localStorage.setItem(nombreStorage, JSON.stringify([data]));
      this.todoOk = this.state.agregado;
    } else {
      //verifico si el producto ya existe en el carrito
      for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].id === data.id) {
          carrito[i].cantidad += data.cantidad;
          carrito[i].total += data.precio * data.cantidad;
          existe = true;
          localStorage.setItem(nombreStorage, JSON.stringify(carrito));
          this.todoOk = this.state.actualizado;
          break;
        }
      }
      //si no existe lo agrego
      if (!existe) {
        carrito.push(data);
        localStorage.setItem(nombreStorage, JSON.stringify(carrito));
        this.todoOk = this.state.agregado;
      }
    }

    return { estado: this.todoOk, nombre: data.nombre };
  }

  public updateProducto(nombreStorage: string, data: any, aumento: boolean) {
    let carrito = this.getProducto(nombreStorage);
    let existe = false;

    //verifico si el producto ya existe en el carrito
    for (let i = 0; i < carrito.length; i++) {
      if (carrito[i].id === data.id && aumento) {
        carrito[i].cantidad += data.cantidad;
        carrito[i].total += data.precio * data.cantidad;
        existe = true;
        localStorage.setItem(nombreStorage, JSON.stringify(carrito));
        this.todoOk = this.state.actualizado;
        break;
      } else {
        if (carrito[i].cantidad >= 1) {
          carrito[i].cantidad -= data.cantidad;
          carrito[i].total -= data.precio * data.cantidad;
          existe = true;
          localStorage.setItem(nombreStorage, JSON.stringify(carrito));
          this.todoOk = this.state.actualizado;
          break;
        } else {
          this.deleteProducto(data.id, nombreStorage);
          this.todoOk = this.state.eliminado;
        }
      }
    }
    //si no existe lo agrego lanzo un error
    if (!existe) {
      this.todoOk = this.state.error;
    }
    return { estado: this.todoOk, nombre: data.nombre };
  }

  public deleteProducto(id: number, nombreStorage: string) {
    //obtengo el carrito
    let carrito = this.getProducto(nombreStorage);
    let todoOk = false;

    //busco el producto a eliminar
    for (let i = 0; i < carrito.length; i++) {
      if (carrito[i].id === id) {
        carrito.splice(i, 1);
        localStorage.setItem(nombreStorage, JSON.stringify(carrito));
        todoOk = true;
        break;
      }
    }

    return todoOk;
  }

  public getProducto(nombreStorage: string) {
    let carrito;

    carrito = localStorage.getItem(nombreStorage);

    if (carrito === null) {
      return null;
    } else {
      return JSON.parse(carrito);
    }
  }
}
export default modificarProductos;
