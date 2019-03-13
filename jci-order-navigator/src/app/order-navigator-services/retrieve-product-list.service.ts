import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { product } from '../order-navigator-db/dataModels/productModel';
import { productList, relatedProductList } from '../order-navigator-db/data/productData';
import { map } from 'rxjs/operators';
import { relatedProduct } from '../order-navigator-db/dataModels/relatedProductModel';

@Injectable({
  providedIn: 'root'
})
export class RetrieveProductListService {
  
  constructor() { }

  getProductList(): Observable<product[]> {
    return of(productList);
  }

  getProduct(productId: number | string): Observable<product> {
    return this.getProductList().pipe(
      map(products => products.find(product => product.id === +productId))
    );
  }

  getRelatedProductList(): Observable<relatedProduct[]> {
    return of(relatedProductList);
  }

  getRelatedProduct(parentProductId: number | string): Observable<relatedProduct> {
    return this.getRelatedProductList().pipe(
      map(products => products.find(product => product.parentId === parentProductId))
    );
  }

}
