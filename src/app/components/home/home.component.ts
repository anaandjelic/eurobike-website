import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './arrow.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  slides = [
    {img: "../../../assets/images/home-carousel/1.jpg"},
    {img: "../../../assets/images/home-carousel/2.jpg"},
    {img: "../../../assets/images/home-carousel/3.jpg"},
    {img: "../../../assets/images/home-carousel/4.jpg"},
    {img: "../../../assets/images/home-carousel/5.jpg"},
    {img: "../../../assets/images/home-carousel/6.jpg"},
    {img: "../../../assets/images/home-carousel/7.jpg"}
  ];
  slideConfig = {
    "centerMode": true,
    "centerPadding": '60px',
    "arrows": true,
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "dots": true,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 5000,
    "responsive": [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  constructor 
  (
    private meta: Meta,
    private title: Title
  ) {
    this.meta.addTags([
      {name: 'description', content:''}
    ]);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    let elements = document.getElementsByTagName('section');
    Array.from(elements).forEach( function(element) {
      
      if( isElementXPercentInViewport(element, 50) ){
        if (!element.classList.contains('inview')) {
          element.classList.add('inview');
        } 
      }
      
    }); 
  }
}

  
  const isElementXPercentInViewport = function(el:any, percentVisible:any) {
    let
      top = el.getBoundingClientRect().top,
      bottom = el.getBoundingClientRect().bottom,
      height = el.getBoundingClientRect().height,
      windowHeight = (window.innerHeight || document.documentElement.clientHeight);

    if (el.classList.contains('to-up')) {
      bottom -= 50;
    }
  
    return !(
      Math.floor(100 - (((top >= 0 ? 0 : top) / +-height) * 100)) < percentVisible ||
      Math.floor(100 - ((bottom - windowHeight) / height) * 100) < percentVisible
    )
  };