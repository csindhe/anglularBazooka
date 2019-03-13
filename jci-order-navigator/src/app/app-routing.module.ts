import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageDataResolverService } from './order-navigator-services/home-page-data-resolver.service';
import { OrderNavProductHomeComponent } from './order-navigator-home/order-navigator-bottom/order-nav-product-home/order-nav-product-home.component';
import { OrderNavProductListComponent } from './order-navigator-home/order-navigator-bottom/order-nav-product-list/order-nav-product-list.component';
import { ProductListDataResolverService } from './order-navigator-services/product-list-data-resolver.service';
import { OrderNavProductDetailComponent } from './order-navigator-home/order-navigator-bottom/order-nav-product-detail/order-nav-product-detail.component';
import { ProductDetailDataResolverService } from './order-navigator-services/product-detail-data-resolver.service';

const routes: Routes = [
  {
    path: 'home', component: OrderNavProductHomeComponent, resolve: { data: HomePageDataResolverService }
  },
  {
    path: '', pathMatch: "full", redirectTo: '/home'
  },
  {
    path: 'products', component: OrderNavProductListComponent, resolve: { data: ProductListDataResolverService }
  },
  {
    path: 'product/:id', component: OrderNavProductDetailComponent, resolve: { data: ProductDetailDataResolverService }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }
