import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Orden } from '../shared/order';
let FacturaComponent = class FacturaComponent {
    constructor(productService, router) {
        this.productService = productService;
        this.router = router;
    }
    nuevoPedido() {
        this.productService.order = new Orden();
        this.router.navigate(["menuPrincipal"]);
    }
    imprimir() {
        window.print;
    }
    ngOnInit() {
    }
};
FacturaComponent = __decorate([
    Component({
        selector: 'app-factura',
        templateUrl: './factura.component.html',
        styleUrls: ['./factura.component.css']
    })
], FacturaComponent);
export { FacturaComponent };
//# sourceMappingURL=factura.component.js.map