import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetTechnicalResourcePage } from './get-technical-resource.page';

describe('GetTechnicalResourcePage', () => {
  let component: GetTechnicalResourcePage;
  let fixture: ComponentFixture<GetTechnicalResourcePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GetTechnicalResourcePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
