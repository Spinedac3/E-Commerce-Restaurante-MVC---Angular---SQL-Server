import * as _ from "lodash";
export class Orden {
    constructor() {
        this.items = new Array();
    }
    get getSubtotal() {
        return _.sum(_.map(this.items, i => i.producto.precio * i.cantidad));
    }
}
export class Item {
}
export class Tarjeta {
}
//# sourceMappingURL=order.js.map