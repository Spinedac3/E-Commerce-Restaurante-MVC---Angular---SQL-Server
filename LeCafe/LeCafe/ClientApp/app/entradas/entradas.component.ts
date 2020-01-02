import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/producto';
import { ProductService } from '../shared/product.service';
import { BodyWeb } from '../shared/BodyWeb';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {

    constructor(private productService: ProductService) { }
    products: IProduct[] = [];
    errorMessage = '';
    body: BodyWeb = new BodyWeb();
    
  addProduct(entrada: IProduct) {
      this.productService.añadirAOrden(entrada);
      this.body.atributo1 = "pagename: Entradas";
      this.body.atributo2 = "actionname: addProduct";
      this.productService.PostWeb(this.body).subscribe(success => {
          if (success) {
              console.log("action funciono");
          }

      }, err => console.log("no guardo action"));
  }
  ngOnInit() {
    this.productService.getEntradas().subscribe({
      next: products => {
            this.products = products;
            
      },
      error: err => this.errorMessage = err
    });

      console.log(this.products);  

      this.body.atributo1 = "pageready: Entradas";
      this.productService.PostWeb(this.body).subscribe(success => {
          if (success) {
              console.log("ejecuto page ready");
          }

      }, err => console.log("no ejecuto page ready"));
  }

}
