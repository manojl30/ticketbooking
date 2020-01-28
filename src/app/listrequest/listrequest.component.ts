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
      console.log(res);
      this.list=res;
      console.log(this.list);
    })
  }

}

