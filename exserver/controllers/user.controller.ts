import express,{Response,Request} from 'express'

//Interface for the users
interface User{
    name:string
    age:Number
}

//Controller for the /users routes
const allUsers=(req:Request,res:Response)=>{
    const users:User[]=[
        {
            name:"ram",
            age:12
        },
        {
            name:"dam",
            age:14
        }
    ]
    res.json(users)
}


export {
    allUsers
}