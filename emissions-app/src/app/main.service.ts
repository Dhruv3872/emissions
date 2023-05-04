import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DbService } from './db.service';
@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient, private db: DbService) { }

  getData(url: string){
    return this.http.get(this.db.getUrl(url));
    // return this.http.get(url);
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
