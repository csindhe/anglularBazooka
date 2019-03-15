import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';
import { BreadcrumbGenreratorService } from 'src/app/order-navigator-services/breadcrumb-genrerator.service';

@Component({
  selector: 'jci-order-navigator-top',
  templateUrl: './order-navigator-top.component.html',
  styleUrls: ['./order-navigator-top.component.scss']
})
export class OrderNavigatorTopComponent implements OnInit {
  isProducts: boolean;


  constructor(private breadcrumbService: BreadcrumbGenreratorService) { 
    this.breadcrumbService.displayAvailableProducts$.subscribe(isShow => this.isProducts = isShow);
  }

  ngOnInit() {
    this.topContainerLinkCalc();
  }

  topContainerLinkCalc() {
    this.breadcrumbService.breadcrumbLander();
  }

}
