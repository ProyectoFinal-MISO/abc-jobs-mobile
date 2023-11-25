import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditTechnicalResourcePage } from './edit-technical-resource.page';

describe('EditTechnicalResourcePage', () => {
  let component: EditTechnicalResourcePage;
  let fixture: ComponentFixture<EditTechnicalResourcePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditTechnicalResourcePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
