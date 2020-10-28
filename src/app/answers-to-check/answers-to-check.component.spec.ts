import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswersToCheckComponent } from './answers-to-check.component';

describe('AnswersToCheckComponent', () => {
  let component: AnswersToCheckComponent;
  let fixture: ComponentFixture<AnswersToCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswersToCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswersToCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
