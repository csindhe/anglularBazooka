import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/app/order-navigator-db/dataModels/productModel';
import { map } from 'rxjs/operators';

@Component({
  selector: 'jci-order-nav-product-list',
  templateUrl: './order-nav-product-list.component.html',
  styleUrls: ['./order-nav-product-list.component.scss']
})
export class OrderNavProductListComponent implements OnInit {
  productList: product[];
  searchVal: string;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.data.subscribe(products => this.productList = products.data);
  }

}
