import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-ticketissue',
  templateUrl: './ticketissue.component.html',
  styleUrls: ['./ticketissue.component.css']
})
export class TicketissueComponent implements OnInit {
  public Editor = ClassicEditor;

  constructor() { }

  ngOnInit() {
  }

}

