import {Component, Input, OnInit} from '@angular/core';
import {TimerButtonComponent} from '../timer-button/timer-button.component';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent {
  timeCounter: number;

  constructor() {
    this.timeCounter = 0;
    setInterval(this.timeChange.bind(this), 1000);
  }
  timeChange(): void {
    this.timeCounter++;
  }

  @Input() addend;
}
