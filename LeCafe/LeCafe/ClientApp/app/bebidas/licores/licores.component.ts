import { Component, OnInit } from '@angular/core';
import { ProductService } from 'ClientApp/app/shared/product.service';
import { IProduct } from 'ClientApp/app/shared/producto';
import { BodyWeb } from '../../shared/BodyWeb';

@Component({
  selector: 'app-licores',
  templateUrl: './licores.component.html',
  styleUrls: ['./licores.component.css']
})
export class LicoresComponent implements OnInit {
    body: BodyWeb = new BodyWeb();
  constructor(private productService: ProductService) { }
  licores: IProduct[] = [];
  errorMessage = '';

  addProduct(licor: IProduct) {
      this.productService.añadirAOrden(licor);
      this.body.atributo1 = "pagename: Licores";
      this.body.atributo2 = "actionname: addProduct";
      this.productService.PostWeb(this.body).subscribe(success => {
          if (success) {
              console.log("action funciono");
          }

      }, err => console.log("no guardo action"));
  }

  ngOnInit() {
    this.productService.getLicores().subscribe({
      next: licores => {
        this.licores = licores;
      },
      error: err => this.errorMessage = err
    });

      this.body.atributo1 = "pageready: Licores";
      this.productService.PostWeb(this.body).subscribe(success => {
          if (success) {
              console.log("ejecuto page ready");
          }

      }, err => console.log("no ejecuto page ready"));
  }

}
