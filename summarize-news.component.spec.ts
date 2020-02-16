import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarizeNewsComponent } from './summarize-news.component';

describe('SummarizeNewsComponent', () => {
  let component: SummarizeNewsComponent;
  let fixture: ComponentFixture<SummarizeNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummarizeNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummarizeNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
