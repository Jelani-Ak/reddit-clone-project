import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSwitchButtonComponent } from './layout-switch-button.component';

describe('LayoutSwitchButtonComponent', () => {
  let component: LayoutSwitchButtonComponent;
  let fixture: ComponentFixture<LayoutSwitchButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutSwitchButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutSwitchButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
