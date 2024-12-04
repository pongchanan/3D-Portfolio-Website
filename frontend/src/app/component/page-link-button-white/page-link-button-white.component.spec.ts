import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLinkButtonWhiteComponent } from './page-link-button-white.component';

describe('PageLinkButtonWhiteComponent', () => {
  let component: PageLinkButtonWhiteComponent;
  let fixture: ComponentFixture<PageLinkButtonWhiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageLinkButtonWhiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageLinkButtonWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
