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
OnClick(problem,modules,priority){
  localStorage.setItem("problem",JSON.stringify(problem.value));
  localStorage.setItem("problem",JSON.stringify(modules.value));
  localStorage.setItem("problem",JSON.stringify(priority.value));
}
}
