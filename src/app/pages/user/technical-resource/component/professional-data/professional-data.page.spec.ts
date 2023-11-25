import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfessionalDataPage } from './professional-data.page';

describe('ProfessionalDataPage', () => {
  let component: ProfessionalDataPage;
  let fixture: ComponentFixture<ProfessionalDataPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfessionalDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
