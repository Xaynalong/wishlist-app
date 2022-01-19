import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallinComponent } from './ballin.component';

describe('BallinComponent', () => {
  let component: BallinComponent;
  let fixture: ComponentFixture<BallinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BallinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
