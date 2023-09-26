import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditPostPageComponent } from './reddit-post-page.component';

describe('RedditPostPageComponent', () => {
  let component: RedditPostPageComponent;
  let fixture: ComponentFixture<RedditPostPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedditPostPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedditPostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
