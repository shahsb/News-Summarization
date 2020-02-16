import { Component, OnInit } from '@angular/core';
import {Http ,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-summarize-news',
  templateUrl: './summarize-news.component.html',
  styleUrls: ['./summarize-news.component.css']
})
export class SummarizeNewsComponent implements OnInit {

  data=[];
  fetchUrl:string;
  constructor(private _http:Http,private _appComponent: AppComponent) { 
    this.fetchUrl='http://127.0.0.1:8000/api/summary/?format=json&algo='+this._appComponent.algoValue();
    this._http.get(this.fetchUrl).map((response:Response)=>response.json()).subscribe(resData=>this.data=resData); 
  }
  
  ngOnInit() {
  }

}
