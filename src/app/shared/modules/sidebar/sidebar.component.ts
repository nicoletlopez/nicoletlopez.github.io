import { Component, OnInit } from '@angular/core';
import { SidebarMenu } from '../../config/sidebar-menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss',],
})
export class SidebarComponent implements OnInit {
  menuItems = SidebarMenu;

  constructor() { }

  ngOnInit(): void {
  }

}
