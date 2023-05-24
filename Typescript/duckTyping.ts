// ----------- structural typing or  duck typing -----------------------

interface ICreadential{
    username: string;
    password: string;
    isAdmin?: boolean;
}


function login(credentials: ICreadential): boolean{
    console.log(credentials)
    return true;
}


// same properties in user and credetial interface
// const user = {
//     username: "Nikhil Rai",
//     password: "secrect",
//     isAdmin: true
// }

const user: ICreadential = {
    username: "Nikhil Rai",
    password: "secrect",
    isAdmin: true
}


login(user)