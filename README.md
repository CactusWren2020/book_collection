 
> Node.js Express API with vanilla JS. Supports MongoDB(mongoose)

 
 
### Project Introduction
- suppot ES6/ES7 features
- using tslint followed [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

## Requirements

- node >= 12
- npm >= 6
- mongodb >= 4.0

 

## App skeleton
```
.
├── LICENSE
├── README.MD
├── nodemon.json
├── package-lock.json
├── package.json
└── src
    ├── components
    ----|--Book
    |   |  |-index.js
    |   |  |-model.js
    |   |  |-router.js
    |   |  |-service.js
    |   |  |-validation.js
    |   |  
    │   ├── User
    │   │   ├── index.js
    │   │   ├── model.js
    │   │   ├── router.js
    │   │   ├── service.js
    │   │   └── validation.js
    │   └── validation.js
    ├── config
    │   ├── connection.js
    │   ├── middleware.js
    │   └── router.js
    ├── error
    │   └── ValidationError.js
    └── server
        ├── events.js
        ├── index.js
        └── server.js
```
## Running the API
### Development
To start the application in development mode, run:

```bash
npm install -g nodemon
npm install
```

Start the application in dev env:
```
nodemon
```
Start the application in production env:

Install forever PM2:
```
npm install -g pm2
```

example start with scale on 2 core:
```
pm2 start ./src/index.js -i 2 --no-daemon
```

Express server listening on http://localhost:3000/, in development mode
The developer mode will watch your changes and re-run the node application automatically.

### Find User
```
   curl --location --request GET 'localhost:3000/v1/users'
```

### Create User
```
   curl --location --request POST 'localhost:3000/v1/users' \
   --header 'Content-Type: application/json' \
   --data-raw '{
      "email": "test@gmail.com",
      "fullName": "Wow Yay"
   }'
```

### Update User
```
   curl --location --request PUT 'localhost:3000/v1/users' \
   --header 'Content-Type: application/json' \
   --data-raw '{
      "id": "5e50265429fbb59255fb8428",
      "fullName": "Yay Foo"
   }'
```

### Delete User
```
   curl --location --request DELETE 'localhost:3000/v1/users' \
   --header 'Content-Type: application/json' \
   --data-raw '{
      "id": "5e502541bb617386c48f6a8c"
   }'
```

 












