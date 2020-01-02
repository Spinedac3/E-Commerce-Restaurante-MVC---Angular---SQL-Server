import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/product.service';
import { Router } from '@angular/router';
import { BodyWeb } from '../../shared/BodyWeb';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
    body: BodyWeb = new BodyWeb();
    constructor(private productService: ProductService, private router: Router) { }
    errorMessage: string = "";
    public creds = {
        username: "",
        password: ""
    };
    onLogin() {
        this.errorMessage = "";
        this.productService.login(this.creds)
            .subscribe(success => {
                if (success) {
                    this.router.navigate(["menuPrincipal"]);
                }
            }, err => this.errorMessage = "Failed to login");
        this.body.atributo1 = "pagename: Login";
        this.body.atributo2 = "actionname: onLogin";
        this.productService.PostWeb(this.body).subscribe(success => {
            if (success) {
                console.log("action funciono");
            }

        }, err => console.log("no guardo action"));
    }
    ngOnInit() {
        this.body.atributo1 = "pageready: Login";
        this.productService.PostWeb(this.body).subscribe(success => {
            if (success) {
                console.log("ejecuto page ready");
            }

        }, err => console.log("no ejecuto page ready"));
  }

}
