# API to use on front-end challenge

To run this api project you should
1. `npm install`
2. `npm run start`

A [JSON-SERVER][1] will be setup, feel free to fork the project and change if you feel confortable to do so, these are the default endpoints:


### Endpoints

|  METHOD | ENDPOINT  | DESCRIPTION  |
| ------------ | ------------ | ------------ |
| GET  |  /departments | get all departments  |
|  POST | /departments  |  create a deparment |
| GET  |  /departments/:id | get a specific department  |
|  PUT |  /departments/:id |  update a department |
|  DELETE |  /departments/:id | delete a department  |
| GET  |  /corrective-actions | get all corrective actions  |
|  POST | /corrective-actions  |  create a corrective action |
| GET  |  /corrective-actions/:id | get a specific corrective action  |
|  PUT |  /corrective-actions/:id |  update a corrective action |
|  DELETE |  /corrective-actions/:id | delete a corrective action  |
| GET  |  /non-conformities | get all non conformities  |
|  POST | /non-conformities  |  create a non conformity |
| GET  |  /non-conformities/:id | get a specific non conformity  |
|  PUT |  /non-conformities/:id |  update a non conformity |
|  DELETE |  /non-conformities/:id | delete a non conformity  |

[1]: https://github.com/typicode/json-server "json-server"