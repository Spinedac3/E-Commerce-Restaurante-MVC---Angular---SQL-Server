import { Component, OnInit } from '@angular/core';
import { IProduct } from 'ClientApp/app/shared/producto';
import { ProductService } from 'ClientApp/app/shared/product.service';
import { BodyWeb } from '../../shared/BodyWeb';

@Component({
  selector: 'app-pastas',
  templateUrl: './pastas.component.html',
  styleUrls: ['./pastas.component.css']
})
export class PastasComponent implements OnInit {
    body: BodyWeb = new BodyWeb();
  constructor(private productService: ProductService) { }
  pastas: IProduct[] = [];
  errorMessage = '';

  addProduct(pastas: IProduct) {
      this.productService.añadirAOrden(pastas);
      this.body.atributo1 = "pagename: Pastas";
      this.body.atributo2 = "actionname: addProduct";
      this.productService.PostWeb(this.body).subscribe(success => {
          if (success) {
              console.log("action funciono");
          }

      }, err => console.log("no guardo action"));
  }

  ngOnInit() {
    this.productService.getPastas().subscribe({
      next: pastas => {
        this.pastas= pastas;
      },
      error: err => this.errorMessage = err
    });
      this.body.atributo1 = "pageready: Pastas";
      this.productService.PostWeb(this.body).subscribe(success => {
          if (success) {
              console.log("ejecuto page ready");
          }

      }, err => console.log("no ejecuto page ready"));
  }

}
