


   

const removeDuplicates=(arr:number[]):number[]=>{
    return arr.filter((val:number,index:number):boolean=>arr.indexOf(val)===index)
   
}



// const arrays:number[]=[1,22,22,22,2,2,2,34,56,65,56]





// const res1=removeDuplicates(arrays)


// console.log(res1); 




// type ArrOfNumOrStr= (number|string)

// const removeDuplicates=(arr:ArrOfNumOrStr[]):ArrOfNumOrStr[]=>{
//     return arr.filter((val:number|string,index:number):boolean=>arr.indexOf(val)===index)


// const arr2:ArrOfNumOrStr[]=["next","next",1,1,1,"next","js","js","js"]


// const res2=removeDuplicates(arr2)



// console.log(res2)