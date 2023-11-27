import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerformanceResultDetailPage } from './performance-result-detail.page';

describe('PerformanceResultDetailPage', () => {
  let component: PerformanceResultDetailPage;
  let fixture: ComponentFixture<PerformanceResultDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerformanceResultDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
