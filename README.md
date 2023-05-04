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
1. The Laravel app should use the api.php route to route requests coming from external apps including the app used for front-end instead of using the web.php route. This has been implemented.
2. All the services of the app should request the main service of the app to communicate with external APIs i.e. no service other than the main service should be allowed to communicate with external APIs.I generated a 'main' service and made changes in the 'db' service to communicate with the main service. The main service then communicates with the back-end laravel app.

## Things in mind for future commits:
---
1. Using Angular Reactive forms instead of directly using the mat-form-field tag. This process has been started.
2. Begin querying. Show the response on the page for now.
Enable real-time querying i.e. as soon as a form control's value is changed, a corresponding query should be sent and the response should be displayed on the screen.
3. Find a good Angular graph library and begin incorporating it in the project.