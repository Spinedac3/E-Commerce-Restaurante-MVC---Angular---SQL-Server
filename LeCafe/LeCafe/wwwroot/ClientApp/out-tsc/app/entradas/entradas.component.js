import { __decorate } from "tslib";
import { Component } from '@angular/core';
let EntradasComponent = class EntradasComponent {
    constructor(productService) {
        this.productService = productService;
        this.products = [];
        this.errorMessage = '';
    }
    addProduct(entrada) {
        this.productService.añadirAOrden(entrada);
    }
    ngOnInit() {
        this.productService.getEntradas().subscribe({
            next: products => {
                this.products = products;
            },
            error: err => this.errorMessage = err
        });
        console.log(this.products);
    }
};
EntradasComponent = __decorate([
    Component({
        selector: 'app-entradas',
        templateUrl: './entradas.component.html',
        styleUrls: ['./entradas.component.css']
    })
], EntradasComponent);
export { EntradasComponent };
//# sourceMappingURL=entradas.component.js.map