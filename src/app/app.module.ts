import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { ResultComponent } from './result/result.component';
import { SearcherComponent } from './searcher/searcher.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { routing } from './app.routes';
import { DbService } from 'app/db.service';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    ResultComponent,
    SearcherComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    routing,
    BrowserAnimationsModule
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
