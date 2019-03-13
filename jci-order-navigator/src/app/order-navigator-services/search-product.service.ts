import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { product } from '../order-navigator-db/dataModels/productModel';
import { RetrieveProductListService } from './retrieve-product-list.service';
import { Router, NavigationExtras } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchProductService {
  originalProductList: product[];
  searchedProdctList: product[];

  constructor(private productService: RetrieveProductListService, private router: Router) { }

  findProduct(searchVal: string): void {
    this.productService.getProductList().subscribe(products => this.originalProductList = products);
    this.searchedProdctList = this.originalProductList.filter(product => product.name.includes(searchVal));
    let navigationExtras: NavigationExtras = {
      queryParams: {'searchValue': searchVal},
      fragment: 'anchor',
      queryParamsHandling: 'preserve',
      preserveFragment: true
    }
    this.router.navigate(['/products', {searchValue: searchVal}], navigationExtras);
  }

}
