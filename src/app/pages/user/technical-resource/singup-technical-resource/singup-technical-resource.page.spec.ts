import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SingupTechnicalResourcePage } from './singup-technical-resource.page';

describe('SingupTechnicalResourcePage', () => {
  let component: SingupTechnicalResourcePage;
  let fixture: ComponentFixture<SingupTechnicalResourcePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SingupTechnicalResourcePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
