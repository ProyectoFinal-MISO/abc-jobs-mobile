import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabEmployeePage } from './tab-employee.page';

describe('TabEmployeePage', () => {
  let component: TabEmployeePage;
  let fixture: ComponentFixture<TabEmployeePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabEmployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
