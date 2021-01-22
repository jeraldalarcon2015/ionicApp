
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.page.html',
  styleUrls: ['./dash.page.scss'],
})
export class DashPage implements OnInit {

  today:Date = new Date();
  items: any[] = [];
  @ViewChild(IonSlides) slides: any;

  fromDate: Date;
  toDate: Date;
  datesForCards = [];
  
  constructor() { }

  ngOnInit() {
  }

  async ngAfterViewInit() {
    console.log(await this.slides.getSwiper())
  }

  
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };


  fromDateChanged(fromDate: Date){
    this.datesForCards = [];
    if(this.toDate) {
        this.datesForCards = this.getDatesBetween(fromDate, this.toDate);
    }
}

toDateChanged(fromDate: Date){
    this.datesForCards = [];
    if(this.fromDate) {
        this.datesForCards = this.getDatesBetween(this.fromDate, this.toDate);
    }
}

getDatesBetween(from: Date, to: Date) : Date[] {
    let year = from.getFullYear();
    let month = from.getMonth();
    let day = from.getDate();
    let dates = [from];
    while(dates[dates.length-1] < to) {
      dates.push(new Date(year, month, ++day));
    }
    return dates;
}

}
