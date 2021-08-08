import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamAboutUsComponent } from './exam-about-us.component';

describe('ExamAboutUsComponent', () => {
  let component: ExamAboutUsComponent;
  let fixture: ComponentFixture<ExamAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamAboutUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
