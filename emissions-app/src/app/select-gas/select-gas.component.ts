/* A component to create 'Select Gas' mat-select form control.*/
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'; 
import { MatSelectModule} from '@angular/material/select';
import { MainService } from '../main.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-select-gas',
  templateUrl: './select-gas.component.html',
  styleUrls: ['./select-gas.component.css']
})
export class SelectGasComponent implements OnInit {
  gas = new FormControl('');
  selectedGas : string = "Methane";
  selectedCountry : string = "India";
  startDate : FormControl = new FormControl;
  endDate : FormControl = new FormControl;
  // For 'Select Gas' mat-select form control: 
  gases : string[] = [];
//Entire gas table: 
  gasesTable : Array<Object> = [];
  // For 'Select Country' mat-select form control:
  countries : string[] = [];
  value : string = "";
  constructor(private main: MainService, private http: HttpClient) {
    /*
      console.log(Object.keys(data).length);
    });*/
  }

  ngOnInit(){
    this.main.getData('countries').subscribe(data => {
      this.main.getCountryArray(data, this.countries);
    });
    this.main.getData('gases').subscribe(data => {
      this.main.getGasArray(data, this.gases);
    });
  }
}

