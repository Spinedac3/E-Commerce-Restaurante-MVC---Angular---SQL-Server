import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LicoresComponent = class LicoresComponent {
    constructor(productService) {
        this.productService = productService;
        this.licores = [];
        this.errorMessage = '';
    }
    addProduct(licor) {
        this.productService.añadirAOrden(licor);
    }
    ngOnInit() {
        this.productService.getLicores().subscribe({
            next: licores => {
                this.licores = licores;
            },
            error: err => this.errorMessage = err
        });
    }
};
LicoresComponent = __decorate([
    Component({
        selector: 'app-licores',
        templateUrl: './licores.component.html',
        styleUrls: ['./licores.component.css']
    })
], LicoresComponent);
export { LicoresComponent };
//# sourceMappingURL=licores.component.js.map