import { Component, OnInit } from '@angular/core';
import { ProductService } from 'ClientApp/app/shared/product.service';
import { IProduct } from 'ClientApp/app/shared/producto';
import { BodyWeb } from '../../shared/BodyWeb';

@Component({
  selector: 'app-cafes',
  templateUrl: './cafes.component.html',
  styleUrls: ['./cafes.component.css']
})
export class CafesComponent implements OnInit {
    body: BodyWeb = new BodyWeb();
  constructor(private productService: ProductService) { }
  cafes: IProduct[] = [];
  errorMessage = '';
  
  addProduct(product: IProduct) {
      this.productService.añadirAOrden(product);
      this.body.atributo1 = "pagename: Cafes";
      this.body.atributo2 = "actionname: addProduct";
      this.productService.PostWeb(this.body).subscribe(success => {
          if (success) {
              console.log("action funciono");
          }

      }, err => console.log("no guardo action"));
  }
  ngOnInit() {
    this.productService.getCafes().subscribe({
      next: cafes => {
        this.cafes = cafes;
      },
      error: err => this.errorMessage = err
    });
      this.body.atributo1 = "pageready: Cafes";
      this.productService.PostWeb(this.body).subscribe(success => {
          if (success) {
              console.log("ejecuto page ready");
          }

      }, err => console.log("no ejecuto page ready"));
  }

}
