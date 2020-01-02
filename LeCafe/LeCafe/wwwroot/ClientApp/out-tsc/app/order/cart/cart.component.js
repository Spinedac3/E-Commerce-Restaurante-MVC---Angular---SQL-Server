import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CartComponent = class CartComponent {
    constructor(productService, router) {
        this.productService = productService;
        this.router = router;
    }
    ngOnInit() {
    }
    onCheckout() {
        this.router.navigate(["orden"]);
    }
};
CartComponent = __decorate([
    Component({
        selector: 'app-cart',
        templateUrl: './cart.component.html',
        styleUrls: ['./cart.component.css']
    })
], CartComponent);
export { CartComponent };
//# sourceMappingURL=cart.component.js.map