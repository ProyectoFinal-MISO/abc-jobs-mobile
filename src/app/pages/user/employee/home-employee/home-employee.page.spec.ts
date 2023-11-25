import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeEmployeePage } from './home-employee.page';

describe('HomeEmployeePage', () => {
  let component: HomeEmployeePage;
  let fixture: ComponentFixture<HomeEmployeePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeEmployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
