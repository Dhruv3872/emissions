/*
  This service is supposed to perform CRUD operations whenever necessary
    on data stored in a local database named "emissions".
 */
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';

//Services:
// import { MainService } from './main.service';
// import { SelectGasComponent } from './select-gas/select-gas.component';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  backEndUrl : string = 'http://localhost:8000/api/';
    /* Since the laravel application needed for this Angular application
      has been run on port 8000.*/
  // backEndUrl : string = 'localhost:8000/';
  private averageApiUrlPartOne : string = "https://api.v2.emissions-api.org/api/v2/";
  private gas : string | null = "";
  private country : string | null = "";
  private begin : Date = new Date();
  private end : Date = new Date();
  private limit : number = 5;
  private offset : number = 0;
  private averageApiUrlPartThree : string = "/average.json"

  constructor(@Inject(LOCALE_ID) public locale: string, private datePipe: DatePipe,
    private http: HttpClient)//, private selectGasComponent: SelectGasComponent
  {
    console.log(this.getGas());
    // this.getValues();
  }
  
  //Getter for averageApiUrlPartOne:
  getAverageApiUrlPartOne(){
    return this.averageApiUrlPartOne;
  }

  //Getter for averageApiUrlPartThree:
  getAverageApiUrlPartThree(){
    return this.averageApiUrlPartThree;
  }

  //The method which will be fed to 'getData' method of the main service:
  getUrl(uniqueSubUrl: string){
    /* The values to be passed to this uniqueSubUrl parameter have been
      defined in the 'web.php' file under routes of the back-end
      laravel application. */
      let completeUrl : string = this.backEndUrl + uniqueSubUrl;
      // console.log(completeUrl);
      return completeUrl;
 }

   /* Function to get 'query_parameter' from the 'gases' table where the
    name of the gas is provided as a parameter of the function: */ 
    getGasQueryParameter(object : Object, gasName: String){
      // console.log(gasName);
      let queryParameter : string = "defaultValueOfQueryParameter";
      for(let i = 0; i<Object.keys(object).length; i++){
        // console.log("Gas Name: " + gasName);
        // console.log(Object.values(object)[i].query_parameter);
        if(Object.values(object)[i].Name == gasName){
          queryParameter=  Object.values(object)[i].query_parameter;
          break;
        }
      }
      console.log(queryParameter);
      return queryParameter;
      //console.log(queryParameter);
      /*{
          for(let i = 0; i < data.keys(object).length; i++){)
        } */
        //);
        //return queryParameter;
  }

//getters:
  getGas(){
    return this.gas;
  }
  getCountry(){
    return this.country;
  }
  getStartDate(){
    return this.begin;
  }
  getEndDate(){
    return this.end;
  }

  getData(gases: string){

  }
//setters:
  setGas(gas: string | null){
    this.gas = gas;
  }
  setCountry(country: string | null){
    this.country = country;
  }
  setStartDate(date: Date){
    this.begin = date;
  }
  setEndDate(date: Date){
    this.begin = date;
  }

  parseFormValues(formGroup: FormGroup){
    const selectedGas : string = formGroup.controls['gas'].value;
    const selectedCountry : string = formGroup.controls['country'].value;
    const selectedStartDate : string | null = this.datePipe.transform(formGroup.controls['startDate'].value,
    'yyyy-MM-dd', this.locale);
    const selectedEndDate : string | null = this.datePipe.transform(formGroup.controls['endDate'].value,
    'yyyy-MM-dd', this.locale);
    const formValues : FormValues = {
      gasName: selectedGas,
      countryName: selectedCountry,
      startDate: selectedStartDate,
      endDate: selectedEndDate
    }
    console.log(formValues);
    return formValues;
    // return JSON.stringify(formValues);
    // return JSON.parse(formValues);
    /*let queryGas : string = "";
    let queryCountry : string = "";
    this.http.get<GasTable>(this.getUrl('gases')).subscribe(
      response => {
        const stringResponse = JSON.stringify(response);
        console.log(stringResponse);
        const jsonResponse = JSON.parse(stringResponse);
        console.log(jsonResponse);
        for(let entry of jsonResponse){
          console.log(entry['Name']);
          if(entry['Name'] === selectedGas){
            let gasParameter = entry['query_parameter'];
            console.log("query parameter for gas field: " + gasParameter);
            this.setGas(gasParameter);
            console.log(this.gas);
            // console.log(queryGas);
            break;
          }
        }
      }
    );
    console.log(this.gas);
    /*this.http.get<GasTable>(this.getUrl('gases')).pipe(
      map((x: GasTable) => console.log(x.Name))
    ); 
    console.log(res); */
    // .pipe(

    // );
    // console.log(res);
    /*.subscribe(
      response => {
        console.log(response);
      });
        const stringResponse = JSON.stringify(res  );
        console.log(stringResponse);
        const jsonResponse = JSON.parse(stringResponse);
        console.log(jsonResponse);
        for(let entry of jsonResponse){
          console.log(entry['Name']);
          if(entry['Name'] === selectedGas){
            let gasParameter = entry['query_parameter'];
            console.log("query parameter for gas field: " + gasParameter);
            queryGas = gasParameter;
            console.log(queryGas);
            break;
          }
        }
        // return queryGas;
      // }
    // );
    console.log(queryGas);
    // console.log(JSON.stringify(queryGas));
    console.log(queryGas.toString());
    this.http.get(this.getUrl('countries')).subscribe(
      response => {
        const stringResponse = JSON.stringify(response);
        // console.log(stringResponse);
        const jsonResponse = JSON.parse(stringResponse);
        // console.log(jsonResponse);
        for(let entry of jsonResponse){
          // console.log(entry['country_name']);
          if(entry['country_name'] === selectedCounty){
            queryCountry = entry['country_code'];
            console.log("query parameter for country field: " + queryCountry);
            break;
          }
        }
      }
    );
    console.log(queryGas);
    // console.log(gasForQuery); 
    console.log(this.averageApiUrlPartOne + queryGas +
    this.averageApiUrlPartThree + 
      "?country=" + queryCountry +
      "&begin=" + this.datePipe.transform(formGroup.controls['startDate'].value,
      'yyyy-MM-dd', this.locale) + 
      "&end=" + this.datePipe.transform(formGroup.controls['endDate'].value,
      'yyyy-MM-dd', this.locale));
      console.log("https://api.v2.emissions-api.org/api/v2/methane/average.json?country=IND&begin=2023-01-01&end=2023-01-05");
      return "https://api.v2.emissions-api.org/api/v2/methane/average.json?country=IND&begin=2023-01-01&end=2023-01-05";
    */}
}
export interface GasTable{
  SerialNo : string;
  Name : string;
  query_parameter : string;
}
export interface FormValues{
  gasName: string;
  countryName: string;
  startDate: string | null;
  endDate: string | null;
}