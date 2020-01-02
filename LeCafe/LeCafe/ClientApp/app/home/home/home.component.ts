import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/product.service';
import { Router } from '@angular/router';
import { BodyWeb } from '../../shared/BodyWeb';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(public productService: ProductService, private router: Router) { }
    body: BodyWeb = new BodyWeb();
    ngOnInit() {
        this.body.atributo1 = "pageready: Home";
        this.productService.PostWeb(this.body).subscribe(success => {
            if (success) {
                console.log("ejecuto page ready");
            }

        }, err => console.log("no ejecuto page ready"));
  }

    login() {
        if (this.productService.loginRequired) {
            this.router.navigate(["userLogin"]);
        } else {
            this.router.navigate(["menuPrincipal"]);

        }
        this.body.atributo1 = "actionname: Home";
        this.body.atributo2 = "destiny: Login";
        this.productService.PostWeb(this.body).subscribe(success => {
            if (success) {
                console.log("Navigation correct");
            }

        }, err => console.log("Navigation no funciono"));
    }

}
