import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamHistoryofUserComponent } from './exam-historyof-user.component';

describe('ExamHistoryofUserComponent', () => {
  let component: ExamHistoryofUserComponent;
  let fixture: ComponentFixture<ExamHistoryofUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamHistoryofUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamHistoryofUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
