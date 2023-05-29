import { Injectable, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  //Response received from Emissions API via application backend will be saved in this variable:
  private response : string = "";
  chosenGas : string | null= "";
  chosencountry : string | null = "";
  chosenStartDate : Date = new Date();
  chosenEndDate : Date = new Date();
  // response: Array<string> = {"gas": this.chosenGas,
  // }
   /*'submitClickedEvent' Event emitter to emit an event whenever 'submit' button of the 
    'select parameter' component is clicked: */ 
  @Output() submitClickedEvent = new EventEmitter<string>();
  constructor() { }
  getGas(){
    return this.chosenGas;
  }
  getCountry(){
    return this.chosencountry;
  }
  getStartDate(){
    return this.chosenStartDate;
  }
  getEndDate(){
    return this.chosenEndDate;
  }
  getResponse(){
    return this.response;
  }
  setGas(gas: string | null){
    this.chosenGas = gas;
  }
  setCountry(country: string | null){
    this.chosencountry = country;
  }
  setStartDate(date: Date){
    this.chosenStartDate = date;
  }
  setEndDate(date: Date){
    this.chosenEndDate = date;
  }
  saveResponse(response: string){
    console.log(response);
    this.response = response;
    this.submitClickedEvent.emit(response);
  }
}
