import { Component, OnInit } from '@angular/core';
import { ProductService } from 'ClientApp/app/shared/product.service';
import { IProduct } from 'ClientApp/app/shared/producto';

@Component({
  selector: 'app-desayuno',
  templateUrl: './desayuno.component.html',
  styleUrls: ['./desayuno.component.css']
})
export class DesayunoComponent implements OnInit {

  constructor(private productService: ProductService) { }
  desayunos: IProduct[] = [];
  errorMessage = '';

  addProduct(desayuno: IProduct) {
    this.productService.añadirAOrden(desayuno);
  }

  ngOnInit() {
    this.productService.getDesayunos().subscribe({
      next: desayunos => {
        this.desayunos = desayunos;
      },
      error: err => this.errorMessage = err
    });
  }

}
