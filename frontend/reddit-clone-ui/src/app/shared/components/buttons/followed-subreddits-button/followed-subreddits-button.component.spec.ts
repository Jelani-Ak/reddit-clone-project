import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowedSubredditsButtonComponent } from './followed-subreddits-button.component';

describe('FollowedSubredditsButtonComponent', () => {
  let component: FollowedSubredditsButtonComponent;
  let fixture: ComponentFixture<FollowedSubredditsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowedSubredditsButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowedSubredditsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
