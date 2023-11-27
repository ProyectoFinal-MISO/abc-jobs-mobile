import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateResultInterviewPage } from './create-result-interview.page';

describe('CreateResultInterviewPage', () => {
  let component: CreateResultInterviewPage;
  let fixture: ComponentFixture<CreateResultInterviewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateResultInterviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
