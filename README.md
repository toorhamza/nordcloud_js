# Project 

NordCloud's assignment => Find the best power link station for a device. The data provided is user coordinates and link station coordinates. The distance was calculated using pythagoras theorem and front end was created using React. I also added the feature to add new power stations and test with new user coordinates.

## Comments
The focus while building this app was to keep it simple and understandable so it can be maintained by more than 1 developer. I avoided typing one liners and split the tasks into small parts/functions so anyone can understand it. 

## Access Deployed Version

You can access the deployed build at [http://toorhamza.com/nordcloud/](http://toorhamza.com/nordcloud/)

## Run Locally

To run this app on your local computer. Clone this repo and use the commands below.

### `npm install`

This will install all the node modules required to run the app.

### `npm start`

Starts the app in development mode. 
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.
The tests are in tests folder.

## Folder Structure

The application has a simple layout which can be easily maintained and expanded. All the source files are in "src" folder so all new files should be added there unless they need to be put in root.

## Source Layout

Components => These are the components used in React to display data. All components are in modular structure. Stylesheets and other related code and be added to component's folder.
Data -> JSON data files can be found here.
Hooks -> The logic regarding the app is in hooks. Custom hooks were created to perform different tasks.
Tests -> All the tests are in this folder.

index.js, App.js -> The main files which import all the other components and render them on screen.




