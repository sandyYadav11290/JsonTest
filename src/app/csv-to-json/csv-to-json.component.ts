import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csv-to-json',
  templateUrl: './csv-to-json.component.html',
  styleUrls: ['./csv-to-json.component.scss']
})
export class CsvToJsonComponent implements OnInit {

  constructor() { }

  public csvText:any;
  public jsonText:string;

  ngOnInit() {

    this.csvText = "32323,Mr,Sandeep,Kailashbhai,Yadav,NA,NoName,*******,Male";

  }

  public convert = () => {
    var csv = this.csvText;
    this.jsonText = this.CSV2JSON(csv);
  }

  private CSVToArray = (strData, strDelimiter) => {
    strDelimiter = (strDelimiter || ",");
    var objPattern = new RegExp((
    "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
    "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
    "([^\"\\" + strDelimiter + "\\r\\n]*))"), "gi");
    var arrData = [[]];
    var arrMatches = null;
    while (arrMatches = objPattern.exec(strData)) {
        var strMatchedDelimiter = arrMatches[1];
        if (strMatchedDelimiter.length && (strMatchedDelimiter != strDelimiter)) {
            arrData.push([]);
        }
        if (arrMatches[2]) {
            var strMatchedValue = arrMatches[2].replace(
            new RegExp("\"\"", "g"), "\"");
        } else {
            var strMatchedValue = arrMatches[3];
        }
        arrData[arrData.length - 1].push(strMatchedValue);
    }
    return (arrData);
}


  private CSV2JSON = (csv) => {
    
    var keys = [
        "ID",
        "Prefix",
        "FirstName",
        "middleName",
        "LastName",
        "Suffix",
        "AccountName",
        "Password",
        "Sex",
        "Email"
    ];

    var array = this.CSVToArray(csv,null);
    var objArray = [];
    for (var i = 0; i < array.length; i++) {
        objArray[i] = {};
        for (var k = 0; k < array[0].length && k < array[i].length; k++) {
            var value = array[0][k];
            console.log(value);
            objArray[i][keys[k]] = value;
        }
    }

    var json = JSON.stringify(objArray);
    var str = json.replace(/},/g, "},\r\n");

    return str;
}

}
