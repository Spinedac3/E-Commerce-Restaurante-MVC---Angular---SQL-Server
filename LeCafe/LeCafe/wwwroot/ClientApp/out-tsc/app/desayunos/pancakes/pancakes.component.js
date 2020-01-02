import { __decorate } from "tslib";
import { Component } from '@angular/core';
let PancakesComponent = class PancakesComponent {
    constructor(productService) {
        this.productService = productService;
        this.pancakes = [];
        this.errorMessage = '';
    }
    addProduct(pancake) {
        this.productService.añadirAOrden(pancake);
    }
    ngOnInit() {
        this.productService.getPancakes().subscribe({
            next: pancakes => {
                this.pancakes = pancakes;
            },
            error: err => this.errorMessage = err
        });
    }
};
PancakesComponent = __decorate([
    Component({
        selector: 'app-pancakes',
        templateUrl: './pancakes.component.html',
        styleUrls: ['./pancakes.component.css']
    })
], PancakesComponent);
export { PancakesComponent };
//# sourceMappingURL=pancakes.component.js.map