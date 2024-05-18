import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiderImgProvidersComponent } from './hero-img-providers.component';

describe('SiderImgProvidersComponent', () => {
  let component: SiderImgProvidersComponent;
  let fixture: ComponentFixture<SiderImgProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SiderImgProvidersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiderImgProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
