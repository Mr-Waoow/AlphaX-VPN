import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileProxyComponent } from './mobile-proxy.component';

describe('MobileProxyComponent', () => {
  let component: MobileProxyComponent;
  let fixture: ComponentFixture<MobileProxyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MobileProxyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileProxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
