/*
  This service is supposed to perform CRUD operations whenever necessary
    on data stored in a local database named "emissions".
 */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  backEndUrl : string = 'http://localhost:8000/';
  private averageApiUrlPartOne : string = "https://api.v2.emissions-api.org/api/v2/";
  private product : string = "methane";
  private country : string = "India";
  private begin : string = "2019-02-10";
  private end : string = "2019-02-11";
  private limit : number = 5;
  private offset : number = 0;
  private averageApiUrlPartThree : string = "/average.json"
  /* Since the laravel application needed for this Angular application
      has been run on port 8000.*/

  constructor(private http: HttpClient) { }
  
  //Getter for averageApiUrlPartOne:
  getAverageApiUrlPartOne(){
    return this.averageApiUrlPartOne;
  }

  //Getter for averageApiUrlPartThree:
  getAverageApiUrlPartThree(){
    return this.averageApiUrlPartThree;
  }
  
  generateQuery(){

  }

  getData(uniqueSubUrl: string){
    /* The values to be passed to this uniqueSubUrl parameter have been
      defined in the 'web.php' file under routes of the back-end
      laravel application. */
    return this.http.get(this.backEndUrl + uniqueSubUrl);
 }


}
