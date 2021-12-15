import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IObject } from 'src/app/core/interfaces/object.interface';
import { SidebarWidthService } from 'src/app/services/sidebar-width/sidebar-width.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss',],
})
export class PortfolioComponent implements OnInit, OnDestroy {
  contentOffset: number;
  subs: IObject = {};
  constructor(
    private swService: SidebarWidthService,
  ) { }

  ngOnInit(): void {
    this.contentOffset = this.swService.getWidth();
    this.setSubscriptions();
  }

  ngOnDestroy() {
    Object.keys(this.subs).forEach(key => {
      this.subs[key].unsubscribe();
    })
  }

  setSubscriptions() {
    this.subs["sidebarWidth"] = this.swService.widthWatcher.subscribe((offset: number) => {
      this.updateContentOffset(offset);
    })
  }

  updateContentOffset(offset: number) {
    this.contentOffset = offset;
  }

}
