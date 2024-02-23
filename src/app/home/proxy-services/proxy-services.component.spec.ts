import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProxyServicesComponent } from './proxy-services.component';

describe('ProxyServicesComponent', () => {
  let component: ProxyServicesComponent;
  let fixture: ComponentFixture<ProxyServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProxyServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProxyServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
