import {BehaviorSubject} from 'rxjs'
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class OurstoreapiService {
cartDataList:any=[];
productlist=new BehaviorSubject<any>([]);
  constructor( private api:HttpClient) { }
  Product()
  {
    return this.productlist.asObservable()
  }
  set(product :any)
  {
     this.cartDataList.push(...product);
    this.productlist.next(product);
  }
  add(product:any)
  {
    this.cartDataList.push(product);
    this.productlist.next(this.cartDataList);
    this.totalamount();
  }
  totalamount()
  {
    let grandtotol=0;
    this.cartDataList.map((a:any)=>
    {
    grandtotol+=a.total;
    })
  }
  removeData(product:any)
  {
    this.cartDataList.map((a:any,index:any)=>
    {
      if(product.id==a.id)
      {
        this.cartDataList.splice(index,1);
      }
    });
  }
  }

