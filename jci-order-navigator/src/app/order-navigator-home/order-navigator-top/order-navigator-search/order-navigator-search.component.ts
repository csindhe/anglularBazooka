import { Component, OnInit } from '@angular/core';
import { SearchProductService } from 'src/app/order-navigator-services/search-product.service';
import { Observable, of } from 'rxjs';
import { product } from 'src/app/order-navigator-db/dataModels/productModel';
import { productList } from 'src/app/order-navigator-db/data/productData';

@Component({
  selector: 'jci-order-navigator-search',
  templateUrl: './order-navigator-search.component.html',
  styleUrls: ['./order-navigator-search.component.scss']
})
export class OrderNavigatorSearchComponent implements OnInit {
  searchString: string;
  
  constructor(private searchService: SearchProductService) { }

  ngOnInit() {
  }

  triggerSearch(searchValue: string): void {
    this.searchService.findProduct(searchValue);
  }

}
