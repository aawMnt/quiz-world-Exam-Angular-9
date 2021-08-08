import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstuctionsQuizComponent } from './instuctions-quiz.component';

describe('InstuctionsQuizComponent', () => {
  let component: InstuctionsQuizComponent;
  let fixture: ComponentFixture<InstuctionsQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstuctionsQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstuctionsQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
