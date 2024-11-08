

const sumArray=(arr:number[]):number=>{
    const sum:number=arr.reduce((acc:number,current:number)=>acc+current,0);

    return sum

}


// const arrayOfNum:number[]=[100,100];

// const sumNum:number=sumArray(arrayOfNum);

// console.log(sumNum);