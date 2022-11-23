import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  //"Config" name was chosen from the tutorial I followed.

  constructor(private http: HttpClient) { }

  getCountries(){
    let countriesApiUrl = "https://api.v2.emissions-api.org/api/v2/countries.json";
    return this.returnResponse(countriesApiUrl);
  }

  /* 'getMethaneAverageIndia' and 'getMethaneAverageEgypt' are temporary methods
        to see proper integration of the API in the project.
        In the later versions, a database will be created and used to place 
        a country of the user's choice from the drop-down menu which will be 
        available on the screen. */
  getMethaneAverageIndia(){
    /*
    let methaneAverageApiUrl = "https://api.v2.emissions-api.org/api/v2/methane/average.json";
    This returned 1364 results at 21:26 IST on 21/11/2022. */
    let methaneAverageApiUrl = "https://api.v2.emissions-api.org/api/v2/methane/average.json"
    + "?country=IND" + "&begin=2022-01-01" + "&end=2022-11-23";
    return this.returnResponse(methaneAverageApiUrl);
  }

  getMethaneAverageEgypt(){
    let methaneAverageApiUrl = "https://api.v2.emissions-api.org/api/v2/methane/average.json"
    + "?country=EG" + "&begin=2022-01-01" + "&end=2022-11-23";
    return this.returnResponse(methaneAverageApiUrl);
  }

  returnResponse(apiUrl: string){
    //This method was created to avoid code repeatition.
    return this.http.get(apiUrl);
  }
}