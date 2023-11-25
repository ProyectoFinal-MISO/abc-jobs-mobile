import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeTechnicalResourcePage } from './home-technical-resource.page';

describe('HomeTechnicalResourcePage', () => {
  let component: HomeTechnicalResourcePage;
  let fixture: ComponentFixture<HomeTechnicalResourcePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeTechnicalResourcePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
