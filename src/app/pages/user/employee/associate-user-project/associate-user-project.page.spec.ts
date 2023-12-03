import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssociateUserProjectPage } from './associate-user-project.page';

describe('AssociateUserProjectPage', () => {
  let component: AssociateUserProjectPage;
  let fixture: ComponentFixture<AssociateUserProjectPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AssociateUserProjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
