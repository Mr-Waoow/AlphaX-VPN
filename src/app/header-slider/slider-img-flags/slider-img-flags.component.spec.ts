import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderImgFlagsComponent } from './slider-img-flags.component';

describe('SliderImgFlagsComponent', () => {
  let component: SliderImgFlagsComponent;
  let fixture: ComponentFixture<SliderImgFlagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderImgFlagsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderImgFlagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
