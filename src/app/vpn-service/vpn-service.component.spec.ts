import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VpnServiceComponent } from './vpn-service.component';

describe('VpnServiceComponent', () => {
  let component: VpnServiceComponent;
  let fixture: ComponentFixture<VpnServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VpnServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VpnServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
