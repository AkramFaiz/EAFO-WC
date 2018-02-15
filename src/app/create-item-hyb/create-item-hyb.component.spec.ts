import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateItemHybComponent } from './create-item-hyb.component';

describe('CreateItemHybComponent', () => {
  let component: CreateItemHybComponent;
  let fixture: ComponentFixture<CreateItemHybComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateItemHybComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateItemHybComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
