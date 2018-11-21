# node-react-googlemap

## Available Scripts

In the client and server project directory, you can run:

### `npm install`

Install the necessary packages.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view client side in the browser. To make requests to server, you can use [http://localhost:4000](http://localhost:4000) 

### `npm test`

Launches the test runner in the interactive watch mode.<br>


##   Features:

- Adding marker with  clicking on  google map
- Removing marker with  clicking from google map
- Adding marker with text box to google map
- Removing marker with button from google map


##   Design Specifications :

### Server Side Specifications

In server side, Rest API has been written. Also, in that API, layered architecture pattern is used. In Middleware layer, validate( to validate input requests) access(to make requests in same origin), log( to log incoming requests) middlewares have been <br> written. In route layer, routes and controllers of specified routes are assessed. In business layer, requests to google map API <br> according to request type are implemented. In Data layer, some input modals are created for validation. <br>

### Server Side Specifications

In client side, React - Redux frameworks are used. Generally, project is formed in components. Components that does not use react state or redux state are speficied presentational component and holded in components folder. Components that connect to redux state or use react state are specified as Connected Component and placed in containers folder.  According to these, project is split to four containers which are MapContainer that includes GoogleMap and Marker components, LocationListContainer that includes LocationList and LocationItem components, ErrorContainer that includes Error component, Loader component that includes spinner component,  AddLocationContainer that includes AddLocationModal, some Input and Modal components. These containers are designed for not to render all components in every state changes. Beside them, redux action creators are stated in actions folder and reducers are in reducers folder. In project,  render prop, styled components and prop getters advanced patterns are used. 
	
##   Dependencies:

- expressjs - The server for handling and routing HTTP requests
- express-validation - to validate post requests
- joi - to write validation rules 
- body-parser - to parse json requests
- babel * - to use es6 in node.js 
- mocha, expect, supertest: packages that are used to write server test cases                      

##   Application Structure:

- server/ - server side is contained in that folder
- server/index.js -  this file defines our express server and  requires the routes we'll be using in the application. The entry point to our - application.
- server/config/ -  configuration variables for our server are contained in this folder
- server/routes/ -  the route definitions for our API are contained in this folder
- server/middleware/ - Middlewares that handle requests with data and validation rules for our request are contained in this folder
- server/data/ -  the schema definitions for our postgres models are contained in this folder
- server/data/ -  the schema definitions for our postgres models are contained in this folder
- client/business - web client with reactjs framework is contained in this folder
- client/ - web client with reactjs framework is contained in this folder
- client/actions - redux action creators
- client/reducers - redux reducers
- client/components - react components
- client/containers - react redux connected components

##   API


### Get address  [GET] [/api/address?lat={lat}&lng={lng}]

+ Response 200 (application/json)
        
            [
                {
                    "id": 1,
                    "lat": "lat1",
					"lng": "lng1",
					"address": "address1"
                },
                ...
            ]

### Get geocode  [GET] [/api/geocode?address={address}]

+ Response 200 (application/json)
        
            [
                {
                    "id": 1,
                    "lat": "lat1",
					"lng": "lng1",
					"address": "address1"
                },
                ...
            ]


## Error Messages

+ Response 400 (application/json)
        
            {
                "message": "Validation error",
            }

+ Response 404 (application/json)
        
            {
                "message": "Error occured",
            }

+ Response 404 Bad Request
