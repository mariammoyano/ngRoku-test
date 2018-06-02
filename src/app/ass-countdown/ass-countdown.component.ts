import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ass-countdown',
  templateUrl: './ass-countdown.component.html',
  styleUrls: ['./ass-countdown.component.css']
})
export class AssCountdownComponent implements OnInit {

  countDownDate: number;
  countDownString: string;
  days: number;
  hours: number;
  hoursModifier: string;
  minutes: number;
  minutesModifier: string;
  seconds: number;
  secondsModifier: string;
  expired: boolean = false;

  interval;

  constructor() { }

  ngOnInit() {
    this.countDownDate = new Date("Jun 2, 2018 16:00:00").getTime();

    // Update the count down every 1 second
    this.interval = setInterval(this.updateCount.bind(this), 1000);
  }

  updateCount() {
    let now = new Date().getTime();
    let distance = this.countDownDate - now;

    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.hoursModifier = this.hours < 10 ? '0' : '';
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.minutesModifier = this.minutes < 10 ? '0' : '';
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    this.secondsModifier = this.seconds < 10 ? '0' : '';

    this.countDownString = `${this.hoursModifier}${this.hours}
                            :${this.minutesModifier}${this.minutes}
                            :${this.secondsModifier}${this.seconds}`;

    if (distance < 0) {
      clearInterval(this.interval);
      this.countDownString = '00:00:00';
      this.expired = true;
    }
  }
}
