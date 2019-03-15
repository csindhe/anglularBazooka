import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderNavigatorHomeComponent } from './order-navigator-home/order-navigator-home.component';
import { OrderNavigatorTopComponent } from './order-navigator-home/order-navigator-top/order-navigator-top.component';
import { OrderNavigatorBottomComponent } from './order-navigator-home/order-navigator-bottom/order-navigator-bottom.component';
import { OrderNavigatorSearchComponent } from './order-navigator-home/order-navigator-top/order-navigator-search/order-navigator-search.component';
import { OrderNavProductListComponent } from './order-navigator-home/order-navigator-bottom/order-nav-product-list/order-nav-product-list.component';
import { OrderNavProductDetailComponent } from './order-navigator-home/order-navigator-bottom/order-nav-product-detail/order-nav-product-detail.component';
import { OrderNavRelatedProductsComponent } from './order-navigator-home/order-navigator-bottom/order-nav-product-detail/order-nav-related-products/order-nav-related-products.component';
import { OrderNavProductHomeComponent } from './order-navigator-home/order-navigator-bottom/order-nav-product-home/order-nav-product-home.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderNavigatorHomeComponent,
    OrderNavigatorTopComponent,
    OrderNavigatorBottomComponent,
    OrderNavigatorSearchComponent,
    OrderNavProductListComponent,
    OrderNavProductDetailComponent,
    OrderNavRelatedProductsComponent,
    OrderNavProductHomeComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
