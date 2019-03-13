import { Component, OnInit } from '@angular/core';
import { RetrieveProductListService } from 'src/app/order-navigator-services/retrieve-product-list.service';
import { product } from 'src/app/order-navigator-db/dataModels/productModel';
import { SearchProductService } from 'src/app/order-navigator-services/search-product.service';

@Component({
  selector: 'jci-order-navigator-bottom',
  templateUrl: './order-navigator-bottom.component.html',
  styleUrls: ['./order-navigator-bottom.component.scss']
})
export class OrderNavigatorBottomComponent implements OnInit {
  
  constructor() {
  }

  ngOnInit() {

  }

}
