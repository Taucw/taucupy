## Tau ... cupy

### What is it ?

It's a front app to manage our coworking space usage, i.e. how many people plan to be here at a specific day.

* It's based on react and compiled with webpack. 
* It ships with a basic nodejs server, that simulates authentication (no calendar service yet).

### Install

* Clone the repo
* npm install
* cd nodejs-jwt-authentication-sample && npm install && cd ..
* ./start_dev && open public/index.html
* Sign in with: me/password

### Todo

* Configure and write tests
* Move the calendar date oriented logic to a separate lib.
* Setup a real server and API.
* Create the Flux flow to retreive data from server and feed the calendar.
