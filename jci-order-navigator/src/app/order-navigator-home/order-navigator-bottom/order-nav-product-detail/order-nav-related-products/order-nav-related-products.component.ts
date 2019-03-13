import { Component, OnInit, Input } from '@angular/core';
import { relatedProduct } from 'src/app/order-navigator-db/dataModels/relatedProductModel';
import { RetrieveProductListService } from 'src/app/order-navigator-services/retrieve-product-list.service';
import { take, mergeMap } from 'rxjs/operators';
import { product } from 'src/app/order-navigator-db/dataModels/productModel';

@Component({
  selector: 'jci-order-nav-related-products',
  templateUrl: './order-nav-related-products.component.html',
  styleUrls: ['./order-nav-related-products.component.scss']
})
export class OrderNavRelatedProductsComponent implements OnInit {
  @Input() currentProductId : number | string;
  relatedProduct: relatedProduct;

  constructor(private productService: RetrieveProductListService) { }

  ngOnInit() {
    
  }

  fetchRelatedProducts() : relatedProduct {
    this.productService.getRelatedProduct(this.currentProductId).pipe(
      take(1),
      mergeMap(product => {
        if(product) {
          return 
        }
      })
    );
  }

}
