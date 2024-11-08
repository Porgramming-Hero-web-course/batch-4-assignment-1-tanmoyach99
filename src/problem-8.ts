const validateKeys=<T extends object>(obj:T ,keys:(keyof T)[]|string[]):boolean=>{

    
  for(let key of keys){
    if(!(key in obj)){
        return false
    }
  }
  return true
}


const person = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(validateKeys(person, ["name"]));
// console.log(validateKeys(person, ["nae"]));


