import { Component, OnInit } from '@angular/core';
import { IProduct } from 'ClientApp/app/shared/producto';
import { ProductService } from 'ClientApp/app/shared/product.service';
import { BodyWeb } from '../../shared/BodyWeb';

@Component({
  selector: 'app-jugos',
  templateUrl: './jugos.component.html',
  styleUrls: ['./jugos.component.css']
})
export class JugosComponent implements OnInit {

  constructor(private productService: ProductService) { }
  jugos: IProduct[] = [];
    errorMessage = '';
    body: BodyWeb = new BodyWeb();
  addProduct(jugo: IProduct) {
      this.productService.añadirAOrden(jugo);
      this.body.atributo1 = "pagename: Jugos";
      this.body.atributo2 = "actionname: addProduct";
      this.productService.PostWeb(this.body).subscribe(success => {
          if (success) {
              console.log("action funciono");
          }

      }, err => console.log("no guardo action"));
  }

  ngOnInit() {
    this.productService.getJugos().subscribe({
      next: jugos => {
        this.jugos = jugos;
      },
      error: err => this.errorMessage = err
    });
      this.body.atributo1 = "pageready: Jugos";
      this.productService.PostWeb(this.body).subscribe(success => {
          if (success) {
              console.log("ejecuto page ready");
          }

      }, err => console.log("no ejecuto page ready"));
  }

}
