import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Router } from '@angular/router'

@Component({
  selector: 'app-ticketrequest',
  templateUrl: './ticketrequest.component.html',
  styleUrls: ['./ticketrequest.component.css']
})
export class TicketrequestComponent implements OnInit {
  public Editor = ClassicEditor;
  constructor(private router:Router) { }

  ngOnInit() {
  }

OnClick(problem,modules,priority){
  localStorage.setItem("problem",JSON.stringify(problem));
  localStorage.setItem("modules",JSON.stringify(modules));
  localStorage.setItem("priority",JSON.stringify(priority));
  this.router.navigateByUrl('listrequest');}
}
