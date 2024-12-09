import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveAvatarComponent } from './move-avatar.component';

describe('MoveAvatarComponent', () => {
  let component: MoveAvatarComponent;
  let fixture: ComponentFixture<MoveAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoveAvatarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MoveAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
