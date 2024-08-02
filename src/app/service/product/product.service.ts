import { Injectable } from '@angular/core';
import { Product } from '../../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  private products: Product[] = [
    new Product(1,'Phone', 1000, 100),
    new Product(2, 'laptop', 3000, 50),
    new Product(3, 'mouse', 110, 80),
    new Product(4, 'keyboard', 500, 100)
  ]

  getProducts(): Product[]{
    return this.products;
  }
}
