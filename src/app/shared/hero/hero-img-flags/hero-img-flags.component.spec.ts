import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroImgFlagsComponent } from './hero-img-flags.component';

describe('HeroImgFlagsComponent', () => {
  let component: HeroImgFlagsComponent;
  let fixture: ComponentFixture<HeroImgFlagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroImgFlagsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroImgFlagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
