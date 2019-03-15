import { Component, OnInit } from '@angular/core';
import { BreadcrumbGenreratorService } from 'src/app/order-navigator-services/breadcrumb-genrerator.service';
import { breadcrumb } from 'src/app/order-navigator-db/dataModels/breadcrumbModel';

@Component({
  selector: 'jci-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  currBreadCrumb: breadcrumb = {};
  constructor(private breadcrumbService: BreadcrumbGenreratorService) {
    this.breadcrumbService.breadcrumb$.subscribe(bread => this.processCrumb(bread));
  }

  ngOnInit() {
  }

  processCrumb(bread: breadcrumb) {
    console.log(bread);
    if(bread.currPath === "/home") {
      this.currBreadCrumb.home = "Homepage";
    }
    else {
      this.currBreadCrumb.home = "Go to Homepage"
    }

    this.currBreadCrumb.currPath = bread.currPath;
    this.currBreadCrumb.oldPath = bread.oldPath;
  }

}
