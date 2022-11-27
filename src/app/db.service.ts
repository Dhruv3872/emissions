/* Part of a future commit: 
  This service is supposed to perform CRUD operations whenever necessary
    on data stored in a local database named "emissions".
 */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private http: HttpClient) { }

  getCountries(){
    return this.http.get('http://localhost:3306/emissions/countries[0]');
    //http:// localhost:44376/countries[0]
    //http:// localhost:44376/countries
    //http:// localhost:44376
    //http:// localhost
  }
}
