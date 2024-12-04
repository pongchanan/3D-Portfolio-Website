import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleLinkButtonComponent } from './toggle-link-button.component';

describe('ToggleLinkButtonComponent', () => {
  let component: ToggleLinkButtonComponent;
  let fixture: ComponentFixture<ToggleLinkButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleLinkButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleLinkButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
