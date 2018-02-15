import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateItemAndComponent } from './create-item-and.component';

describe('CreateItemAndComponent', () => {
  let component: CreateItemAndComponent;
  let fixture: ComponentFixture<CreateItemAndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateItemAndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateItemAndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
