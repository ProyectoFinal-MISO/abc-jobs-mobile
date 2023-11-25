import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterviewResultsPage } from './interview-results.page';

describe('InterviewResultsPage', () => {
  let component: InterviewResultsPage;
  let fixture: ComponentFixture<InterviewResultsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InterviewResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
