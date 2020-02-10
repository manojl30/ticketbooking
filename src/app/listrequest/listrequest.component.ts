import { Component, OnInit } from '@angular/core';
import { ListreguestService } from '../listreguest.service';

@Component({
  selector: 'app-listrequest',
  templateUrl: './listrequest.component.html',
  styleUrls: ['./listrequest.component.css']
})
export class ListrequestComponent implements OnInit {
list:Listrequest[]=[];
problem:any;
modules:any;
priority:any;
  constructor(private listreguestService:ListreguestService) { }

  ngOnInit() {
    this.listreguestService.getlistofrequest().subscribe(res=>{
      this.list=res;
    });
    this.gedata();
  }
  gedata(){
    this.problem=JSON.parse(localStorage.getItem("problem"));
    this.modules=JSON.parse(localStorage.getItem("modules"));
    this.priority=JSON.parse(localStorage.getItem("priority")); 
  }
}


