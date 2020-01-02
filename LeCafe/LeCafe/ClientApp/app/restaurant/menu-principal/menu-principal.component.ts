import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BodyWeb } from '../../shared/BodyWeb';
import { ProductService } from '../../shared/product.service';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

    constructor(private router: Router, private productService: ProductService) { }
    body: BodyWeb = new BodyWeb();
    desayunos() {
        this.router.navigate(["desayunos"]);
        this.body.atributo1 = "actionname: Menu Principal";
        this.body.atributo2 = "destiny: desayunos";
        this.productService.PostWeb(this.body).subscribe(success => {
            if (success) {
                console.log("Navigation correct");
            }

        }, err => console.log("Navigation no funciono"));
    }
    almuerzosycenas() {
        this.router.navigate(["almuerzosycenas"]);
        this.body.atributo1 = "actionname: Menu Principal";
        this.body.atributo2 = "destiny: AlmuerzosYCenas";
        this.productService.PostWeb(this.body).subscribe(success => {
            if (success) {
                console.log("Navigation correct");
            }

        }, err => console.log("Navigation no funciono"));
    }

    home() {
        this.router.navigate(["home"]);
        this.body.atributo1 = "actionname: Menu Principal";
        this.body.atributo2 = "destiny: home";
        this.productService.PostWeb(this.body).subscribe(success => {
            if (success) {
                console.log("Navigation correct");
            }

        }, err => console.log("Navigation no funciono"));
    }
    ngOnInit() {
        this.body.atributo1 = "pageready: Menu Principal";
        this.productService.PostWeb(this.body).subscribe(success => {
            if (success) {
                console.log("ejecuto page ready");
            }

        }, err => console.log("no ejecuto page ready"));
  }

}
