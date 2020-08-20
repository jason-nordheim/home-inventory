# About this Repo

Project Name: **Sorted**

- Developed by: [Jason Nordheim](https://github.com/jason-nordheim/home-inventory.git)
- Produced as capstone project for the Flatiron School Bootcamp
- Technologies used:
  - JavaScript:
    - React JS (JSX)
    - Node JS
    - Express JS
    - Knex JS
    - React Material UI
  - CSS/JSS
  - Authentication
    - Bcrypt
    - JsonWebToken
  - Database
    - Postgres

This project is a full-stack web application.

The front-end of this application is in the `./web-ui/` directory
The back-end of this application is in the `./API/` directory

# Quick Start

## Installation

Before running the application, you will need to ensure all the dependent packages are installed and a local database is setup to process the requests from the application front-end.

### Prerequisites

In order to run the back-end, you must have postgres installed on your system. If you need to install Postgres on your system, please follow the guide available [here](https://www.postgresql.org/docs/9.3/tutorial-install.html) or via a package manager like [brew](https://brew.sh/).

### Cloning/downloading the repo

1. Navigate (via the command line) to the directory (folder) that you would like to download the application.
2. Clone the repository to that directory using: `git clone https://github.com/jason-nordheim/home-inventory.git`
   - this will download all the required project files into the current directory and place them in a folder/directory called 'home-inventory'

### Setting up the back-end (Node/Express/Knex)

1. From the project's root directory (`home-inventory`), navigate (via the command line) to the "API" directory at `~/home-inventory/API/`
2. From the root of the API project directory, run `npm install` to install the dependent packages via NPM.
3. Create the database to be used by the API server. Assuming Postgres is install on your system; run the command `createdb sorted`
   - You _could_ change the database name, but you would have to change the corresponding configuration settings within `~/home-inventory/API/knexfile.js`
4. Run the database migration: `npx knex migrate:latest` (via command line, from API root: `~/home-inventory/API/` )
5. Run the start command: `npm start` (via command line, from API root: `~/home-inventory/API/` )
   - If the terminal window should says `Server running on port 4000...` then congradulations, you have the API setup and running

### Setting up the front-end

1. From the project's root directory (`home-inventory`), navigate (via the command line) to "web-ui" directory at `~/home-inventory/web-ui/`
2. Run `npm install` from the `~/home-inventory/web-ui/` directory to install the dependent node packages.
3. Run `npm start` to run the application, by default the `web-ui` will run on port `3000` and automatically open your default browser upon executing the `npm start` command

# A Deeper Dive

## Application Desciption

**Sorted** is a home-inventoring application designed to help people better manage all the _stuff_ that they have:

Why might people have trouble managing all the _stuff_ they have?

- We live in a busy world and there are numerous things to remember at any given time, why take up memory and energy remembering where details about all your various belongings when there's an application designed to do it for you?
- Most of us have stuff we no longer "want", "need", or "use", taking an inventory of that can help to understand the scope of the possessions we have and what we may no longer need.
- Some items are extremely valuable to us, either in terms of their monetary value, or in terms of sentimental value. Inventorying items with **Sorted** can help identify gaps in insurance coverage.
- Most of the time, things don't break on day 1 (purchase date), we may need information ( like purchase date, serial number, model number) or other information down the road, **Sorted** offers a centralized loction to store it.

## API Endpoints

For full details of the API endpoints, see the API `README`. For sake of simplicity routes are specified in JSON format below:

```json
[
    {
        "endpoint": "/users",
        "table_name": "user", 
        "methods" : {
            "GET": {
                "description": "returns a list of registered users",
                "authentication": null, 
                "content-type": "application/json",
                "request_arguments": null 
            }, 
            "POST": {
                "description" :"creates a new user",
                "authentication": null, 
                "content-type": "application/json",
                "request_arguments": [
                    {"field": "name", "type": "string", "description": "legal name of user" },
                    {
                        "field": "username", 
                        "type": "string", 
                        "required": true, 
                        "description" : "user-defined login identifier" 
                    },
                    {
                        "field": "password", 
                        "type": "string", 
                        "required": true, 
                        "description": "user-defined field that will be hashed and compared at login to verify identity"
                    },
                    {
                        "field": "phone", 
                        "type": "string", 
                        "required": false, 
                        "description": "user-defined field contact phone number" 
                    },
                    { 
                        "field": "email", 
                        "type": "string", 
                        "required": false, 
                        "description": "user-defined contact email address"
                    },
                    {
                        "field": "bio", 
                        "type": "text", 
                        "required": false, 
                        "description": "user-defined biographical information"
                    },

                ], 
                
        }
    },
    {
        "endpoint": "/address", 
        "table_name": "address", 
        "methods": {
            "GET": {
                "desciption": "retrieves all the addresses associated with the an authenticated user", 
                "content-type": "application/json",
                "authentication": "bearer token", 
                "request_arguments": null 
            }, 
            "POST": {
                "description": "creates a new address record to be associated with the user-token passed as part of the request", 
                "authentication": "bearer token", 
                "content-type": "application/json",
                "request_arguments": [
                    {
                        "field":"name", 
                        "type": "string", 
                        "required": true,
                        "description": "the user-defined name of the address to be created" 
                    }, 
                    {
                        "field":"street1", 
                        "type": "string", 
                        "required": true,
                        "description": "the first line of the 'mailing address' for the address" 
                    }, 
                    {
                        "field":"street2", 
                        "type": "string", 
                        "required": false,
                        "description": "the second line of the 'mailing address' for the address" 
                    }, 
                    {
                        "field":"city", 
                        "type": "string", 
                        "required": true,
                        "description": "the mailing address city name" 
                    },
                    {
                        "field":"state", 
                        "type": "string", 
                        "required": true,
                        "description": "the state code (mailing address state)" 
                    },
                    {
                        "field":"zip", 
                        "type": "string", 
                        "required": false,
                        "description": "the postal code for the address" 
                    },
                ] 
            }
        }
    },
     {
        "endpoint": "/vendors", 
        "table_name": "vendor", 
        "methods": {
            "GET": {
                "desciption": "returns all the vendors associated with the provided bearer token ", 
                "authentication": "bearer token", 
                "content-type": "application/json",
                "request_arguments": null 
            }, 
            "POST": {
                "description": "creates a new vendor object", 
                "authentication": "bearer token", 
                "content-type": "application/json",
                "request_arguments": [
                    {
                        "field":"name", 
                        "type": "string", 
                        "required": true,
                        "description": "user defined name of the vendor" 
                    }, 
                    {
                        "field":"phone", 
                        "type": "string", 
                        "required": false,
                        "description": "user-defined contact phone number for the vendor" 
                    }, 
                    {
                        "field":"email", 
                        "type": "string", 
                        "required": false,
                        "description": "user-defined contact email address of the vendor" 
                    }, 
                    {
                        "field":"notes", 
                        "type": "text", 
                        "required": false,
                        "description": "user-defined notes about the vendor" 
                    }
                ] 
            }
        }
    },
      {
        "endpoint": "/login", 
        "table_name": "user", 
        "methods": {
            "GET": {
                "desciption": "returns the user information associated with the current user", 
                "authentication": "bearer token", 
                "content-type": "application/json",
                "request_arguments": null, 
            }, 
            "POST": {
                "description": "creates a token that can be used to identify and authenticate a user after validating that the provided username and password are correct", 
                "authentication": "bearer token", 
                "content-type": "application/json",
                "request_arguments": [
                     {
                        "field":"username", 
                        "type": "string", 
                        "required": true,
                        "description": "unique login name of the user" 
                    }, 
                     {
                        "field":"password", 
                        "type": "string", 
                        "required": true,
                        "description": "user-defined password to verify identity" 
                    }
                ] 
            }
        }
    },
    {
        "endpoint": "/locations", 
        "table_name": "location", 
        "methods": {
            "GET": {
                "desciption": "returns all the locations associated with the bearer token provided", 
                "authentication": "bearer token", 
                "content-type": "application/json",
                "request_arguments": null 
            }, 
            "POST": {
                "description": "creates a new location record for the user associated with the bearer token provided", 
                "authentication": "bearer token", 
                "content-type": "application/json",
                "request_arguments": [
                    {
                        "field":"name", 
                        "type": "string", 
                        "required": true,
                        "description": "user-defined location name" 
                    },
                    {
                        "field":"type", 
                        "type": "string", 
                        "required": true,
                        "description": "user-defined location type (apartment/condo/etc)" 
                    },
                    {
                        "field":"address_id", 
                        "type": "integer", 
                        "required": true,
                        "description": "address to be associated with the user-defined location" 
                    }
                ] 
            }
        }
    }, 
     {
        "endpoint": "/items", 
        "table_name": "item", 
        "methods": {
            "GET": {
                "desciption": "gets all the items associated with the current user", 
                "authentication": "bearer token", 
                "content-type": "application/json",
                "request_arguments": null 
            }, 
            "POST": {
                "description": "", 
                "authentication": "bearer token", 
                "content-type": "application/json",
                "request_arguments": [
                    {
                        "field":"name", 
                        "type": "string", 
                        "required": true,
                        "description": "user-defined name for the item" 
                    }, 
                    {
                        "field":"est_value",
                        "type": "decimal", 
                        "required": false,
                        "description": "user-defined estimated value for the item" 
                    },
                    {
                        "field":"acc_value",
                        "type": "decimal", 
                        "required": false,
                        "description": "actual value of the item" 
                    }, 
                    {
                        "field":"est_value",
                        "type": "decimal", 
                        "required": false,
                        "description": "user-defined estimated value for the item" 
                    },    
                    {
                        "field":"category",
                        "type": "string", 
                        "required": false,
                        "description": "user-defined category to be associated with the item" 
                    }, 
                    {
                        "field":"make",
                        "type": "string", 
                        "required": false,
                        "description": "user-defined manufacturer or make of the item" 
                    },    
                    {
                        "field":"purchase_date",
                        "type": "date", 
                        "required": false,
                        "description": "date of item purchase" 
                    }, 
                    {
                        "field":"selling",
                        "type": "boolean", 
                        "required": false,
                        "description": "flag to indicate if the item is for sale" 
                    }, 
                    {
                        "field":"location_id",
                        "type": "integer", 
                        "required": true,
                        "description": "the current location of the item" 
                    }}
                ] 
            }
        }
    }
]

```
 name, est_value, acc_value, category, make, model, purchase_date, selling, location_id 