import { __decorate } from "tslib";
import { Component } from '@angular/core';
let EnsaladasComponent = class EnsaladasComponent {
    constructor(productService) {
        this.productService = productService;
        this.ensaladas = [];
        this.errorMessage = '';
    }
    addProduct(ensalada) {
        this.productService.añadirAOrden(ensalada);
    }
    ngOnInit() {
        this.productService.getEnsaldas().subscribe({
            next: ensaladas => {
                this.ensaladas = ensaladas;
            },
            error: err => this.errorMessage = err
        });
    }
};
EnsaladasComponent = __decorate([
    Component({
        selector: 'app-ensaladas',
        templateUrl: './ensaladas.component.html',
        styleUrls: ['./ensaladas.component.css']
    })
], EnsaladasComponent);
export { EnsaladasComponent };
//# sourceMappingURL=ensaladas.component.js.map