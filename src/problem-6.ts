interface Profile{
    name:string,
    age:number,
    email:string
}





const updateProfile=(profile:Profile,obj:Partial<Profile>):Profile=>{

    return{...profile,...obj}



}


// const p1={
//     name:"abdul kuddus",
//     age:330,
//     email:"boyati@example.com"
// }

// console.log(updateProfile(p1,{name:"abdul kuddus boyati"}));
// console.log(updateProfile(p1,{age:32}));


