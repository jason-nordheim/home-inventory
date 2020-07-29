# About this Repo 

This project is a full-stack web application. 

The front-end of this application is in the `./web-ui/` directory 
The back-end of this application is in the `./API/` directory 

# The Application 

## Desciption

[APPNAME] is a home-inventoring application designed to help people better understand what they have, for insurance and net-worth reasons, as well as in order to sell items in an organized fashion. [COMPANYNAME] By inventoring all the items that are in one's possession we can: 
* Identify items that are useful to us 
* Identify items that could be worth selling 
* Assess if an item is worth the space it occupies ( i.e. "my rent is $1,000/month, and item x occupies 1/100 of that space, therefor it is costing $10/month)
* Keep track of license information 
* Keep track of purchase information 


## MVP (Minimal Viable Product) 

1. Can create a user-account 
    * DB: 
        * `user` model (name, phone, email, username, password)
    * API 
        * `POST` request to create account (authentication: none) 
    * WebUI 
        * Form to fill out `username`, `password` and other user-account information 
        * `POST` request to create account (authentication: none) 
        * validation of response 
            * display error/success 
2. Can securely login to user-account 
    * DB: 
        * `user` model (See #1)
    * API
        * `POST` request with account credentials; `username`, `password` (authentication: none) 
        * validation and identification of user 
        * HTTP response with bearer token 
    * WebUI 
        * Form to fill out `username` and `password`
        * `POST` request to API with account credentials; `username`, `password` (authentication: none) 
        * validation of HTTP response: 
            * display of error/success
3. Can successfully enter a `location` (place where an item is located/belongs) 
    * DB 
    * API 
    * WebUI 
4. Can successfully create a `vendor` ()


# FILL IN 

[APPNAME] -- Application Name 
[COMPANYNAME] -- Name of development organization 