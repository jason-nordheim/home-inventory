# API Routes 

*** 
## Users 

* Action: `CREATE` 
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
    "first": "John", 
    "last": "Doe", 
    "username": "jonny", 
    "password_digest": "jKMGKLnoZX5/sHPK3wAooKI0Ngr2j2", 
    "email": "john.doe@gmail.com", 
    "bio": "A farmer from rural Georgia"
  }
  ```
  * Bad Request (HTTP Status Code: 400): 
  ```json
  {
    "error": "message explaining what went wrong"
  }
  ```
