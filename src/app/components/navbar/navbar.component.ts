import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', './toggle.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {
  
  isLight: boolean = true;
  prevScrollpos = 0;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngAfterViewInit() {
    const hamburger = this.document.querySelector(".hamburger");
    const navMenu = this.document.querySelector(".nav-menu");

    hamburger?.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu?.classList.toggle("active");
    });

    this.document.querySelectorAll(".nav-link").forEach(n => 
      n.addEventListener("click", () => {
        hamburger?.classList.remove("active");
        navMenu?.classList.remove("active");
    }));

  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
      var currentScrollPos = window.pageYOffset;
      if (this.prevScrollpos > currentScrollPos) {
        this.document.getElementById("navbar")!.style.top = "0";
      } else {
        const element = this.document.getElementsByClassName("nav-menu")[0];
        if (!element?.classList.contains("active")) {
          this.document.getElementById("navbar")!.style.top = "-70px";
        }
      }
      this.prevScrollpos = currentScrollPos;
  }

  toggleTheme() {
    const moon = this.document.querySelector(".moon");
    const tdnn = this.document.querySelector(".tdnn");
    this.isLight = !this.isLight;
    this.document.body.classList.toggle("dark");
    moon?.classList.toggle('sun');
    tdnn?.classList.toggle('day');
  }
}
