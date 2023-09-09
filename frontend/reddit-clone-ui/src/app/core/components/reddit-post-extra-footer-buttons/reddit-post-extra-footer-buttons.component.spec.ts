import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditPostExtraFooterButtonsComponent } from './reddit-post-extra-footer-buttons.component';

describe('RedditPostExtraFooterButtonsComponent', () => {
  let component: RedditPostExtraFooterButtonsComponent;
  let fixture: ComponentFixture<RedditPostExtraFooterButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedditPostExtraFooterButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedditPostExtraFooterButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
