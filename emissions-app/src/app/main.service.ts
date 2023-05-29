import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DbService } from './db.service';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient, private db: DbService) //
  { }

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

  sendFormValuesToBackEnd(formGroup: FormGroup){
    console.log(formGroup);
    // this.db.parseFormValues(formGroup);
    console.log(this.db.getUrl('formData'));
    console.log(this.db.parseFormValues(formGroup));
    let response = this.http.post(this.db.getUrl('formData'),this.db.parseFormValues(formGroup));
    console.log(response);
    // return JSON.stringify(response);
    return response;
    // this.db.generateQuery(formGroup);
    /*this.getData('emissions').subscribe(data => 
      console.log(data)); */
    // return this.http.get(this.db.generateQuery(formValues));
  }

  //Event emitter: 
}

export interface Average{
  average: number;
  end: Date;
  start: Date;
}
export interface AverageResponse{
  averageObjects: Average[];
}
