import { Component, OnInit,Input} from '@angular/core';
import {Http ,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { AppComponent } from '../app.component';

declare var url:any;

@Component({
  selector: 'app-fetch-news',
  templateUrl: './fetch-news.component.html',
  styleUrls: ['./fetch-news.component.css'],
  inputs: ['url']
})
export class FetchNewsComponent implements OnInit {

  title="sbs";
  data=[];
  url:string;

  constructor(private _http:Http,private _appComponent: AppComponent) { 
    this.url='http://127.0.0.1:8000/api/news/?format=json&url='+this._appComponent.urlValue();
    console.log(this.url);
    this._http.get(this.url).map((response:Response)=>response.json()).subscribe(resData=>this.data=resData); 
  }

  ngOnInit() {
    this.url='http://127.0.0.1:8000/api/news/?format=json&url='+this._appComponent.urlValue();
  }

  getData(){
    
  }
  
}
