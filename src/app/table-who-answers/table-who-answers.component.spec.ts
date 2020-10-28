import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWhoAnswersComponent } from './table-who-answers.component';

describe('TableWhoAnswersComponent', () => {
  let component: TableWhoAnswersComponent;
  let fixture: ComponentFixture<TableWhoAnswersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableWhoAnswersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWhoAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
