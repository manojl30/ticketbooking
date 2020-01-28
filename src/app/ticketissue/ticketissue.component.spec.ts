import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketissueComponent } from './ticketissue.component';

describe('TicketissueComponent', () => {
  let component: TicketissueComponent;
  let fixture: ComponentFixture<TicketissueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketissueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
