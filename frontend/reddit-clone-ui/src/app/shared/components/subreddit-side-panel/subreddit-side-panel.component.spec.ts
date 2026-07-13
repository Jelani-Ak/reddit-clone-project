import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubredditSidePanelComponent } from './subreddit-side-panel.component';

describe('SubredditSidePanelComponent', () => {
  let component: SubredditSidePanelComponent;
  let fixture: ComponentFixture<SubredditSidePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubredditSidePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubredditSidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
