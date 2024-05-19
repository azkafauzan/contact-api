# Contact API

- ### Author : Azka Fauzan
- ### Github : https://github.com/azkafauzan
- ### Made with : NodeJS, ExpressJS, MongoDB, TypeScript

## Get Contacts API

Enpoint : GET /api/contacts

Response :

```json
{
  "message": "Get all contacts success",
  "data": {
    "contacts": [
      {
        "name": "john",
        "email": "john@gmail.com",
        "phone": "08122998123",
        "createdAt": "2024-05-19T10:52:47.875Z",
        "updatedAt": "2024-05-19T10:52:47.875Z",
        "__v": 0
      }
    ]
  }
}
```

## Get Contact By Id API

Enpoint : GET /api/contacts/:id

Response :

```json
{
  "message": "Get contact success",
  "data": {
    "contact": {
      "name": "john",
      "email": "john@gmail.com",
      "phone": "08122998123",
      "createdAt": "2024-05-19T10:52:47.875Z",
      "updatedAt": "2024-05-19T10:52:47.875Z",
      "__v": 0
    }
  }
}
```

## Create Contact API

Enpoint : POST /api/contacts

Request :

```json
{
  "name": "john",
  "email": "john@gmail.com",
  "phone": "08122998123"
}
```

## Update Contact API

Enpoint : PUT /api/contacts/:id

Request :

```json
{
  "name": "john",
  "email": "john@gmail.com",
  "phone": "08122998123"
}
```

## Delete Contact API

Enpoint : DELETE /api/contacts/:id

Response :

```json
{
  "message": "Delete contact success"
}
```
