import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Tarjeta } from '../shared/order';
let OrderComponent = class OrderComponent {
    constructor(productService, router) {
        this.productService = productService;
        this.router = router;
        this.saldo = 1000;
        this.tipoPago = "Efectivo";
        this.errorMessage = "";
        this.tarjeta = new Tarjeta();
        this.options = [
            { label: 'Efectivo', value: 'Efectivo' },
            { label: 'Tarjeta', value: 'Tarjeta' }
        ];
    }
    Confirmar() {
        this.productService.order.tarjetaId = this.idTarjeta;
        this.productService.order.nombre = this.nombre;
        this.productService.order.apellido = this.apellido;
        this.productService.order.nit = this.nit;
        this.productService.order.tipoPago = this.selectedOption;
        this.productService.order.subTotal = this.productService.order.getSubtotal;
        this.productService.crearOrden()
            .subscribe(success => {
            if (success) {
                this.router.navigate(['factura']);
            }
        }, err => this.errorMessage = "Failed to save order");
    }
    TarjetaActivar() {
        this.tipoPago = "Tarjeta";
        console.log(this.tipoPago);
        console.log(this.tarjeta);
    }
    ngOnInit() {
    }
};
OrderComponent = __decorate([
    Component({
        selector: 'app-order',
        templateUrl: './order.component.html',
        styleUrls: ['./order.component.css']
    })
], OrderComponent);
export { OrderComponent };
//# sourceMappingURL=order.component.js.map