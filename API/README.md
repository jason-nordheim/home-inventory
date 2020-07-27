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
    "error": "message explaining what went wrong"
  }
  ```

### Get Token 
* Endpoint: `/token` 
* Action: `CREATE` 
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
    "error": "message explaining what went wrong"
  }
  ```

## Locations 

* Endpoint: `/locations`
* Action: `CREATE` 
* Header: bearer token 
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
    "error": "message explaining what went wrong"
  }
  ```



### Items 
