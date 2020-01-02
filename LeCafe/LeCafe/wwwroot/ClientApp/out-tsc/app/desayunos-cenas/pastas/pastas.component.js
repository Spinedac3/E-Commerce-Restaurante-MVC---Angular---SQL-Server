import { __decorate } from "tslib";
import { Component } from '@angular/core';
let PastasComponent = class PastasComponent {
    constructor(productService) {
        this.productService = productService;
        this.pastas = [];
        this.errorMessage = '';
    }
    addProduct(pastas) {
        this.productService.añadirAOrden(pastas);
    }
    ngOnInit() {
        this.productService.getPastas().subscribe({
            next: pastas => {
                this.pastas = pastas;
            },
            error: err => this.errorMessage = err
        });
    }
};
PastasComponent = __decorate([
    Component({
        selector: 'app-pastas',
        templateUrl: './pastas.component.html',
        styleUrls: ['./pastas.component.css']
    })
], PastasComponent);
export { PastasComponent };
//# sourceMappingURL=pastas.component.js.map