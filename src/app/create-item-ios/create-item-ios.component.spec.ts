import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateItemIosComponent } from './create-item-ios.component';

describe('CreateItemIosComponent', () => {
  let component: CreateItemIosComponent;
  let fixture: ComponentFixture<CreateItemIosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateItemIosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateItemIosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
