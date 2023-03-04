import { Component, HostListener, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', './toggle.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {
  isLight: boolean = true;
  prevScrollpos = 0;

  ngAfterViewInit() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger?.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu?.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(n => 
      n.addEventListener("click", () => {
        hamburger?.classList.remove("active");
        navMenu?.classList.remove("active");
    }));

  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
      var currentScrollPos = window.pageYOffset;
      if (this.prevScrollpos > currentScrollPos) {
        document.getElementById("navbar")!.style.top = "0";
      } else {
        document.getElementById("navbar")!.style.top = "-70px";
      }
      this.prevScrollpos = currentScrollPos;
  }

  toggleTheme() {
    const moon = document.querySelector(".moon");
    const tdnn = document.querySelector(".tdnn");
    this.isLight = !this.isLight;
    document.body.classList.toggle("dark");
    moon?.classList.toggle('sun');
    tdnn?.classList.toggle('day');
  }
}
