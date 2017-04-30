# Express Fake API
Fake api with express js

## description
API helper to make development process easier. Using json data as fake storage, and lodash to manage data storage.

## Using
* `npm install`
* Access it using `http://localhost:8080/api/:model/:id?`

### URL method Detail
* `GET`: request data
* `POST`: creating new data or updating existing data
* `DELETE`: deleting existing data

### POST Example
Put json data on post method in body request
```
{
  "name": "Food",
  "description": "Main dishes"
}
```