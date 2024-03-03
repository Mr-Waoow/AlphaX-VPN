import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VpnPriceComponent } from './vpn-price.component';

describe('VpnPriceComponent', () => {
  let component: VpnPriceComponent;
  let fixture: ComponentFixture<VpnPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VpnPriceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VpnPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
