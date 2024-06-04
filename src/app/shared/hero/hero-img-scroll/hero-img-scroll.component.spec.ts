import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroImgScrollComponent } from './hero-img-scroll.component';

describe('HeroImgScrollComponent', () => {
  let component: HeroImgScrollComponent;
  let fixture: ComponentFixture<HeroImgScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroImgScrollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroImgScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
