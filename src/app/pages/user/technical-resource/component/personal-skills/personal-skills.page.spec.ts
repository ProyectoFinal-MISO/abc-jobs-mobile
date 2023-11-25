import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonalSkillsPage } from './personal-skills.page';

describe('PersonalSkillsPage', () => {
  let component: PersonalSkillsPage;
  let fixture: ComponentFixture<PersonalSkillsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PersonalSkillsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
