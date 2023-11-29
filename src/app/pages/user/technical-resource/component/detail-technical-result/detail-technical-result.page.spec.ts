import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailTechnicalResultPage } from './detail-technical-result.page';

describe('DetailTechnicalResultPage', () => {
  let component: DetailTechnicalResultPage;
  let fixture: ComponentFixture<DetailTechnicalResultPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailTechnicalResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
