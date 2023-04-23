import { FormControl } from '@angular/forms';
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

  constructor() {
    /*
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
  /*sendValues(){
    let chosenValues : Object = {
      chosenGas: this.selectedGas, chosenCountry: this.selectedCountry,
        chosenStartDate: this.startDate.value.getDate(),
        chosenStartMonth: this.startDate.value.getMonth(), /* getMonth() method returns a value
          between 0 & 11 (both values included) corresponding to The month cycle JAN to DEC i.e.
          for January, it will return 0, and for December, it will return 11. */
       /* chosenStartYear: this.startDate.value.getFullYear(),
        chosenEndDate: this.endDate.value.getDate(),
      chosenEndMonth : this.endDate.value.getMonth(),
      chosenEndYear : this.endDate.value.getFullYear()
    };
    console.log(chosenValues); */
        // console.log(typeof(this.endDate.value));
    /* let gasQueryParameter = "";
    let x = this.db.getData('gases').subscribe(
      data => {
        return gasQueryParameter = this.db.getGasQueryParameter(data, this.selectedGas);
      }
    );
    console.log(gasQueryParameter); */
    //let gasQueryString = String(gasQueryParameter);
    //console.log(gasQueryString);
    // console.log(this.value);
    /* Commenting temporarily until we are able to place the value of the chosen gas 
    correctly as the argument of getGasAverageIndia method. */
    //let gasAverageDataIndia = this.config.getGasAverageIndia(gasQueryString)
      //                              .subscribe(data => console.log(data));
    // console.log(gasAverageDataIndia);
    
  ngOnInit(){
  }
}
