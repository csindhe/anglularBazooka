import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { product } from '../order-navigator-db/dataModels/productModel';
import { Observable, of, EMPTY } from 'rxjs';
import { RetrieveProductListService } from './retrieve-product-list.service';
import { take, mergeMap } from 'rxjs/operators';
import { RetreiveRelatedProductService } from 'src/app/order-navigator-services/retreive-related-product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailDataResolverService implements Resolve<product> {
  originalProductList: product[];
  currentProduct: product;

  constructor(private productService: RetrieveProductListService, private router: Router, private relProdService: RetreiveRelatedProductService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<product> | Observable<never> {
    return this.productService.getProduct(route.paramMap.get("id")).pipe(
      take(1),
      mergeMap(product => {
        if(product) {
          this.relProdService.getRelatedProducts(product.id);
          return of(product);
        }
        else {
          this.router.navigate(['/products']);
          return EMPTY;
        }
      })
    );
  }

  
}
