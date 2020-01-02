import { __decorate } from "tslib";
import { Component } from '@angular/core';
let JugosComponent = class JugosComponent {
    constructor(productService) {
        this.productService = productService;
        this.jugos = [];
        this.errorMessage = '';
    }
    addProduct(jugo) {
        this.productService.añadirAOrden(jugo);
    }
    ngOnInit() {
        this.productService.getJugos().subscribe({
            next: jugos => {
                this.jugos = jugos;
            },
            error: err => this.errorMessage = err
        });
    }
};
JugosComponent = __decorate([
    Component({
        selector: 'app-jugos',
        templateUrl: './jugos.component.html',
        styleUrls: ['./jugos.component.css']
    })
], JugosComponent);
export { JugosComponent };
//# sourceMappingURL=jugos.component.js.map