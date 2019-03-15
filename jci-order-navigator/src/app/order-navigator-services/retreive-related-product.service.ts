import { Injectable } from '@angular/core';
import { RetrieveProductListService } from 'src/app/order-navigator-services/retrieve-product-list.service';
import { relatedProduct } from 'src/app/order-navigator-db/dataModels/relatedProductModel';
import { Observable } from 'rxjs/internal/Observable';
import { product } from 'src/app/order-navigator-db/dataModels/productModel';
import { Subject } from 'rxjs/internal/Subject';
import { of } from 'rxjs/internal/observable/of';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class RetreiveRelatedProductService {
  productsList: product[] = [];
  productsList$ = new BehaviorSubject<product[]>(this.productsList);

  constructor(private productService: RetrieveProductListService) { }

  getRelatedProducts(currentProductId: number | string) {
    this.productsList = [];
    let relatedProduct: relatedProduct = null;
    this.productService.getRelatedProduct(currentProductId).subscribe(relatedProd => relatedProduct = relatedProd);
    if (relatedProduct) {
      for (var i = 0; i < relatedProduct.productIds.length; i++) {
        this.productService.getProduct(relatedProduct.productIds[i]).subscribe(product => this.productsList.push(product));
      }
    }
    else {
      this.productsList = [];
    }

    this.productsList$.next(this.productsList);
  }
}
