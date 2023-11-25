import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeginPage } from './begin.page';

describe('BeginPage', () => {
  let component: BeginPage;
  let fixture: ComponentFixture<BeginPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BeginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
