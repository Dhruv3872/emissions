import { DbService } from './db.service';
import { Component } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emissions-app';
  selected: string = "";
  // For 'Select Gas' mat-select form control: 
  gases : string[] = [];
  // For 'Select Country' mat-select form control:
  countries : string[] = [];
  value : string = "";

  constructor(private config: ConfigService, private db: DbService, private http: HttpClient) {
    let countriesData = this.db.getData('countries').subscribe(data => {
      console.log(this.getCountryArray(data, this.countries));
      console.log(Object.keys(data).length);
    });
    let gasData = this.db.getData('gases').subscribe(data => {
      console.log(this.getGasArray(data, this.gases));
    });
    /*let coountryData = db.getCountries()
                          .subscribe(data => console.log(data));
    */
                          /*let countryData = config.getCountries()
                            .subscribe(data => console.log(data));
    console.log("Methane average emissions data for India between 1st January 2022"
    + " and 23rd November 2022:");
    let methaneAverageDataIndia = config.getMethaneAverageIndia()
                                    .subscribe(data => console.log(data));
    console.log("Methane average emissions data for Bhutan between 1st January 2022"
                                    + " and 23rd November 2022:");
    let methaneAverageDataBhutan = config.getMethaneAverageEgypt()
                                    .subscribe(data => console.log(data));
  */
  }

  /* Part of a future commit: 
  Unfinished Code to place the selected gas from the 'Select Gas' mat-select 
    form control in the place of 'product' in the following emissions API:
    https://api.v2.emissions-api.org/api/v2/{product}/average.json :
  */
  query(selectedGas : string){
    let gasAverageDataIndia = this.config.getGasAverageIndia(this.value)
                                    .subscribe(data => console.log(data));
  }
  ngOnInit(){
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