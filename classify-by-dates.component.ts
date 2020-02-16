import { Component, OnInit } from '@angular/core';
import {Http ,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-classify-by-dates',
  templateUrl: './classify-by-dates.component.html',
  styleUrls: ['./classify-by-dates.component.css']
})
export class ClassifyByDatesComponent implements OnInit {

  data =[];
  url:string;
  StartDate:string;
  EndDate:string;

  constructor(private _http:Http,private _appComponent: AppComponent) { 

    this.url='http://127.0.0.1:8000/api/date/'+this._appComponent.getStartDate()+'/'+this._appComponent.getEndDate();
    this.StartDate= _appComponent.getStartDate();
    this.EndDate= _appComponent.getEndDate();
    console.log(this.StartDate);
    console.log(this.EndDate);

    this._http.get(this.url).map((response:Response)=>response.json()).subscribe(resData=>this.data=resData);
  }

  ngOnInit() {
  }

}
