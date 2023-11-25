import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetEmployeePage } from './get-employee.page';

describe('GetEmployeePage', () => {
  let component: GetEmployeePage;
  let fixture: ComponentFixture<GetEmployeePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GetEmployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
