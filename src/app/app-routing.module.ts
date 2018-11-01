import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//route components
import { CsvToJsonComponent } from './csv-to-json/csv-to-json.component';
import { JsonToCsvComponent } from './json-to-csv/json-to-csv.component';
import { FormatJsonComponent } from './format-json/format-json.component';

const routes: Routes = [
  { path: 'csvToJson', component: CsvToJsonComponent },
  { path: 'jsonToCSV', component: JsonToCsvComponent },
  { path: 'formatJson', component: FormatJsonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
