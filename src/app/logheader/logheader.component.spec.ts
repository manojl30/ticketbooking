import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogheaderComponent } from './logheader.component';

describe('LogheaderComponent', () => {
  let component: LogheaderComponent;
  let fixture: ComponentFixture<LogheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
