import { v4 as uuidv4 } from 'uuid'; //to generate uniqueid

let USERS = [];

export const Adduser = (req,res)=>{
    // console.log(req.body); req.body holds the data
    const user = req.body;

    //Generate unique id
    const Userid = uuidv4(); 

    //userwith uniqueid
    const userWithId = { ...user, id: Userid };

    //Adding the user to the USERS array
    USERS.push(userWithId);
    res.send(`user with the name ${user.firstName} added to the db with the id ${Userid}`);

    //USERS.push({...user,id:uuidv4());
}


export const GetUser = (req,res)=>{
    // res.send("Hello form the user page");
    res.send(USERS);
}

export const FoundUser = (req,res)=>{  
    //http://localhost:3000/users/22222 here id will be 22222
    const {id} = req.params //req.param will have a id in it cause the id here passed as a parameter
    const foundUser =  USERS.find((user) => user.id === id); //compare id with other ids in
    res.send(foundUser);
}

export const DeleteUser = (req,res)=>{
    const {id} = req.params

    //keep all the users except the user with the id needs to be removed
    USERS = USERS.filter((user) => user.id != id) //if the function returns false then the element from the array will be removed

    res.send(`user with ${id} deleted from the db`);
}

export const UpdateUser = (req,res)=>{
    const {id} = req.params;
    const { firstName, lastName, age} = req.body;

    
    const user = USERS.find((user)=> user.id === id);

    if(firstName) {
        user.firstName = firstName;
    }

    if(lastName) {
        user.lastName = lastName;
    }
    
    if(age) {
        user.age = age;
    }

    res.send(`user with the ${id} is updated`);
}