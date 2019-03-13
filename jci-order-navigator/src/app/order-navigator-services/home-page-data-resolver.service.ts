import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { product } from '../order-navigator-db/dataModels/productModel';
import { Observable, of } from 'rxjs';
import { RetrieveProductListService } from './retrieve-product-list.service';

@Injectable({
  providedIn: 'root'
})
export class HomePageDataResolverService implements Resolve<product[]> {
  productList: product[];
  famousProducts: product[];

  constructor(private productService: RetrieveProductListService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<product[]> {
    this.productService.getProductList().subscribe(products => this.productList = products);
    this.famousProducts = this.productList.filter(product => product.stars > 3);
    return of(this.famousProducts);
  }
}
