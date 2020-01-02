import { Component, OnInit } from '@angular/core';
import { ProductService } from 'ClientApp/app/shared/product.service';
import { Router } from '@angular/router';
import { BodyWeb } from '../../shared/BodyWeb';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    constructor(private productService: ProductService, private router: Router) { }
    body: BodyWeb = new BodyWeb();
    ngOnInit() {
        this.body.atributo1 = "pageready: Cart";
        this.productService.PostWeb(this.body).subscribe(success => {
            if (success) {
                console.log("ejecuto page ready");
            }

        }, err => console.log("no ejecuto page ready"));
       }

  onCheckout() {
      this.router.navigate(["orden"]);
      this.body.atributo1 = "pagename: Cart";
      this.body.atributo2 = "actionname: onCheckout";
      this.productService.PostWeb(this.body).subscribe(success => {
          if (success) {
              console.log("action funciono");
          }

      }, err => console.log("no guardo action"));

  }

}
