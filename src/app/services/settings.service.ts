import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private linkTheme = document.querySelector('#theme');
  constructor() {
    const url = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.linkTheme.setAttribute('href', url);
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;

    this.linkTheme.setAttribute('href', url);

    localStorage.setItem('theme', url);
    localStorage.getItem('theme');
    this.checkCurrentTheme();
  }
  checkCurrentTheme() {
    const links = document.querySelectorAll('.selector');

      links.forEach(element => {
      element.classList.remove('working');
      const btnTheme = element.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTime = this.linkTheme.getAttribute('href');
      if(btnThemeUrl === currentTime) {
        element.classList.add('working');
      }
    })
  }
}
