class Car{

    name:string;
    model:string;
    year:number;
    constructor( name:string, model:string, year:number){
        this.name = name;
        this.model = model;
        this.year = year;
    }
    getCarAge():number{
        return (new Date().getFullYear())-this.year

    }

}


// const honda=new Car("honda","civic",2016)

// console.log(honda.getCarAge())


