# Emissions App

App to show a graph containing the average emission levels of one of the following gases over the chosen period of time : 
1. Methane
2. Carbon monoxide
3. Ozone
4. Nitrogen dioxide

## API reference:
---
1. [website](https://emissions-api.org/)
2. [API documentation](https://api.v2.emissions-api.org/ui/)

## Desired Features:
---
1. Choose the gas for which you want to see the emissions data
    from the drop-down menu.
2. Add/remove countries one by one into/from the line graph.
3. Compare emission levels among the countries added to the graph. 
    Each country's emissions data will be shown by a unique coloured line.
4. Change the starting date and end date according to your interest.

## Changes since the last commit:
---
1. In the App component template: Added 'start date' and 'end date'
    date-picker Angular material components.  
2. In app.component.ts: Created 'getCountryArray' and 'getGasArray'
    methods to obtain a list of countries from the 'countries'
    table and a list of gases from the 'gases' table respectively
    in the form of array. Entire table contents of 'countries' and 'gases' tables are passed to these methods respectively, and in order to do that, I have created a separate laravel application and connected API endpoints with this application. That laravel application will be merged with this project repository in the next commit.

## Purpose of the commit:
---
To fill the 'Select Country' and 'Select Gas' mat-select form controls with the relevant values
    from the 'countries' and 'gases' tables of the 'emissions' database respectively.  
In order to achieve this, we have used a laravel application as our back end app.