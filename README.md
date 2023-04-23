# emissions

A project built using Angular front-end and Laravel back-end.

When ready, it will do the following: 
1. Ask the user what emissions-data she wants to obtain.
2. Provide filters to enable the user to post a specific query.
3. Fetch the required data from the [Emissions API](https://api.v2.emissions-api.org/ui/).
4. Use bar charts or similar graphical tools to show the **analysis-ready** results.

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
To get the Angular side of things in order step by step:
1. To use the app component as the app component i.e. not using it as just any other component.
It should contain other components only.- check.
2. Using 'select gas' component as  form component. We will show this by default on the home page.
This means that from the last commit, the functionalities available in the app component for form
fill-up as of now needs to be shifted to this component.- check.
3. This 'select gas' component will have a service, which will request data from the app service.
This app service will in turn request data from the back-end app. This back-end app will in turn
request data from the database.- was already in place.

## Things in mind for the next commit:
1. The select-gas component should not have methods to populate the gas array or countries array etc.
The db service should take care of providing these arrays. Components are responsible for providing logic only. Make this correction.
2. The Laravel app should use the api.php route to route requests coming from external apps including the app used for front-end. Laravel app will consider the front-end too as an external app.
3. To connect the inputs received for gas, country, start date and end date from user with the query to be sent when the "Go" button is pressed and to obtain a desired response from the emissions API. 