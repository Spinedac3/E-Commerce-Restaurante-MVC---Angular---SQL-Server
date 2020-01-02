import * as _ from "lodash";
import { IProduct } from './producto';

export class Orden {
    id: number;
    numeroOrden: string;
    nombre: string;
    nit: string;
    apellido: string;
    items: Array<Item> = new Array<Item>();
    tipoPago: string;
    tarjetaId: number;
    subTotal: number;

    get getSubtotal(): number {
        return _.sum(_.map(this.items, i => i.producto.precio * i.cantidad));
    }
}

export class Item {
    id: number;
    producto: IProduct;
    cantidad: number;
}

export class Tarjeta {
    id: number;
    numeroTarjeta: number;
    nombre: string;
    fechaVencimiento: string;
    ccv: number;
    saldo: number;
}

