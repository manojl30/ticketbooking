import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-ticketrequest',
  templateUrl: './ticketrequest.component.html',
  styleUrls: ['./ticketrequest.component.css']
})
export class TicketrequestComponent implements OnInit {
  public Editor = ClassicEditor;
  constructor() { }

  ngOnInit() {
  }

}
