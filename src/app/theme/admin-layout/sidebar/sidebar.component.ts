import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  @Input() showToggle = false;
  @Input() showUser = true;
  @Input() showHeader = true;

  @Output() toggleCollapsed = new EventEmitter<void>();
  @Output() toggleCollapsedSideMenu = new EventEmitter<void>();

  constructor() {}
}
