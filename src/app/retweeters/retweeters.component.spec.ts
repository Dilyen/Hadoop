import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetweetersComponent } from './retweeters.component';

describe('RetweetersComponent', () => {
  let component: RetweetersComponent;
  let fixture: ComponentFixture<RetweetersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetweetersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetweetersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
