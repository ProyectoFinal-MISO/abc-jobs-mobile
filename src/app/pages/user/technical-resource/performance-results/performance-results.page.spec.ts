import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerformanceResultsPage } from './performance-results.page';

describe('PerformanceResultsPage', () => {
  let component: PerformanceResultsPage;
  let fixture: ComponentFixture<PerformanceResultsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerformanceResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
