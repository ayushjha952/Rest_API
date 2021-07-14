# **REST API**

Create Rest Api using Node.js, Express.js and Mongodb for performing CRUD **(Create, read, update and delete)** operations.

## **Environment Variables**

Because we have used MongoDB, we’ll need a MongoDB SRV URI. You can create a database from this [link](https://www.mongodb.com/cloud/atlas). 

Now, create a `.env` file  to store the MongoDB SRV URI and the base URL, to run this project. The base URL will be your local host server location for now. Here’s my .env file code:

```
MONGO_URI=mongodb+srv://nemo:YourPasswordHere@cluster0.mkws3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
BASE=http://localhost:8080
```

Remember to change the ```<password>``` field in the MongoDB URI with your database password.

## **Run Locally**

Clone the project

```bash
  git clone https://github.com/ayushjha952/Rest_API.git
```

Go to the project directory

```bash
  cd Rest_API
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## **Use Postman to test the following API's**

Use following endpoints on postman:

>GET api/bio → Retrieves all the bio data

>POST api/bio → Add new bio data 

>GET api/bio/{id} → Retrieve the single bio data

>PUT api/bio/{id} → Update the bio data

>DELETE api/bio → Delete the bio data


## **Tech Stack**

![NodeJS](https://img.icons8.com/color/65/nodejs.png) **NodeJS** | ![ExpressJS](https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg) **ExpressJS** | ![MongoDB](https://img.icons8.com/color/65/000000/mongodb.png)**MongoDB**
|:---:|:---:|:---:|
