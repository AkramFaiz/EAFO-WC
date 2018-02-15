import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateItemWebComponent } from './create-item-web.component';

describe('CreateItemWebComponent', () => {
  let component: CreateItemWebComponent;
  let fixture: ComponentFixture<CreateItemWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateItemWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateItemWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
