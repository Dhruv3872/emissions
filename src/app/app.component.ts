import { DbService } from './db.service';
import { Component } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emissions-app';
  selected: string = "";
  // For 'Select Gas' mat-select form control: 
  gases = [
    'methane',
    'carbonmonoxide',
    'ozone',
    'nitrogendioxide'
  ];
  // For 'Select Country' mat-select form control:
  countries : string[] = [
    "INDIA",
    "CHINA"
  ];
  // Code for 'Select Country' mat-select form control is completed:
  x : string[]=[];
  value : string = "";
  constructor(private config: ConfigService, private db: DbService) {
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
}