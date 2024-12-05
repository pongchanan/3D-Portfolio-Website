import { Component } from '@angular/core';
import { PageLinkButtonBlackComponent } from '../page-link-button-black/page-link-button-black.component';
import { PageLinkButtonWhiteComponent } from '../page-link-button-white/page-link-button-white.component';
import { WebsiteLinkButtonWhiteComponent } from '../website-link-button-white/website-link-button-white.component';
import { WebsiteNavButtonWhiteComponent } from '../website-nav-button-white/website-nav-button-white.component';
import { LinkButtonComponent } from '../link-button/link-button.component';

@Component({
  selector: 'app-navbar',
  imports: [LinkButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isCollapsed = true;

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
