import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IosListComponent } from './ios-list.component';

describe('IosListComponent', () => {
  let component: IosListComponent;
  let fixture: ComponentFixture<IosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
