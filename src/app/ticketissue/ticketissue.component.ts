import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ticketissue',
  templateUrl: './ticketissue.component.html',
  styleUrls: ['./ticketissue.component.css']
})
export class TicketissueComponent implements OnInit {
  public Editor = ClassicEditor;
  ticketissueForm:FormGroup;
  constructor() { }

  ngOnInit() {
  }

}

