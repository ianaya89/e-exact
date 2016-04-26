# e-xact-trainning
e-xact trainning REST API

## Requirments

* Use Node.js and some sort of framework like express.js

* Written using ES6 (will be compatible with Node 5.10+)

* Exposes a JSON REST API

* Stores data in Mongo or Postgres

* Has a /create endpoint that receives a POST with a login and a password as a JSON body.   It will then save in its data store the login and password and respond with an HTTP 200.  It should require unique logins and non empty passwords.

* Has an /authenticate endpoint that receives a POST with a login and password as a JSON body.  It will return an HTTP 200 or HTTP 401 based on whether the login and password match what is stored in the data store.

* Make sure this is secure (i.e. it'd pass a basic PCI DSS security review, though no need to dive really deep in to all the pedantic rules. Credentials should be stored and handled securely however).

* Make sure it handles and render errors, as well as logs

* Check in to a Github repo and provide the link to us


# Run it
1. Clone the repo

2. Open a terminal and locate the repo directory.

3. Run `$ npm i`

4. Run `npm run dev`

