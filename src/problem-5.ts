const getProperty=<T>(obj:T,k:keyof T):T[keyof T]=>{
    return obj[k]
}


const p={
    name:"alice",
    age:40
}

console.log(getProperty(p,"name"))