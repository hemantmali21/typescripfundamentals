import {IUserInfo} from './IUserInfo'
import {User} from './User'            
/**========================================================== */


let usr:IUserInfo = {
   fname:"Hnm",
   lname:"oak"  
} 

let users1:IUserInfo[] = [
    {fname:"Hemant",lname:"df"},
    {fname:"Sachin",lname:"sds"}
]

function getUserList(userlist:IUserInfo[]){
    userlist.forEach(element => {
         console.log(element);
    });
}

getUserList(users1);

/****Classes */

let u = new User("Hemant","UK");
console.log(u.getFullName());


/****************Generics***************/
let userListG:Array<IUserInfo> = [
        {fname:"Hemant",lname:"df"},
        {fname:"Sachin",lname:"sds"}
]

function getUserListG(userdata:Array<IUserInfo>){
     userdata.forEach(element => {
          console.log("Fname: " + element.fname
                + " "  + " Lname: " + element.lname)
     });   
}    

getUserListG(userListG);