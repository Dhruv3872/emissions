import { NgModule, LOCALE_ID /*To use local time
 =in the formatDate method in the 'generateQuery' method of
the 'db' service.*/ } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

//Services:
import { DbService } from './db.service';
import { MainService } from './main.service';

//Angular-material:
import { MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
//forms:
import {ReactiveFormsModule} from '@angular/forms';
import { SelectGasComponent } from './select-gas/select-gas.component';
// import { SelectCountryComponent } from './select-country/select-country.component';
// import { StartDateComponent } from './start-date/start-date.component';
import { SelectParametersComponent } from './select-parameters/select-parameters.component';
// import { EndDateComponent } from './end-date/end-date.component';
import { GraphComponent } from './graph/graph.component';
import { DatePipe } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,// For making an API call to the emissions API. 
    AppRoutingModule,
    MatSelectModule,
    BrowserAnimationsModule, // Necessary to render mat-select form control properly.
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [ 
    AppComponent, 
    SelectParametersComponent,
    GraphComponent
  ],
  providers: [
    DbService,
    MainService,
    DatePipe,
    GraphComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }