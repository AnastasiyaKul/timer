import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-timer-manual',
  templateUrl: './timer-manual.component.html',
  styleUrls: ['./timer-manual.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerManualComponent {
  timeCounter: number;

  constructor(private cdr: ChangeDetectorRef) {
    this.timeCounter = 0;
    setInterval(this.timeChange.bind(this), 1000);
    setInterval(() => cdr.detectChanges(), 3000);
  }
  timeChange(): void {
    this.timeCounter++;
  }

  @Input() addend;
}
