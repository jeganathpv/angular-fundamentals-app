import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Header } from '../base.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  headers: Array<Header> = [];

  currentTab: Header | undefined;

  @Output() activeTab = new EventEmitter<string>();

  ngOnInit(): void {
    this.initHeaderValues();
    this.activateHeader();
  }

  initHeaderValues() {
    this.headers = [
      {
        Name: 'Home',
        Path: '/home',
        IsActive: false,
      },
      {
        Name: 'About',
        Path: '/about',
        IsActive: false,
      },
      {
        Name: 'Users',
        Path: '/users',
        IsActive: false,
      },
      {
        Name: 'Groups',
        Path: '/groups',
        IsActive: false,
      },
      {
        Name: 'Contact',
        Path: '/contact',
        IsActive: false,
      },
      {
        Name: 'Settings',
        Path: '/settings',
        IsActive: false,
      }
    ]
  }

  activateHeader() {
    if (this.headers.length > 0 && this.headers.every(header => !header.IsActive)) {
      this.headers[0].IsActive = true;
      this.currentTab = this.headers[0];
    }
  }

  onHeaderChange(selectedHeader: Header) {
    if (this.currentTab?.Name !== selectedHeader.Name) {
      selectedHeader.IsActive = true;
      const index = this.headers.findIndex(header => header.Name === this.currentTab?.Name);
      this.headers[index].IsActive = false;
      this.currentTab = selectedHeader;
      this.activeTab.emit(selectedHeader.Name);
    }
  }

}
