import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-timer-on-push',
  templateUrl: './timer-on-push.component.html',
  styleUrls: ['./timer-on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerOnPushComponent {
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
