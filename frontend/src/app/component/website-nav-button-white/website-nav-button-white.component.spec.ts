import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteNavButtonWhiteComponent } from './website-nav-button-white.component';

describe('WebsiteNavButtonWhiteComponent', () => {
  let component: WebsiteNavButtonWhiteComponent;
  let fixture: ComponentFixture<WebsiteNavButtonWhiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteNavButtonWhiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteNavButtonWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
