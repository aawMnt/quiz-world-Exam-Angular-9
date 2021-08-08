import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersExamHistoryComponent } from './users-exam-history.component';

describe('UsersExamHistoryComponent', () => {
  let component: UsersExamHistoryComponent;
  let fixture: ComponentFixture<UsersExamHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersExamHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersExamHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
