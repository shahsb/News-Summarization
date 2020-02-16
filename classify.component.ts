import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classify',
  templateUrl: './classify.component.html',
  styleUrls: ['./classify.component.css']
})
export class ClassifyComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  onBClick(){
    this._router.navigate(['ClassifyByDates']);
  }
}
