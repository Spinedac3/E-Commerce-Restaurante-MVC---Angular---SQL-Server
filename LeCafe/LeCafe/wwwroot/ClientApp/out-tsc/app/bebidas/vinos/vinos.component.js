import { __decorate } from "tslib";
import { Component } from '@angular/core';
let VinosComponent = class VinosComponent {
    constructor(productService) {
        this.productService = productService;
        this.vinos = [];
        this.errorMessage = '';
    }
    addProduct(vino) {
        this.productService.añadirAOrden(vino);
    }
    ngOnInit() {
        this.productService.getVinos().subscribe({
            next: vinos => {
                this.vinos = vinos;
            },
            error: err => this.errorMessage = err
        });
    }
};
VinosComponent = __decorate([
    Component({
        selector: 'app-vinos',
        templateUrl: './vinos.component.html',
        styleUrls: ['./vinos.component.css']
    })
], VinosComponent);
export { VinosComponent };
//# sourceMappingURL=vinos.component.js.map