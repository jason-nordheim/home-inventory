# API Routes 

*** 
## Users 

### Lookup Users 
* Endpoint: `/users`
* Header: bearer token 
* Action: `READ` 
* HTTP Method: `GET` 
* Arguments: 
  * Not Applicable 
* HTTP Body: 
  * Not applicable 
* HTTP Response: 
  * Success (HTTP Status Code: 200): 
  ```json 
  {
    "users": [] 
  }
  ```
  * Bad Request (HTTP Status Code: 400): 
  ```json
  {
    "error": "message explaining what went wrong"
  }
  ```


*** 
### Register 
* Endpoint: `/users`
* Action: `CREATE` 
* Header: NA 
* HTTP Method: `POST` 
* Arguments: 
  * `first` - user's first name 
  * `last` - user's last name 
  * `email` - user's contact email address 
  * `username` - user's public screen name (and login name) 
  * `password` - string to verify user identity at login 
  * `bio` - short public description of the user 
* HTTP Body: 
  ```json 
  {
    "first": "John", 
    "last": "Doe", 
    "username": "jonny", 
    "password": "S3cr3t", 
    "email": "john.doe@gmail.com", 
    "bio": "A farmer from rural Georgia"
  }
  ```
* HTTP Response: 
  * Success (HTTP Status Code: 200): 
  ```json 
  {
    "id": 1234
    "first": "John", 
    "last": "Doe", 
    "username": "jonny", 
    "password_digest": "jKMGKLnoZX5/sHPK3wAooKI0Ngr2j2", 
    "email": "john.doe@gmail.com", 
    "bio": "A farmer from rural Georgia", 
    "created_at": "2020-07-20T22:46:44.047Z", 
    "updated_at": "2020-07-20T22:46:44.047Z" 
  }
  ```
  * Bad Request (HTTP Status Code: 400): 
  ```json
  {
    "err": "message explaining what went wrong"
  }
  ```

*** 
### Get Token 
* Endpoint: `/token` 
* Action: `CREATE` 
* Header: NA 
* HTTP Method: `POST` 
* Arguments: 
  * `username` - user's public screen name (and login name) 
  * `password` - string to verify user identity at login 
* HTTP Body: 
  ```json 
  {
    "username": "jonny", 
    "password": "S3cr3t", 
  }
  ```
* HTTP Response: 
  * Success (HTTP Status Code: 200): 
  ```json 
  {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiY3JlYXRlZF9hdCI6IjIwMjAtMDctMjdUMjE6MDQ6MDAuMTE5WiIsInVwZGF0ZWRfYXQiOiIyMDIwLTA3LTI3VDIxOjA0OjAwLjExOVoiLCJlbWFpbCI6ImpvaG4uZG9lQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiam9ubnkiLCJwYXNzd29yZF9kaWdlc3QiOiIkMmIkMTIkNFVjakhKNUxoYkFxOVhlZUYwcnlIT2J2QjNRWG5ULmxlMHdaQlRCV1dFZWJTbElUOUZReXEiLCJmaXJzdCI6IkpvaG4iLCJsYXN0IjoiRG9lIiwiYmlvIjoiQSBmYXJtZXIgZnJvbSBydXJhbCBHZW9yZ2lhIiwiaWF0IjoxNTk1ODg1NjU3fQ.S0ty_1eEeP7QYSpVgt4fEusfWOYmQf-ycaEoe8ohQxE"
  }
  ```
  * Bad Request (HTTP Status Code: 400): 
  ```json
  {
    "er": "message explaining what went wrong"
  }
  ```

*** 
## Locations 

### Create Location 
* Endpoint: `/locations`
* Action: `CREATE` 
* Header: bearer token **required** 
* HTTP Method: `POST` 
* Arguments: 
  * `name` - user-defined name of location 
  * `street1` - first line of street address of location 
  * `street2` - second line of street address of location  
  * `city` - city of the location 
  * `state` - state of the location 
  * `zip` - zip code associated with the address 
  * `type` - defines the type of location (e.g. `house`, `apartment`, `storage`)
* HTTP Body: 
  ```json 
  {
    "name": "Home", 
    "street1": "674 Old Townie Way", 
    "street2": null, 
    "city": "Denver", 
    "state": "CO", 
    "zip": "80204"
  }
  ```
* HTTP Response: 
  * Success (HTTP Status Code: 200): 
  ```json 
  {
    "name": "Home", 
    "street1": "674 Old Townie Way", 
    "street2": null, 
    "city": "Denver", 
    "state": "CO", 
    "zip": "80204",
    "user_id": 1234, 
    "created_at": "2020-07-20T22:46:44.047Z", 
    "updated_at": "2020-07-20T22:46:44.047Z" 
  }
  ```
  * Bad Request (HTTP Status Code: 400): 
  ```json
  {
    "err": "message explaining what went wrong"
  }
  ```

### Get Created Locations (for current user) 
* Endpoint: `/locations`
* Action: `READ` 
* Header: bearer token **required** 
* HTTP Method: `GET` 
* Arguments: 
  * NA 
* HTTP Body: 
  * NA  
* HTTP Response: 
  * Success (HTTP Status Code: 200): 
  ```json 
  {
    "locations": [
        {
            "id": 1,
            "created_at": "2020-07-27T22:15:53.740Z",
            "updated_at": "2020-07-27T22:15:53.740Z",
            "user_id": 1,
            "name": "Home",
            "street1": "674 Old Townie Way",
            "street2": null,
            "city": "Denver",
            "state": "CO",
            "zip": "80204",
            "type": null
        },
        {
            "id": 2,
            "created_at": "2020-07-27T22:16:10.036Z",
            "updated_at": "2020-07-27T22:16:10.036Z",
            "user_id": 1,
            "name": "Home",
            "street1": "674 Old Townie Way",
            "street2": null,
            "city": "Denver",
            "state": "CO",
            "zip": "80204",
            "type": null
        },
        {
            "id": 3,
            "created_at": "2020-07-27T22:16:54.853Z",
            "updated_at": "2020-07-27T22:16:54.853Z",
            "user_id": 1,
            "name": "Home",
            "street1": "674 Old Townie Way",
            "street2": null,
            "city": "Denver",
            "state": "CO",
            "zip": "80204",
            "type": "house"
        }
    ]
  } 
  ```
  * Bad Request (HTTP Status Code: 400): 
  ```json
  {
    "err": "message explaining what went wrong"
  }
  ```

### Vendors 

* Endpoint: `/vendors`
* Header: bearer token 
* Action: `CREATE` 
* HTTP Method: `POST` 
* Arguments: 
  * `created_by` - the unique identifier of the user who created the record 
  * `name` - the name of the vendor 
  * `email` - contact email address for the vendor 
  * `phone` - contact phone for the vendor 
  * `street1` - first line of mailing address
  * `street2` - second line of mailing address 
  * `city` - the city of the mailing address
  * `state` - the state of the mailing address 
  * `zip` - the zip code of the mailing address
  * `description` - a description of the vendor 
* HTTP Body: 
  ```json
  {
    "name": "Apple Cherry Creek", 
    "email": "support@apple.com", 
    "phone": "303-583-7310", 
    "street1" : "3000 E 1st Ave", 
    "street2" : null, 
    "city" : "Denver", 
    "state" : "CO", 
    "zip": "80206", 
    "description": "Due to covid, the store is closing at 7pm" 
  }
  ```
* HTTP Response: 
  * Success (HTTP Status Code: 200): 
  ```json
  {
    "id": 1234, 
    "created_at": "2020-07-27T22:16:54.853Z",
    "updated_at": "2020-07-27T22:16:54.853Z",
    "created_by": 1234, 
    "name": "Apple Cherry Creek", 
    "email": "support@apple.com", 
    "phone": "303-583-7310", 
    "street1" : "3000 E 1st Ave", 
    "street2" : null, 
    "city" : "Denver", 
    "state" : "CO", 
    "zip": "80206", 
    "description": "Due to covid, the store is closing at 7pm" 
  }
  ```
  * Bad Request (HTTP Status Code: 400): 
  ```json
  {
    "err": "message explaining what went wrong"
  }
  ```

* Endpoint: `/vendors`
* Header: bearer token 
* Action: `READ` 
* HTTP Method: `GET` 
* Arguments: NA
* HTTP Body: NA 
* HTTP Response: 
  ```json
  {
    "vendors": [
        {
            "id": 1,
            "created_at": "2020-07-27T23:14:20.291Z",
            "updated_at": "2020-07-27T23:14:20.291Z",
            "created_by": 1,
            "name": "Apple Cherry Creek",
            "email": "support@apple.com",
            "phone": "303-583-7310",
            "street1": "3000 E 1st Ave",
            "street2": null,
            "city": "Denver",
            "state": "CO",
            "zip": "80206",
            "description": "Due to covid, the store is closing at 7pm"
        }
    ]
  }
  ``` 

*** 
### Items 


* Endpoint: `/items`
* Header: bearer token - 
* Action: `CREATE` 
* HTTP Method: `POST` 
* Arguments: 
  * `location_id` - unique idenitifier for the location of the item 
  * `user_id` - user owning the item (identified via bearer token) 
  * `vendor_id` - unique identifier of the vendor the item was purchased from 
  * `name` - the user-defined name of the item 
  * `brand` - the brand associated with the item (Nike, Apple, etc.)
  * `model` - the model name or number associated with the item 
  * `serial` - the serial number associated with the item 
  * `est_value` - the estimated value of the item 
  * `acc_value` - the actual value of the item 
  * `insured` - (true/false) - is insured? 
  * `selling` - user-designation, indicates an item is for sale 
  * `purchase_date` - date item was purchased 
  * `condition` - the items condition status 
  * `color` - the items color 
  * `description` - any additional details about the item 
* HTTP Body:
  ```json
  {
    "location_id": 1234, 
    "vendor_id": 1234, 
    "name": "iPhone XS Max", 
    "brand": "Apple", 
    "model": "XS Max (256GB)", 
    "serial": "C02TNDGIGN506", 
    "est_value": 750.00, 
    "insured": false, 
    "selling": false, 
    "purchase_date": "2020-07-27T23:14:20.291Z", 
    "condition": "used (like-new)", 
    "color": "white", 
    "description": "Current iPhone" 
  }
  ``` 
* HTTP Response: 
  ```json
  {
    "items": [
        {
            "id": 3,
            "created_at": "2020-07-28T15:39:46.786Z",
            "updated_at": "2020-07-28T15:39:46.786Z",
            "location_id": 1,
            "user_id": 1,
            "vendor_id": 1,
            "name": "iPhone XS Max",
            "brand": "Apple",
            "model": "XS Max (256GB)",
            "serial": "C02TNDGIGN506",
            "est_value": 750,
            "acc_value": null,
            "insured": false,
            "selling": false,
            "purchase_date": "2020-07-27T06:00:00.000Z",
            "condition": "used (like-new)",
            "color": "white",
            "description": "Current iPhone"
        }
    ]
  }
  ``` 
