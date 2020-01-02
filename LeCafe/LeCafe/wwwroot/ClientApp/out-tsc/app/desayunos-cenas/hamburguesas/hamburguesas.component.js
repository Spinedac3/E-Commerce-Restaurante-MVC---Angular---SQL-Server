import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HamburguesasComponent = class HamburguesasComponent {
    constructor(productService) {
        this.productService = productService;
        this.hamburguesas = [];
        this.errorMessage = '';
    }
    addProduct(hamburguesa) {
        this.productService.añadirAOrden(hamburguesa);
    }
    ngOnInit() {
        this.productService.getHamburguesas().subscribe({
            next: hamburguesas => {
                this.hamburguesas = hamburguesas;
            },
            error: err => this.errorMessage = err
        });
    }
};
HamburguesasComponent = __decorate([
    Component({
        selector: 'app-hamburguesas',
        templateUrl: './hamburguesas.component.html',
        styleUrls: ['./hamburguesas.component.css']
    })
], HamburguesasComponent);
export { HamburguesasComponent };
//# sourceMappingURL=hamburguesas.component.js.map