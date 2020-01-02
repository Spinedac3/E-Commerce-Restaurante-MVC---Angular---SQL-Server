import { Component, OnInit } from '@angular/core';
import { ProductService } from 'ClientApp/app/shared/product.service';
import { IProduct } from 'ClientApp/app/shared/producto';
import { BodyWeb } from '../../shared/BodyWeb';

@Component({
  selector: 'app-vinos',
  templateUrl: './vinos.component.html',
  styleUrls: ['./vinos.component.css']
})
export class VinosComponent implements OnInit {
    body: BodyWeb = new BodyWeb();
  constructor(private productService: ProductService) { }
  vinos: IProduct[] = [];
  errorMessage = '';

  addProduct(vino: IProduct) {
      this.productService.añadirAOrden(vino);
      this.body.atributo1 = "pagename: Vinos";
      this.body.atributo2 = "actionname: addProduct";
      this.productService.PostWeb(this.body).subscribe(success => {
          if (success) {
              console.log("action funciono");
          }

      }, err => console.log("no guardo action"));
  }

  ngOnInit() {
    this.productService.getVinos().subscribe({
      next: vinos => {
        this.vinos = vinos;
      },
      error: err => this.errorMessage = err
    });
      this.body.atributo1 = "pageready: Vinos";
      this.productService.PostWeb(this.body).subscribe(success => {
          if (success) {
              console.log("ejecuto page ready");
          }

      }, err => console.log("no ejecuto page ready"));
  }

}
