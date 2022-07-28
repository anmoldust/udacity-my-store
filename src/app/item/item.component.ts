import { Component, OnInit } from '@angular/core';
import {ApiService} from '../service/api.service'
import { OurstoreapiService } from '../service/ourstoreapi.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
 users:any;
  constructor(private api:ApiService , private cartapi:OurstoreapiService) { 
    this.api.users().subscribe((data)=>
    {
     this.users=data;
     this.users.forEach((a:any)=>
     {
      Object.assign(a,{quantity:1 ,total:a.price});
     });
    })
  }
addtocart(item:any)
{
  this.cartapi.add(item);
}
  ngOnInit(): void {
  }

}
