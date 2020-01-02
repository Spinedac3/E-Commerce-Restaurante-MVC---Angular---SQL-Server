import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CafesComponent = class CafesComponent {
    constructor(productService) {
        this.productService = productService;
        this.cafes = [];
        this.errorMessage = '';
    }
    addProduct(product) {
        this.productService.añadirAOrden(product);
    }
    ngOnInit() {
        this.productService.getCafes().subscribe({
            next: cafes => {
                this.cafes = cafes;
            },
            error: err => this.errorMessage = err
        });
    }
};
CafesComponent = __decorate([
    Component({
        selector: 'app-cafes',
        templateUrl: './cafes.component.html',
        styleUrls: ['./cafes.component.css']
    })
], CafesComponent);
export { CafesComponent };
//# sourceMappingURL=cafes.component.js.map