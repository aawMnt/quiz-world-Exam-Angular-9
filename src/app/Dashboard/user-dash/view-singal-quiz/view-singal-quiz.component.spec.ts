import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSingalQuizComponent } from './view-singal-quiz.component';

describe('ViewSingalQuizComponent', () => {
  let component: ViewSingalQuizComponent;
  let fixture: ComponentFixture<ViewSingalQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSingalQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSingalQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
