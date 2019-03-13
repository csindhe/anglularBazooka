import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/app/order-navigator-db/dataModels/productModel';

@Component({
  selector: 'jci-order-nav-product-detail',
  templateUrl: './order-nav-product-detail.component.html',
  styleUrls: ['./order-nav-product-detail.component.scss']
})
export class OrderNavProductDetailComponent implements OnInit {
  currentProduct: product;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(product => this.currentProduct = product.data);
  }

}
