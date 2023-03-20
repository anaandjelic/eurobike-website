import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-language-toggle',
  templateUrl: './language-toggle.component.html',
  styleUrls: ['./language-toggle.component.css']
})
export class LanguageToggleComponent implements OnInit {

  lang: string = 'sr';
  isServer = false;

  constructor( 
    private translateService: TranslateService,
    @Inject(PLATFORM_ID) platformID: any
  ) {
    this.isServer = isPlatformServer(PLATFORM_ID);
  }

  ngOnInit(): void {
    if (this.isServer) {
      this.lang = localStorage.getItem('lang') || 'sr';
      if (this.lang === 'en') {
        (document.getElementById('toggle') as HTMLInputElement).classList.toggle('checked');
        this.translateService.use('en');
      }
    }
  }

  toggle() {
    if (this.isServer) {
      (document.getElementById('toggle') as HTMLInputElement).classList.toggle('checked');
      if (this.lang === 'sr') {
        this.lang = 'en';
      }
      else {
        this.lang = 'sr';
      }
      localStorage.setItem('lang', this.lang);
      this.translateService.use(this.lang);
    }
  }

}
