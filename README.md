# Type Guards #

Type guards in TypeScript are important. It allows a developer to check the type in runtime. So that a developer make his coe safer and it also allows a developer to narrowing types

Why Type Guards are Necessary
Runtime Type Checking: Type guards verify the actual type of variables at runtime, which helps avoid errors that would otherwise only appear when the code is executed.
Narrowing Types: TypeScript’s type inference can automatically “narrow” the type of a variable based on type guards, allowing specific properties and methods to be accessed safely.
Improved Code Safety: By using type guards, you prevent runtime errors that could occur due to invalid operations on incompatible types.
Enhanced Autocomplete and Intellisense: TypeScript narrows the type in code editors, providing better autocomplete suggestions based on the identified type.
Types of Type Guards in TypeScript

## Typeof Type Guard ##
The typeof type guard is used to check for primitive types like string, number, boolean, and symbol. It’s one of the simplest type guards, using the typeof operator.

#Example:
```
function processValue(value: string | number) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());  // value is now of type string
    } else {
        console.log(value.toFixed(2));     // value is now of type number
    }
}
```
Use Case
It is useful specially for the primitive types.


##  instanceof Type Guard ##
The instanceof type guard is used to check if an object is an instance of a particular class or constructor. It’s particularly useful for distinguishing between class instances.


```
class Dog {
    bark() {
        console.log("I am barking!");
    }
}

class Cat {
    meow() {
        console.log("I am meowing!");
    }
}

function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark();  // animal is now of type Dog
    } else {
        animal.meow();  // animal is now of type Cat
    }
}
```
Use Case: instance of type guard is used when you classes with unique methods and it is used for narrowing down to a specific class using for its properties and methods.






## in Type Guard ##
This is one of the most used Type Guards. The in operator checks if a property exists in an object. This is especially helpful when working with objects that have unique properties or discriminated unions.

```
interface Car {
    drive: () => void;
}

interface Boat {
    sail: () => void;
}

function moveVehicle(vehicle: Car | Boat) {
    if ("drive" in vehicle) {
        vehicle.drive();  // vehicle is now of type Car
    } else {
        vehicle.sail();   // vehicle is now of type Boat
    }
}
```
Use Case
The in type guard is used for  check for the existence of a specific property.




## Custom Type Guards ##
Custom type guards are functions that return a boolean indicating whether a variable is of a specific type. They are often used for complex or custom type checking that typeof or instanceof cannot handle.

To define a custom type guard, use a function that returns a boolean and a return type with the variable is Type syntax.

```
interface Flies {
   Fly:()=>void:
    
}

interface Beast {
    jump: () => void;
}

function isFish(animal: Fish | Bird): animal is Fish {
    return (animal as Fish).swim !== undefined;
}

function move(creature: Flies | Beast) {
    if (isFlies(creature)) {
        creature.fly(); 
    } else {
        creature.jump();   
    }
}
```
Use Case:
this kind of type guards is used for interfaces which is complex and where type of and instances of wont work.

## Discriminated Unions ##


```
interface Circle {
    kind: "circle";
    radius: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

type Shape = Circle | Rectangle;

function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "rectangle":
            return shape.width * shape.height;
    }
}
```
Use Case

it is Ideal for similar object types whereas a property can specify the specific object types







Type guards are essential for safely narrowing down types at runtime, ensuring that TypeScript can infer the correct type and access properties and methods accordingly. Here’s a quick recap:



