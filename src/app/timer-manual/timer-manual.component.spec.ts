import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerManualComponent } from './timer-manual.component';

describe('TimerManualComponent', () => {
  let component: TimerManualComponent;
  let fixture: ComponentFixture<TimerManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
