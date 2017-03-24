import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DbService } from 'app/db.service';
import { SearcherComponent } from './searcher/searcher.component';

import { MaterialModule } from '@angular/material';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule } from '@angular/forms';
import { ResultComponent } from './result/result.component';
import { InfoComponent } from './info/info.component';

import { routing } from './app.routes';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SearcherComponent,
    ToolbarComponent,
    ResultComponent,
    InfoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule,
    FormsModule,
    routing
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
