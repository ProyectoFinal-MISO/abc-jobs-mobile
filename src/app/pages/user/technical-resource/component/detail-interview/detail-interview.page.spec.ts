import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailInterviewPage } from './detail-interview.page';

describe('DetailInterviewPage', () => {
  let component: DetailInterviewPage;
  let fixture: ComponentFixture<DetailInterviewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailInterviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
