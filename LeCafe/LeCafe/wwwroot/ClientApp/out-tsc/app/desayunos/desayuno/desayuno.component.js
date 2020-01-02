import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DesayunoComponent = class DesayunoComponent {
    constructor(productService) {
        this.productService = productService;
        this.desayunos = [];
        this.errorMessage = '';
    }
    addProduct(desayuno) {
        this.productService.añadirAOrden(desayuno);
    }
    ngOnInit() {
        this.productService.getDesayunos().subscribe({
            next: desayunos => {
                this.desayunos = desayunos;
            },
            error: err => this.errorMessage = err
        });
    }
};
DesayunoComponent = __decorate([
    Component({
        selector: 'app-desayuno',
        templateUrl: './desayuno.component.html',
        styleUrls: ['./desayuno.component.css']
    })
], DesayunoComponent);
export { DesayunoComponent };
//# sourceMappingURL=desayuno.component.js.map