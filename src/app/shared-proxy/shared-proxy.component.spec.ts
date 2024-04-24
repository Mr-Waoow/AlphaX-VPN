import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedProxyComponent } from './shared-proxy.component';

describe('SharedProxyComponent', () => {
  let component: SharedProxyComponent;
  let fixture: ComponentFixture<SharedProxyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SharedProxyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharedProxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
