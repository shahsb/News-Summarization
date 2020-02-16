import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2PaginationModule } from 'ng2-pagination';

import { AppComponent } from './app.component';

import {routes} from './app.router';
import { ClassifyByDatesComponent } from './classify-by-dates/classify-by-dates.component';
import { FetchNewsComponent } from './fetch-news/fetch-news.component';
import { SummarizeNewsComponent } from './summarize-news/summarize-news.component';
import { FetchComponent } from './fetch/fetch.component';
import { SummarizeComponent } from './summarize/summarize.component';
import { ClassifyComponent } from './classify/classify.component';
import { TextSummarizationComponent } from './text-summarization/text-summarization.component';


@NgModule({
  declarations: [
    [AppComponent, SummarizeNewsComponent, ClassifyByDatesComponent, FetchNewsComponent,
      FetchComponent, SummarizeComponent, ClassifyComponent, TextSummarizationComponent]
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Ng2PaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
