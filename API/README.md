## Data Models 

* User 
  * id (int/pk/auto)
  * username (string/unique)
  * name (string)
  * password_digest (string) 
  * email (string) 
  * phone (string)
  * created_at (timestamp/auto)
  * updated_at (timestamp/auto)
* Vendor 
  * id (int/pk/auto) 
  * name (string) 
  * created_by (int/fk) _links to User model_ 
  * street1 (string) 
  * street2 (string) 
  * city (string) 
  * state (string) 
  * zip (string) 
  * phone (string) 
  * email (string) 
  * description (text) 
  * references (User) 
* Item 
  * id (int/pk/auto) 
  * name (string) 
  * est_value (float) 
  * acc_value (float) 
  * selling (boolean) 
  * description (text) 
  * purchase_date (datetime)
  * category (string) 
  * created_by (int/fk/)