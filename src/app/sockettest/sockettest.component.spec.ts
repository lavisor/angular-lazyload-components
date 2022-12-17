import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SockettestComponent } from './sockettest.component';

describe('SockettestComponent', () => {
  let component: SockettestComponent;
  let fixture: ComponentFixture<SockettestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SockettestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SockettestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
