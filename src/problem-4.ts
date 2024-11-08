type circle={
    shape:"circle",
    radius:number
}


type rectangle={
    shape:"rectangle",
    length:number,
    width:number
}


type shapeType=circle|rectangle



const calculateShapeArea=(shape:shapeType):number=>{

    if(  "radius" in shape){
        return Math.PI*shape?.radius*shape.radius
    }else if("length" in shape && "width" in shape){
        return shape.length*shape.width
    }else{
        throw new Error("invalid input");
    }

}


// console.log(calculateShapeArea({shape:"rectangle",length:10,width:20}))
// console.log(calculateShapeArea({shape:"circle",radius:20}))



