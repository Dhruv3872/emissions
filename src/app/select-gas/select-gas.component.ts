/* A component initially conceived with the thought of using
  to create 'Select Gas' mat-select form control.
  This component may not be used and may be deleted in 
  future commits: */
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'; 
import { MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-select-gas',
  templateUrl: './select-gas.component.html',
  styleUrls: ['./select-gas.component.css']
})
export class SelectGasComponent implements OnInit {
  favoriteColorControl = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
