import User from "@models/User";

export default class UserController{

    findUser(aID: number) : User{
        const lID = aID
        console.log(lID)
        return {name:'Felipe', year:20}
    }
}