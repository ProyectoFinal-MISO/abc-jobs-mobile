import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgrammingLanguagesPage } from './programming-languages.page';

describe('ProgrammingLanguagesPage', () => {
  let component: ProgrammingLanguagesPage;
  let fixture: ComponentFixture<ProgrammingLanguagesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProgrammingLanguagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
