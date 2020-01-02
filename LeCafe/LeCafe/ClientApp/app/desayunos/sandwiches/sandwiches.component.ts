import { Component, OnInit } from '@angular/core';
import { ProductService } from 'ClientApp/app/shared/product.service';
import { IProduct } from 'ClientApp/app/shared/producto';

@Component({
  selector: 'app-sandwiches',
  templateUrl: './sandwiches.component.html',
  styleUrls: ['./sandwiches.component.css']
})
export class SandwichesComponent implements OnInit {

  constructor(private productService: ProductService) { }
  sandwiches: IProduct[] = [];
  errorMessage = '';
 
  addProduct(sandwich: IProduct) {
    this.productService.añadirAOrden(sandwich);
  }

  ngOnInit() {
    this.productService.getSandwiches().subscribe({
      next: sandwiches => {
        this.sandwiches = sandwiches;
      },
      error: err => this.errorMessage = err
    });
  }

}
