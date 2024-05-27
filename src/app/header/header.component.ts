import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {Router} from '@angular/router'
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showPopup() {
    const popup = document.getElementById('popup') as HTMLElement;
    const overlay = document.querySelector('.popup-overlay') as HTMLElement;
    if (popup && overlay) {
      popup.style.display = 'block';
      overlay.style.display = 'block';
    }
  }

  closePopup() {
    const popup = document.getElementById('popup') as HTMLElement;
    const overlay = document.querySelector('.popup-overlay') as HTMLElement;
    if (popup && overlay) {
      popup.style.display = 'none';
      overlay.style.display = 'none';
    }
  }
  showNavbar() {
    const sidenav = document.querySelector('.side-navbar') as HTMLElement;
    if (sidenav) {
      sidenav.style.left = '0';
    }
  }

  closeNavbar() {
    const sidenav = document.querySelector('.side-navbar') as HTMLElement;
    if (sidenav) {
      sidenav.style.left = '-60%';
    }
  }
}
