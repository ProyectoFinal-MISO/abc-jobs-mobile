import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TechnicalResultsPage } from './technical-results.page';

describe('TechnicalResultsPage', () => {
  let component: TechnicalResultsPage;
  let fixture: ComponentFixture<TechnicalResultsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TechnicalResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
