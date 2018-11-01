import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-to-csv',
  templateUrl: './json-to-csv.component.html',
  styleUrls: ['./json-to-csv.component.scss']
})
export class JsonToCsvComponent implements OnInit {

  constructor() { }

  public csvText:any;
  public jsonText:string;

  ngOnInit() {

    this.jsonText = "";

  }

  public convert = () => {
    var csv = JSON.parse(this.jsonText);
    this.csvText = this.JSON2CSV(csv);
  }

  private JSON2CSV = (objArray) => {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;

    var str = '';
    var line = '';

        var head = array[0];
            for (var index in array[0]) {
                var value = index + "";
                line += '"' + value.replace(/"/g, '""') + '",';
            }
        line = line.slice(0, -1);
        str += line + '\r\n';

    for (var i = 0; i < array.length; i++) {
        var line = '';

            for (var index in array[i]) {
                var value = array[i][index] + "";
                line += '"' + value.replace(/"/g, '""') + '",';
            }

        line = line.slice(0, -1);
        str += line + '\r\n';
    }
    return str;
    
}

}
