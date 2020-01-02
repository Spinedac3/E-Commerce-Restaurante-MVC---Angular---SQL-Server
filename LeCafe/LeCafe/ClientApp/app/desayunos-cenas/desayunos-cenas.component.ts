import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { BodyWeb } from '../shared/BodyWeb';

@Component({
  selector: 'app-desayunos-cenas',
  templateUrl: './desayunos-cenas.component.html',
  styleUrls: ['./desayunos-cenas.component.css']
})
export class DesayunosCenasComponent implements OnInit {
    body: BodyWeb = new BodyWeb();
    constructor(private router: Router, private productService: ProductService) { }
    entradas() {
        this.router.navigate(["entradas"]);
        this.body.atributo1 = "actionname: Desayunos-Cenas";
        this.body.atributo2 = "destiny: entradas";
        this.productService.PostWeb(this.body).subscribe(success => {
            if (success) {
                console.log("Navigation correct");
            }

        }, err => console.log("Navigation no funciono"));
    }
    bebidas() {
        this.router.navigate(["bebidas"]);
        this.body.atributo1 = "actionname: Desayunos-Cenas";
        this.body.atributo2 = "destiny: bebidas";
        this.productService.PostWeb(this.body).subscribe(success => {
            if (success) {
                console.log("Navigation correct");
            }

        }, err => console.log("Navigation no funciono"));
    }
    pastas() {
        this.router.navigate(["pastas"]);
        this.body.atributo1 = "actionname: Desayunos-Cenas";
        this.body.atributo2 = "destiny: pastas";
        this.productService.PostWeb(this.body).subscribe(success => {
            if (success) {
                console.log("Navigation correct");
            }

        }, err => console.log("Navigation no funciono"));
    }
    hamburguesas() {
        this.router.navigate(["hamburguesas"]);
        this.body.atributo1 = "actionname: Desayunos-Cenas";
        this.body.atributo2 = "destiny: hamburguesas";
        this.productService.PostWeb(this.body).subscribe(success => {
            if (success) {
                console.log("Navigation correct");
            }

        }, err => console.log("Navigation no funciono"));
    }
    ensaladas() {
        this.router.navigate(["ensaladas"]);
        this.body.atributo1 = "actionname: Desayunos-Cenas";
        this.body.atributo2 = "destiny: ensaladas";
        this.productService.PostWeb(this.body).subscribe(success => {
            if (success) {
                console.log("Navigation correct");
            }

        }, err => console.log("Navigation no funciono"));
    }
    menuPrincipal() {
        this.router.navigate(["menuPrincipal"]);
        this.body.atributo1 = "actionname: Desayunos-Cenas";
        this.body.atributo2 = "destiny: menuPrincipal";
        this.productService.PostWeb(this.body).subscribe(success => {
            if (success) {
                console.log("Navigation correct");
            }

        }, err => console.log("Navigation no funciono"));
    }
    ngOnInit() {
        this.body.atributo1 = "pageready: Desayunos-Cenas";
        this.productService.PostWeb(this.body).subscribe(success => {
            if (success) {
                console.log("ejecuto page ready");
            }

        }, err => console.log("no ejecuto page ready"));
  }

}
