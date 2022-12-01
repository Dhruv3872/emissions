/* Part of a future commit: 
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
  backEndUrl = 'http://localhost:8000/';
  /* Since the laravel application needed for this Angular application
      has been run on port 8000.*/

  constructor(private http: HttpClient) { }

  getData(uniqueSubUrl: string){
    /* The values to be passed to this uniqueSubUrl parameter have been
      defined in the 'web.php' file under routes of the back-end
      laravel application. */
    return this.http.get(this.backEndUrl + uniqueSubUrl);
 }

}
