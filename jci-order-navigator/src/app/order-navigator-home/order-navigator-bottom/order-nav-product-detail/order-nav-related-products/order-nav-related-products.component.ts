import { Component, OnInit, Input } from '@angular/core';
import { relatedProduct } from 'src/app/order-navigator-db/dataModels/relatedProductModel';
import { take, mergeMap } from 'rxjs/operators';
import { product } from 'src/app/order-navigator-db/dataModels/productModel';
import { RetreiveRelatedProductService } from 'src/app/order-navigator-services/retreive-related-product.service';
import { Router } from '@angular/router/src/router';

@Component({
  selector: 'jci-order-nav-related-products',
  templateUrl: './order-nav-related-products.component.html',
  styleUrls: ['./order-nav-related-products.component.scss']
})
export class OrderNavRelatedProductsComponent implements OnInit {
  @Input() currentProductId : number | string;
  relatedProduct: relatedProduct;
  productsList: product[] = [];

  constructor(private relatedProdService: RetreiveRelatedProductService) { 
    this.relatedProdService.productsList$.subscribe(products => this.productsList = products);
  }

  ngOnInit() {
    this.relatedProdService.productsList$.subscribe(products => this.productsList = products);
  }

}
