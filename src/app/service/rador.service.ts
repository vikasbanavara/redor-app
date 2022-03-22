import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RadorService {
 
  constructor(private httpClient: HttpClient) { }
  myRadordata = [
    {"id":1,"longi":1.234,"lati":3.45,"date":"22-May-2021"},
    {"id":2,"longi":2.234,"lati":8.45,"date":"11-May-2021"},
    {"id":3,"longi":3.234,"lati":6.45,"date":"10-May-2021"},
    {"id":4,"longi":4.234,"lati":5.45,"date":"09-May-2021"},
    {"id":5,"longi":5.234,"lati":4.45,"date":"08-May-2021"}
  ]
  public getData() {
    this.httpClient.get("URL");
  }

  public myData() {
    return this.myRadordata;
  }
}
