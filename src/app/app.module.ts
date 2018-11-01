import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card'; 
import {MatMenuModule} from '@angular/material/menu';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CsvToJsonComponent } from './csv-to-json/csv-to-json.component';
import { JsonToCsvComponent } from './json-to-csv/json-to-csv.component';
import { FormatJsonComponent } from './format-json/format-json.component';

@NgModule({
  declarations: [
    AppComponent,
    CsvToJsonComponent,
    JsonToCsvComponent,
    FormatJsonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatMenuModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatExpansionModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
