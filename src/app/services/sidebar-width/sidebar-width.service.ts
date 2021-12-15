import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SidebarWidthService {
  widthWatcher = new Subject<number>();
  width: number;
  constructor() { }

  setWidth(size: number) {
    console.log("Sidebar size", size);
    this.widthWatcher.next(size);
    this.width = size;
  }

  getWidth(): number {
    return this.width;
  }
}
