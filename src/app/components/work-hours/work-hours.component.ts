import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-work-hours',
  templateUrl: './work-hours.component.html',
  styleUrls: ['./work-hours.component.css']
})
export class WorkHoursComponent implements OnInit {

  constructor
    (
      private meta: Meta,
      private title: Title
    ) { }

  ngOnInit(): void {
    this.title.setTitle('Radno vreme');
    this.meta.updateTag({ name: 'description', content: 'Radnim danima zimi radimo do 16:00, a leti do 19:00. Subotom radimo do 13:00. Nedeljom ne radimo.'})
  }

}
