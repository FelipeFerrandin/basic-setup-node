import express from 'express'
import UserController from "@controllers/UserController";
const app = express()

app.get('/', (request, response)=>{
    new UserController().findUser(1)
    return response.json({hello: 'My node server'})
})

app.listen(8080)
