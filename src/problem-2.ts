

type ArrOfNumOrStr= (number|string)

const removeDuplicates=(arr:ArrOfNumOrStr[]):ArrOfNumOrStr[]=>{
    return arr.filter((val:number|string,index:number):boolean=>arr.indexOf(val)===index)
   
}



const arraysofnumorstring:ArrOfNumOrStr[]=[1,22,22,22,2,2,2,34,56,65,56]


const arr2:ArrOfNumOrStr[]=["next","next",1,1,1,"next","js","js","js"]


const res1=removeDuplicates(arraysofnumorstring)
const res2=removeDuplicates(arr2)


console.log(res1); 
console.log(res2)