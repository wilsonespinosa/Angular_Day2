import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JsonDataComponent } from './json-data/json-data.component';
import { PrefixFilterPipe } from './prefix-filter.pipe';
import { SuffixFilterPipe } from './suffix-filter.pipe';
import { AppDirectiveDirective } from './app-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    JsonDataComponent,
    PrefixFilterPipe,
    SuffixFilterPipe,
    AppDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
