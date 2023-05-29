/* A component to create 'Select Gas' mat-select form control.*/
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'; 
import { MatSelectModule} from '@angular/material/select';
import { MainService } from '../main.service';
// import { SharedService } from '../shared.service';
import { DbService } from '../db.service';

@Component({
  selector: 'app-select-gas',
  templateUrl: './select-gas.component.html',
  styleUrls: ['./select-gas.component.css']
})
export class SelectGasComponent implements OnInit {
  gas = new FormControl('');
  selectedGas : string = "Methane";
  // For 'Select Gas' mat-select form control: 
  gases : string[] = [];
//Entire gas table: 
  gasesTable : Array<Object> = [];
  value : string = "";
  constructor(private main: MainService, public dbService: DbService)// private sharedService: SharedService
   {
    this.gas.setValue("Methane");

    /*
      console.log(Object.keys(data).length);
    });*/
  }

  ngOnInit(){
    this.main.getData('gases').subscribe(data => {
      this.main.getGasArray(data, this.gases);
    });
    this.dbService.setGas(this.gas.value);
    this.gas.valueChanges.subscribe(() => {
      console.log("Gas value just changed!");
      this.dbService.setGas(this.dbService.getGas());
    })
  }
  
}