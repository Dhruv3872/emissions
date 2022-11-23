import { Component } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emissions-app';

  constructor(private config: ConfigService) {
    let countryData = config.getCountries()
                            .subscribe(data => console.log(data));
    console.log("Methane average emissions data for India between 1st January 2022"
    + " and 23rd November 2022:");
    let methaneAverageDataIndia = config.getMethaneAverageIndia()
                                    .subscribe(data => console.log(data));
    console.log("Methane average emissions data for Bhutan between 1st January 2022"
                                    + " and 23rd November 2022:");
    let methaneAverageDataBhutan = config.getMethaneAverageEgypt()
                                    .subscribe(data => console.log(data));
  }
}
