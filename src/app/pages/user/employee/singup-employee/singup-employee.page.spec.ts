import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SingupEmployeePage } from './singup-employee.page';

describe('SingupEmployeePage', () => {
  let component: SingupEmployeePage;
  let fixture: ComponentFixture<SingupEmployeePage>;

  beforeEach((() => {
    fixture = TestBed.createComponent(SingupEmployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
