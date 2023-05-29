import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
//services:
import { MainService } from '../main.service';
import { DbService } from './../db.service';
import { SharedService } from '../shared.service';
//interfaces:
import { Average } from '../main.service';

//components:
import { GraphComponent } from '../graph/graph.component';

import { formatDate } from '@angular/common';

@Component({
  selector: 'app-select-parameters',
  templateUrl: './select-parameters.component.html',
  styleUrls: ['./select-parameters.component.css']
})
export class SelectParametersComponent implements OnInit {
  parameterForm= new FormGroup({
    gas: new FormControl('Methane'),
    country: new FormControl('India'),
    startDate: new FormControl(new Date(2023,0,1)),
    endDate: new FormControl(new Date(2023,4,1))
  });
  gases : string[] = [];
  countries : string[] = [];
  averageObjects: void | undefined;
  //Response received from the Emissions API via back-end will be stored in this variable:
  response: string = "";

  constructor(@Inject(LOCALE_ID) public locale: string, private datePipe: DatePipe,
  private main: MainService, private dbService: DbService, 
  private sharedService: SharedService)
   {
    // this.averageObjects;
    // this.averageObjects;
    // averageObjects: Average[] = [];
   }
  ngOnInit(){
    this.main.getData('gases').subscribe(data => {
      this.main.getGasArray(data, this.gases);
    });
    this.main.getData('countries').subscribe(data => {
      this.main.getCountryArray(data, this.countries);
    });
    console.log(this.parameterForm.controls['startDate'].value);
    const selectedStartDate = this.parameterForm.controls['startDate'].value?.toDateString();
    /*console.log(formatDate(selectedStartDate,
    'yyyy-MM-dd', this.locale)); */
    console.log(this.datePipe.transform(this.parameterForm.controls['startDate'].value,
    'yyyy-MM-dd', this.locale));
    // Sun Mar 05 2023 00:00:00 GMT-0500 (Eastern Standard Time)
    // this.parameterForm.controls['startDate'].value
  }

  onSubmit(){
    console.log(this.parameterForm);
    this.main.sendFormValuesToBackEnd(this.parameterForm)
    .subscribe(data => {
      this.response = JSON.stringify(data);
      console.log(this.response);
      this.sharedService.saveResponse(this.response);
    });
    // .subscribe(data => {
      // console.log(data);})
      // ;
  }
      // TODO: Use EventEmitter with form value
      /*console.warn(this.parameterForm.value);
      console.log(this.main.queryToEmissionsAPI(this.parameterForm.value).subscribe(
        (averageObjects) =>{
          this.averageObjects = averageObjects;
        }));*/
       /* this.main.getData('emissions').subscribe(data => 
          console.log(data)); */
      // console.log(this.http.get("https://api.v2.emissions-api.org/api/v2/methane/average.json?country=IND&begin=2023-01-01&end=2023-01-05"));
    // }
  // onSubmit(value: Partial<{
  //   gas: string|null,
  //   country: string|null,
  //   startDate: Date|null,
  //   endDate: Date|null
  // }>){
  //   console.log(value);
  // }
  }