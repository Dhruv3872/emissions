/*
  This service is supposed to perform CRUD operations whenever necessary
    on data stored in a local database named "emissions".
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  backEndUrl : string = 'http://localhost:8000/api/';
    /* Since the laravel application needed for this Angular application
      has been run on port 8000.*/
  // backEndUrl : string = 'localhost:8000/';
  private averageApiUrlPartOne : string = "https://api.v2.emissions-api.org/api/v2/";
  private product : string = "methane";
  private country : string = "India";
  private begin : string = "2019-02-10";
  private end : string = "2019-02-11";
  private limit : number = 5;
  private offset : number = 0;
  private averageApiUrlPartThree : string = "/average.json"

  constructor(private http: HttpClient) { }
  
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

}

