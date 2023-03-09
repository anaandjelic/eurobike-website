import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-toggle',
  templateUrl: './language-toggle.component.html',
  styleUrls: ['./language-toggle.component.css']
})
export class LanguageToggleComponent implements OnInit {

  lang: string = 'sr';

  constructor( 
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'sr';
    if (this.lang === 'en') {
      (document.getElementById('toggle') as HTMLInputElement).checked = true;
      this.translateService.use('en');
    }
  }

  toggle() {
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
