import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BodyWeb } from '../shared/BodyWeb';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-desayunos',
  templateUrl: './desayunos.component.html',
  styleUrls: ['./desayunos.component.css']
})
export class DesayunosComponent implements OnInit {
    body: BodyWeb = new BodyWeb();
    constructor(private router: Router, private productService: ProductService) { }
    entradas() {
        this.router.navigate(["entradas"]);
        this.body.atributo1 = "actionname: Desayunos";
        this.body.atributo2 = "destiny: entradas";
        this.productService.PostWeb(this.body).subscribe(success => {
            if (success) {
                console.log("Navigation correct");
            }

        }, err => console.log("Navigation no funciono"));
    }
    bebidas() {
        this.router.navigate(["bebidas"]);
        this.body.atributo1 = "actionname: Desayunos";
        this.body.atributo2 = "destiny: bebidas";
        this.productService.PostWeb(this.body).subscribe(success => {
            if (success) {
                console.log("Navigation correct");
            }

        }, err => console.log("Navigation no funciono"));
    }
    desaynos() {
        this.router.navigate(["desayuno"]);
        this.body.atributo1 = "actionname: Desayunos";
        this.body.atributo2 = "destiny: entradas";
        this.productService.PostWeb(this.body).subscribe(success => {
            if (success) {
                console.log("Navigation correct");
            }

        }, err => console.log("Navigation no funciono"));
    }
    pancakes() {
        this.router.navigate(["pancakes"]);
        this.body.atributo1 = "actionname: Desayunos";
        this.body.atributo2 = "destiny: pancakes";
        this.productService.PostWeb(this.body).subscribe(success => {
            if (success) {
                console.log("Navigation correct");
            }

        }, err => console.log("Navigation no funciono"))
    }
    sandwiches() {
        this.router.navigate(["sandwiches"]);
        this.body.atributo1 = "actionname: Desayunos";
        this.body.atributo2 = "destiny: sandwiches";
        this.productService.PostWeb(this.body).subscribe(success => {
            if (success) {
                console.log("Navigation correct");
            }

        }, err => console.log("Navigation no funciono"))
    }

    menuPrincipal() {
        this.router.navigate(["menuPrincipal"]);
        this.body.atributo1 = "actionname: Desayunos";
        this.body.atributo2 = "destiny: MenuPrincipal";
        this.productService.PostWeb(this.body).subscribe(success => {
            if (success) {
                console.log("Navigation correct");
            }

        }, err => console.log("Navigation no funciono"))
    }
    ngOnInit() {
        this.body.atributo1 = "pageready: Desayunos";
        this.productService.PostWeb(this.body).subscribe(success => {
            if (success) {
                console.log("ejecuto page ready");
            }

        }, err => console.log("no ejecuto page ready"));
  }

}
