import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { product } from '../order-navigator-db/dataModels/productModel';
import { Observable, of } from 'rxjs';
import { RetrieveProductListService } from './retrieve-product-list.service';

@Injectable({
  providedIn: 'root'
})
export class ProductListDataResolverService implements Resolve<product[]> {
  searchVal: string;
  originalProductList: product[];
  searchedProductList:product[];

  constructor(private productService: RetrieveProductListService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<product[]> {
    this.searchVal = route.paramMap.get("searchValue");
    this.productService.getProductList().subscribe(products => this.originalProductList = products);
    if(this.searchVal === null) {
      this.searchedProductList = this.originalProductList;
    }
    else {
      this.searchedProductList = this.originalProductList.filter(product => product.name.includes(this.searchVal));
    }
    return of(this.searchedProductList);
  }
}
