import { Component, OnInit } from '@angular/core';
import { ProductService } from 'ClientApp/app/shared/product.service';
import { IProduct } from 'ClientApp/app/shared/producto';
import { BodyWeb } from '../../shared/BodyWeb';

@Component({
  selector: 'app-hamburguesas',
  templateUrl: './hamburguesas.component.html',
  styleUrls: ['./hamburguesas.component.css']
})
export class HamburguesasComponent implements OnInit {
    body: BodyWeb = new BodyWeb();
  constructor(private productService: ProductService) { }
  hamburguesas: IProduct[] = [];
  errorMessage = '';

  addProduct(hamburguesa: IProduct) {
      this.productService.añadirAOrden(hamburguesa);
      this.body.atributo1 = "pagename: Hamburguesas";
      this.body.atributo2 = "actionname: addProduct";
      this.productService.PostWeb(this.body).subscribe(success => {
          if (success) {
              console.log("action funciono");
          }

      }, err => console.log("no guardo action"));
  }

  ngOnInit() {
    this.productService.getHamburguesas().subscribe({
      next: hamburguesas => {
        this.hamburguesas= hamburguesas;
      },
      error: err => this.errorMessage = err
    });
      this.body.atributo1 = "pageready: Hamburguesas";
      this.productService.PostWeb(this.body).subscribe(success => {
          if (success) {
              console.log("ejecuto page ready");
          }

      }, err => console.log("no ejecuto page ready"));
  }

}
