import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteEmployeePage } from './delete-employee.page';

describe('DeleteEmployeePage', () => {
  let component: DeleteEmployeePage;
  let fixture: ComponentFixture<DeleteEmployeePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeleteEmployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
