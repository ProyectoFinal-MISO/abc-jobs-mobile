import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateTechnicalResultPage } from './create-technical-result.page';

describe('CreateTechnicalResultPage', () => {
  let component: CreateTechnicalResultPage;
  let fixture: ComponentFixture<CreateTechnicalResultPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateTechnicalResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
