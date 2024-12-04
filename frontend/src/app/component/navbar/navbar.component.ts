import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToggleLinkButtonComponent } from '../toggle-link-button/toggle-link-button.component';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, ToggleLinkButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {}
