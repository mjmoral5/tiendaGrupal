import { Component } from '@angular/core';
import { ProductItem } from 'src/app/model/product-item';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent {
  productItems: Array<ProductItem> = [
    new ProductItem(1, "libro", "un libro", 25),
    new ProductItem(2, "cd", "un cd", 20),
    new ProductItem(3, "carpeta", "una carpeta", 10)
  ];
}
