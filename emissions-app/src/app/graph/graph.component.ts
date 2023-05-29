import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
//services:
import { DbService } from '../db.service';
import { MainService } from '../main.service';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit, OnChanges{
  chosenGas : string | null= "";
  chosenCountry : string | null = "";
  chosenStartDate : Date = new Date();
  chosenEndDate : Date = new Date();
  response : string = "";
  constructor(public dbService : DbService, private main : MainService,
    private sharedService: SharedService) { 
  }

  ngOnInit(): void {
    /*if(this.dbService.getGas() != this.chosenGas){
      console.log("Inside if in ngOnIniit of the graph component!");
      this.chosenGas = this.dbService.getGas();*/
      // this.main.getData('emissions').subscribe();
      console.log("Response: " + this.response);
      this.sharedService.submitClickedEvent.subscribe((data: string) =>
      this.response = data);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.response = this.main.getResponse();
  }
  getValues(){
    // console.log(this.dbService.getGas());
    // this.chosenGas = this.dbService.getGas();
    // this.chosenCountry = this.dbService.getCountry();
    // this.chosenStartDate = this.dbService.getStartDate();
    // this.chosenEndDate = this.dbService.getEndDate();
  }
  getResponse(){
    return this.response;
  }
  setResponse(){
    this.response = this.sharedService.getResponse();
  }
}
