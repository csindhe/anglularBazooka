import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';
import { NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs/internal/Subject';
import { breadcrumb } from 'src/app/order-navigator-db/dataModels/breadcrumbModel';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbGenreratorService {
  displayAvailableProducts$ = new BehaviorSubject<boolean>(false);
  breadcrumb$ = new Subject<breadcrumb>();
  breadcrumbVal: breadcrumb = {};

  constructor(private router: Router) { }

  breadcrumbLander(): void {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(e => {
      this.showAllProductsLink();
      this.generateBreadcrumb();
    });
  }

  showAllProductsLink(): void {
    const navigation = this.router.getCurrentNavigation();
    let isShow: boolean = false;
    if (navigation.finalUrl.toString() === "/home") {
      isShow = true;
    }
    else {
      isShow = false;
    }
    this.displayAvailableProducts$.next(isShow);
  }

  generateBreadcrumb(): any {
    const navigation = this.router.getCurrentNavigation();
    this.breadcrumbVal.currPath = navigation.finalUrl.toString();
    if(navigation.previousNavigation) {
      this.breadcrumbVal.oldPath = navigation.previousNavigation.finalUrl.toString();
    }
    else {
      this.breadcrumbVal.oldPath = null;
    }
    this.breadcrumb$.next(this.breadcrumbVal);
  }

}
