import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-timer-button',
  templateUrl: './timer-button.component.html',
  styleUrls: ['./timer-button.component.css']
})
export class TimerButtonComponent {
  @Output() onAddTime = new EventEmitter();

  addTime() {
    this.onAddTime.emit(1000);
  }
}
