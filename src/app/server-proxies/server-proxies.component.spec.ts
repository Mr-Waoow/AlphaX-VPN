import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerProxiesComponent } from './server-proxies.component';

describe('ServerProxiesComponent', () => {
  let component: ServerProxiesComponent;
  let fixture: ComponentFixture<ServerProxiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServerProxiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServerProxiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
