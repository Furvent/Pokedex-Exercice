import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokelistComponent } from './pokelist/pokelist.component';
import { SearchNameFilterPipe } from './search-name-filter.pipe';
import { SearchIdFilterPipe } from './search-id-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokelistComponent,
    SearchNameFilterPipe,
    SearchIdFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
