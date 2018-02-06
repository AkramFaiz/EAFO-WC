import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HybListComponent } from './hyb-list.component';

describe('HybListComponent', () => {
  let component: HybListComponent;
  let fixture: ComponentFixture<HybListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HybListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HybListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
