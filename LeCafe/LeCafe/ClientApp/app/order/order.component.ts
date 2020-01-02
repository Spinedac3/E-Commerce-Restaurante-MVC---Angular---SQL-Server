import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Tarjeta } from '../shared/order';
import { BodyWeb } from '../shared/BodyWeb';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
    options: SelectItem[];

    selectedOption: string;
    nombre: string;
    nombreTarjeta: string;
    apellido: string;
    nit: string;
    idTarjeta: number;
    numeroTarjeta: number;
    fechaVencimiento: Date;
    ccv: number;
    saldo: number = 1000; 
    tipoPago: string = "Efectivo";
 
    errorMessage: string = "";

    tarjeta: Tarjeta = new Tarjeta();
    body: BodyWeb = new BodyWeb();
    constructor(private productService: ProductService, private router: Router) {
        this.options = [
            { label: 'Efectivo', value: 'Efectivo' },
            { label: 'Tarjeta', value: 'Tarjeta' }
        
        ];
    }
 
    Confirmar() {
        this.productService.order.tarjetaId = this.idTarjeta;
        this.productService.order.nombre = this.nombre;
        this.productService.order.apellido = this.apellido;
        this.productService.order.nit = this.nit;
        this.productService.order.tipoPago = this.selectedOption;
        this.productService.order.subTotal = this.productService.order.getSubtotal;
        this.productService.crearOrden()
            .subscribe(success => {
                if (success) {
                    this.router.navigate(['factura']);
                }
                
            }, err => this.errorMessage = "Failed to save order");

        this.body.atributo1 = "pagename: Order";
        this.body.atributo2 = "actionname: Confirmar";
        this.productService.PostWeb(this.body).subscribe(success => {
            if (success) {
                console.log("action funciono");
            }

        }, err => console.log("no guardo action"));
      
  }

    TarjetaActivar() {
        this.tipoPago = "Tarjeta";
        console.log(this.tipoPago);
        console.log(this.tarjeta);
        this.body.atributo1 = "pagename: Order";
        this.body.atributo2 = "actionname: TarjetaActivar";
        this.productService.PostWeb(this.body).subscribe(success => {
            if (success) {
                console.log("action funciono");
            }

        }, err => console.log("no guardo action"));
    }
    ngOnInit() {
        this.body.atributo1 = "pageready: Order";
        this.productService.PostWeb(this.body).subscribe(success => {
            if (success) {
                console.log("ejecuto page ready");
            }

        }, err => console.log("no ejecuto page ready"));
    }

}
