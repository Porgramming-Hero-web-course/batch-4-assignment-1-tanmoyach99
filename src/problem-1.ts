

const sumArray=(arr:number[]):number=>{
    const sumOfNum:number=arr.reduce((acc:number,current:number)=>acc+current,0);

    return sumOfNum

}


const arrayOfNum:number[]=[100,100];

const sum:number=sumArray(arrayOfNum);

console.log(sum);