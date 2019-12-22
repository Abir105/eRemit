import { Component, EventEmitter, Input, NgZone, Output } from '@angular/core';
import { MenuService } from '@core';
import { NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
})
export class SidemenuComponent {
  // NOTE: Ripple effect make page flashing on mobile
  @Input() ripple = true;
  @Output() toggleSidenavAfterClick = new EventEmitter<void>();

  menus = this.menuService.getAll();

  constructor(private router: Router, private menuService: MenuService) {
    this.router.events.subscribe(event => {
      // close sidenav on routing
      this.toggleSidenavAfterClick.emit();
    });
  }


  // Delete empty value in array
  filterStates(states: string[]) {
    return states.filter(item => item && item.trim());
  }

  generateOutputEvent() {
    this.toggleSidenavAfterClick.emit();
  }
}
