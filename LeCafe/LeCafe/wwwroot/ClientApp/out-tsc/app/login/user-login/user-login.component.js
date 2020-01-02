import { __decorate } from "tslib";
import { Component } from '@angular/core';
let UserLoginComponent = class UserLoginComponent {
    constructor(productService, router) {
        this.productService = productService;
        this.router = router;
        this.errorMessage = "";
        this.creds = {
            username: "",
            password: ""
        };
    }
    onLogin() {
        this.errorMessage = "";
        this.productService.login(this.creds)
            .subscribe(success => {
            if (success) {
                this.router.navigate(["menuPrincipal"]);
            }
        }, err => this.errorMessage = "Failed to login");
    }
    ngOnInit() {
    }
};
UserLoginComponent = __decorate([
    Component({
        selector: 'app-user-login',
        templateUrl: './user-login.component.html',
        styleUrls: ['./user-login.component.css']
    })
], UserLoginComponent);
export { UserLoginComponent };
//# sourceMappingURL=user-login.component.js.map