import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlurbgComponent } from './blurbg.component';

describe('BlurbgComponent', () => {
  let component: BlurbgComponent;
  let fixture: ComponentFixture<BlurbgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlurbgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlurbgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
