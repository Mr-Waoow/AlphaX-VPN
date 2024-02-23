import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiderImgComponent } from './sider-img.component';

describe('SiderImgComponent', () => {
  let component: SiderImgComponent;
  let fixture: ComponentFixture<SiderImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SiderImgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SiderImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
