import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Orden } from '../shared/order';
import { Router } from '@angular/router';
import { BodyWeb } from '../shared/BodyWeb';


@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
    body: BodyWeb = new BodyWeb();
    constructor(private productService: ProductService, private router: Router) { }

    nuevoPedido() {
        this.productService.order = new Orden();
        this.router.navigate(["menuPrincipal"]);
        this.body.atributo1 = "pagename: Factura";
        this.body.atributo2 = "actionname: nuevoPedido";
        this.productService.PostWeb(this.body).subscribe(success => {
            if (success) {
                console.log("action funciono");
            }

        }, err => console.log("no guardo action"));
  }

  imprimir(){
    window.print;
  }
    ngOnInit() {
        this.body.atributo1 = "pageready: Factura";
        this.productService.PostWeb(this.body).subscribe(success => {
            if (success) {
                console.log("ejecuto page ready");
            }

        }, err => console.log("no ejecuto page ready"));
  }

}
