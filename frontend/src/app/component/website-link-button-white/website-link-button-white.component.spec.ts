import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteLinkButtonWhiteComponent } from './website-link-button-white.component';

describe('WebsiteLinkButtonWhiteComponent', () => {
  let component: WebsiteLinkButtonWhiteComponent;
  let fixture: ComponentFixture<WebsiteLinkButtonWhiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteLinkButtonWhiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteLinkButtonWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
