import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateInterviewPage } from './create-interview.page';

describe('CreateInterviewPage', () => {
  let component: CreateInterviewPage;
  let fixture: ComponentFixture<CreateInterviewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateInterviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
