import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssCountdownComponent } from './ass-countdown.component';

describe('AssCountdownComponent', () => {
  let component: AssCountdownComponent;
  let fixture: ComponentFixture<AssCountdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssCountdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
