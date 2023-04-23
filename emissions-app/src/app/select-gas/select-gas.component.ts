/* A component to create 'Select Gas' mat-select form control.*/
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'; 
import { MatSelectModule} from '@angular/material/select';
import { DbService } from './../db.service';
import { ConfigService } from './../config.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-select-gas',
  templateUrl: './select-gas.component.html',
  styleUrls: ['./select-gas.component.css']
})
export class SelectGasComponent implements OnInit {
  favoriteColorControl = new FormControl('');
  selectedGas : string = "";
  selectedCountry : string = "";
  startDate : FormControl = new FormControl;
  endDate : FormControl = new FormControl;
  // For 'Select Gas' mat-select form control: 
  gases : string[] = [];
//Entire gas table: 
  gasesTable : Array<Object> = [];
  // For 'Select Country' mat-select form control:
  countries : string[] = [];
  value : string = "";
  constructor(private config: ConfigService, private db: DbService, private http: HttpClient) {
    let countriesData = this.db.getData('countries').subscribe(data => {
      console.log(this.getCountryArray(data, this.countries));
      console.log(Object.keys(data).length);
    });
    // console.log(this.db.getData('gases'));
    let gasData = this.db.getData('gases').subscribe(data => {
      console.log(this.getGasArray(data, this.gases));
    });
    // console.log(this.gases);
  }

  ngOnInit(): void {
  }

  getCountryArray(object: Object, array: string[]){
    let i = 0;
    for(i = 0; i<Object.keys(object).length; i++){
      let name : string = Object.values(object)[i].country_name;
        array.push(name);
    }
    return array;
  }

  getGasArray(object: Object, array: string[]){
    let i = 0;
    for(i = 0; i<Object.keys(object).length; i++){
      let name : string = Object.values(object)[i].Name;
        array.push(name);
    }
    return array;
  }
}

