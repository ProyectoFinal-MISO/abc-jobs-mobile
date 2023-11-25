import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcademicDataPage } from './academic-data.page';

describe('AcademicDataPage', () => {
  let component: AcademicDataPage;
  let fixture: ComponentFixture<AcademicDataPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AcademicDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
