import { Component, OnInit } from '@angular/core';
import { IProduct } from 'ClientApp/app/shared/producto';
import { ProductService } from 'ClientApp/app/shared/product.service';
import { BodyWeb } from '../../shared/BodyWeb';

@Component({
  selector: 'app-ensaladas',
  templateUrl: './ensaladas.component.html',
  styleUrls: ['./ensaladas.component.css']
})
export class EnsaladasComponent implements OnInit {

  constructor(private productService: ProductService) { }
  ensaladas: IProduct[] = [];
    errorMessage = '';
    body: BodyWeb = new BodyWeb();
  addProduct(ensalada: IProduct) {
      this.productService.añadirAOrden(ensalada);
      this.body.atributo1 = "pagename: Ensaladas";
      this.body.atributo2 = "actionname: addProduct";
      this.productService.PostWeb(this.body).subscribe(success => {
          if (success) {
              console.log("action funciono");
          }

      }, err => console.log("no guardo action"));
  }

  ngOnInit() {
    this.productService.getEnsaldas().subscribe({
      next: ensaladas => {
        this.ensaladas= ensaladas;
      },
      error: err => this.errorMessage = err
    });

      this.body.atributo1 = "pageready: Ensaladas";
      this.productService.PostWeb(this.body).subscribe(success => {
          if (success) {
              console.log("ejecuto page ready");
          }

      }, err => console.log("no ejecuto page ready"));
  }

}
