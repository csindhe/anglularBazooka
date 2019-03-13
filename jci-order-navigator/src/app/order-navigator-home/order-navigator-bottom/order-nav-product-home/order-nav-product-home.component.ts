import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/app/order-navigator-db/dataModels/productModel';

@Component({
  selector: 'jci-order-nav-product-home',
  templateUrl: './order-nav-product-home.component.html',
  styleUrls: ['./order-nav-product-home.component.scss']
})
export class OrderNavProductHomeComponent implements OnInit {
  productList: product[];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(products => this.productList = products.data);
  }

}
