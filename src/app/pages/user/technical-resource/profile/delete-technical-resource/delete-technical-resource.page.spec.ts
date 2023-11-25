import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteTechnicalResourcePage } from './delete-technical-resource.page';

describe('DeleteTechnicalResourcePage', () => {
  let component: DeleteTechnicalResourcePage;
  let fixture: ComponentFixture<DeleteTechnicalResourcePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeleteTechnicalResourcePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
