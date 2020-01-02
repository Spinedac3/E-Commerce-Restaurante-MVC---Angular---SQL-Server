import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SandwichesComponent = class SandwichesComponent {
    constructor(productService) {
        this.productService = productService;
        this.sandwiches = [];
        this.errorMessage = '';
    }
    addProduct(sandwich) {
        this.productService.añadirAOrden(sandwich);
    }
    ngOnInit() {
        this.productService.getSandwiches().subscribe({
            next: sandwiches => {
                this.sandwiches = sandwiches;
            },
            error: err => this.errorMessage = err
        });
    }
};
SandwichesComponent = __decorate([
    Component({
        selector: 'app-sandwiches',
        templateUrl: './sandwiches.component.html',
        styleUrls: ['./sandwiches.component.css']
    })
], SandwichesComponent);
export { SandwichesComponent };
//# sourceMappingURL=sandwiches.component.js.map