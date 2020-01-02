import { Component, OnInit } from '@angular/core';
import { ProductService } from 'ClientApp/app/shared/product.service';
import { IProduct } from 'ClientApp/app/shared/producto';

@Component({
  selector: 'app-pancakes',
  templateUrl: './pancakes.component.html',
  styleUrls: ['./pancakes.component.css']
})
export class PancakesComponent implements OnInit {

  constructor(private productService: ProductService) { }
  pancakes: IProduct[] = [];
  errorMessage = '';

  addProduct(pancake: IProduct) {
    this.productService.añadirAOrden(pancake);
  }

  ngOnInit() {
    this.productService.getPancakes().subscribe({
      next: pancakes => {
        this.pancakes = pancakes;
      },
      error: err => this.errorMessage = err
    });
  }

}
