import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SummarizeNewsComponent } from './summarize-news/summarize-news.component';
import { ClassifyByDatesComponent } from './classify-by-dates/classify-by-dates.component';
import { FetchComponent } from './fetch/fetch.component';
import { SummarizeComponent } from './summarize/summarize.component';
import { ClassifyComponent } from './classify/classify.component';
import {FetchNewsComponent} from './fetch-news/fetch-news.component';
import { TextSummarizationComponent } from './text-summarization/text-summarization.component';

export const router : Routes = [
	
	{path :'', redirectTo:'home', pathMatch:'full'},
	{path :'home', component: AppComponent},
	{path :'SummarizeNews', component: SummarizeNewsComponent },
	{path :'FetchNews', component: FetchNewsComponent },
	{path :'ClassifyByDates', component: ClassifyByDatesComponent },
	{path :'fetch', component: FetchComponent},
	{path :'summarize', component: SummarizeComponent},
	{path :'classify', component: ClassifyComponent},
	{path :'TextSummarization', component: TextSummarizationComponent}
];

export const routes : ModuleWithProviders = RouterModule.forRoot(router);	