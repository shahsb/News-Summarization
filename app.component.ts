import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'app';
  url: string;
  algo:string;

  formFetch= new FormGroup({
    url: new FormControl('',Validators.required)
  });

  formClassifyByDates = new FormGroup({
    StartDate: new FormControl('',Validators.required),
    EndDate: new FormControl('',Validators.required)
  });
  constructor(private _activatedRoute: ActivatedRoute, private _router: Router) {

  }

  summarizeButton1(): void {
    this.algo='1';
    this._router.navigate(['SummarizeNews']);
  }

  summarizeButton2(): void {
    this.algo='2';
    this._router.navigate(['SummarizeNews']);
  }
  
  summarizeButton3(): void {
    this.algo='3';
    this._router.navigate(['SummarizeNews']);
  }

  summarizeButton4(): void {
    this.algo='4';
    this._router.navigate(['SummarizeNews']);
  }
  
  summarizeButton5(): void {
    this.algo='5';
    this._router.navigate(['SummarizeNews']);
  }

  summarizeButton6(): void {
    this.algo='6';
    this._router.navigate(['SummarizeNews']);
  }

  summarizeButton7(): void {
    this.algo='7';
    this._router.navigate(['SummarizeNews']);
  }

  summarizeButton8(): void {
    this.algo='8';
    this._router.navigate(['SummarizeNews']);
  }
  
  summarizeButton9(): void {
    this.algo='9';
    this._router.navigate(['SummarizeNews']);
  }
  classifyByDates(): void {
    
  }

  onSubmitFetch(){
    this.url ='http://127.0.0.1:8000/api/news/?format=json&url='+this.formFetch.controls['url'].value;
    console.log(this.formFetch.controls['url'].value);
    this._router.navigate(['FetchNews']);
  }

  onSubmitClassify(){
    console.log(this.formClassifyByDates.value);
    this._router.navigate(['ClassifyByDates']);
  }

   urlValue():string{
    return this.formFetch.controls['url'].value;
  }

  algoValue():string{
    return this.algo;
  }

  getStartDate():string{
    return this.formClassifyByDates.controls['StartDate'].value;
  }

  getEndDate():string{
    return this.formClassifyByDates.controls['EndDate'].value;
  }
}
