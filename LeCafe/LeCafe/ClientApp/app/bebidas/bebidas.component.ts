import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { BodyWeb } from '../shared/BodyWeb';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {

    constructor(private router: Router, private productService: ProductService) { }
    body: BodyWeb = new BodyWeb();
    cafes() {
        this.router.navigate(["cafes"]);
        this.body.atributo1 = "actionname: Bebidas";
        this.body.atributo2 = "destiny: cafes";
        this.productService.PostWeb(this.body).subscribe(success => {
            if (success) {
                console.log("Navigation correct");
            }

        }, err => console.log("Navigation no funciono"));
        
    }
    jugos() {
        this.router.navigate(["jugos"]);
        this.body.atributo1 = "actionname: Bebidas";
        this.body.atributo2 = "destiny: jugos";
        this.productService.PostWeb(this.body).subscribe(success => {
            if (success) {
                console.log("Navigation correct");
            }

        }, err => console.log("Navigation no funciono"));
    }
    vinos() {
        this.router.navigate(["vinos"]);
        this.body.atributo1 = "actionname: Bebidas";
        this.body.atributo2 = "destiny: vinos";
        this.productService.PostWeb(this.body).subscribe(success => {
            if (success) {
                console.log("Navigation correct");
            }

        }, err => console.log("Navigation no funciono"));
    }
    licores() {
        this.router.navigate(["licores"]);
        this.body.atributo1 = "actionname: Bebidas";
        this.body.atributo2 = "destiny: licores";
        this.productService.PostWeb(this.body).subscribe(success => {
            if (success) {
                console.log("Navigation correct");
            }

        }, err => console.log("Navigation no funciono"));
    }
    menuPrincipal() {
        this.router.navigate(["menuPrincipal"]);
        this.body.atributo1 = "actionname: Bebidas";
        this.body.atributo2 = "destiny: menuPrincipal";
        this.productService.PostWeb(this.body).subscribe(success => {
            if (success) {
                console.log("Navigation correct");
            }

        }, err => console.log("Navigation no funciono"));
    }
    ngOnInit() {
        this.body.atributo1 = "pageready: Bebidas";
        this.productService.PostWeb(this.body).subscribe(success => {
            if (success) {
                console.log("ejecuto page ready");
            }

        }, err => console.log("no ejecuto page ready"));
  }

}
