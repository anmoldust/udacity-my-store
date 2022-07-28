import { Component, OnInit } from '@angular/core';
import {OurstoreapiService} from'../service/ourstoreapi.service'
@Component({
  selector: 'app-ourstore',
  templateUrl: './ourstore.component.html',
  styleUrls: ['./ourstore.component.css']
})
export class OurstoreComponent implements OnInit {
 productitem:any=[];
 allproducts:any=0;
  constructor(private Api :OurstoreapiService) { }

  ngOnInit(): void {
    this.Api.Product().subscribe(res=>{
     this.productitem=res;
     this.allproducts=this.Api.totalamount();
    });
  }
  removeProduct(item:any)
  {
    this.Api.removeData(item);
  }

}
