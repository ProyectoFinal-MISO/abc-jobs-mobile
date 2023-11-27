import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailInterviewResultPage } from './detail-interview-result.page';

describe('DetailInterviewResultPage', () => {
  let component: DetailInterviewResultPage;
  let fixture: ComponentFixture<DetailInterviewResultPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailInterviewResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
