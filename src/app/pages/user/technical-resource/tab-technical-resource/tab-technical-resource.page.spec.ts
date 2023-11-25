import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabTechnicalResourcePage } from './tab-technical-resource.page';

describe('TabTechnicalResourcePage', () => {
  let component: TabTechnicalResourcePage;
  let fixture: ComponentFixture<TabTechnicalResourcePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabTechnicalResourcePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
