import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLinkButtonBlackComponent } from './page-link-button-black.component';

describe('PageLinkButtonBlackComponent', () => {
  let component: PageLinkButtonBlackComponent;
  let fixture: ComponentFixture<PageLinkButtonBlackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageLinkButtonBlackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageLinkButtonBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
