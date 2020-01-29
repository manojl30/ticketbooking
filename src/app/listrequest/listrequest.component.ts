import { Component, OnInit } from '@angular/core';
import { ListreguestService } from '../listreguest.service';

@Component({
  selector: 'app-listrequest',
  templateUrl: './listrequest.component.html',
  styleUrls: ['./listrequest.component.css']
})
export class ListrequestComponent implements OnInit {
list:Listrequest[]=[];
  constructor(private listreguestService:ListreguestService) { }

  ngOnInit() {
    this.listreguestService.getlistofrequest().subscribe(res=>{
      this.list=res;
      let data=localStorage.getItem("problem");
      localStorage.getItem("modules");
      localStorage.getItem("priority");
    })
  }

}

