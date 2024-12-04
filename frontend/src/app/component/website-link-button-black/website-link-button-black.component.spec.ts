import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteLinkButtonBlackComponent } from './website-link-button-black.component';

describe('WebsiteLinkButtonBlackComponent', () => {
  let component: WebsiteLinkButtonBlackComponent;
  let fixture: ComponentFixture<WebsiteLinkButtonBlackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteLinkButtonBlackComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebsiteLinkButtonBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
