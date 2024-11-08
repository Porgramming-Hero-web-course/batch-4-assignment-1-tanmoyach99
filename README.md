##type Guards

Type guards in TypeScript are important. It allows a developer to check the type in runtime. So that a developer make his coe safer and it also allows a developer to narrowing types

Why Type Guards are Necessary
Runtime Type Checking: Type guards verify the actual type of variables at runtime, which helps avoid errors that would otherwise only appear when the code is executed.
Narrowing Types: TypeScript’s type inference can automatically “narrow” the type of a variable based on type guards, allowing specific properties and methods to be accessed safely.
Improved Code Safety: By using type guards, you prevent runtime errors that could occur due to invalid operations on incompatible types.
Enhanced Autocomplete and Intellisense: TypeScript narrows the type in code editors, providing better autocomplete suggestions based on the identified type.
Types of Type Guards in TypeScript
1. typeof Type Guard
The typeof type guard is used to check for primitive types like string, number, boolean, and symbol. It’s one of the simplest type guards, using the typeof operator.

```javascript`
function processValue(value: string | number) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());  // value is now of type string
    } else {
        console.log(value.toFixed(2));     // value is now of type number
    }
}
Use Case
Useful when dealing with union types that include primitives.
Helps TypeScript infer the type within the conditional scope, allowing specific methods like toUpperCase() for strings or toFixed() for numbers.
2. instanceof Type Guard
The instanceof type guard is used to check if an object is an instance of a particular class or constructor. It’s particularly useful for distinguishing between class instances.

typescript
Copy code
class Dog {
    bark() {
        console.log("Woof!");
    }
}

class Cat {
    meow() {
        console.log("Meow!");
    }
}

function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark();  // animal is now of type Dog
    } else {
        animal.meow();  // animal is now of type Cat
    }
}
Use Case
Use instanceof for type guarding class instances when you have multiple classes with unique methods.
It allows TypeScript to narrow down to a specific class, enabling safe access to its properties and methods.
3. Custom Type Guards (User-Defined Type Guards)
Custom type guards are functions that return a boolean indicating whether a variable is of a specific type. They are often used for complex or custom type checking that typeof or instanceof cannot handle.

To define a custom type guard, use a function that returns a boolean and a return type with the variable is Type syntax.

typescript
Copy code
interface Fish {
    swim: () => void;
}

interface Bird {
    fly: () => void;
}

function isFish(animal: Fish | Bird): animal is Fish {
    return (animal as Fish).swim !== undefined;
}

function move(animal: Fish | Bird) {
    if (isFish(animal)) {
        animal.swim();  // animal is now of type Fish
    } else {
        animal.fly();   // animal is now of type Bird
    }
}
Use Case
Custom type guards are ideal for interfaces or complex types where typeof and instanceof won’t work, especially for distinguishing between different interface types.
Allows creating specialized logic for complex scenarios.
4. in Type Guard
The in operator checks if a property exists in an object. This is especially helpful when working with objects that have unique properties or discriminated unions.

typescript
Copy code
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
Use Case
The in type guard is helpful when you need to check for the existence of a specific property.
Useful in discriminated unions where each type has a unique property.
5. Discriminated Unions
Discriminated unions are a design pattern in TypeScript where each type in a union has a unique literal property (often called a “tag” or “discriminator”). This makes it easy to determine the specific type of an object based on the value of that property.

typescript
Copy code
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
Use Case
Discriminated unions are ideal for unions of similar object types where a common property can identify the specific type.
Provides a very clean and type-safe way to handle multiple types with shared properties.
Summary
Type guards are essential for safely narrowing down types at runtime, ensuring that TypeScript can infer the correct type and access properties and methods accordingly. Here’s a quick recap:

typeof: Great for primitives (like string, number).
instanceof: Useful for class instances.
Custom Type Guards: Ideal for complex interfaces or when typeof/instanceof isn’t enough.
in Operator: Handy for checking properties in discriminated unions.
Discriminated Unions: Pattern for unions with unique properties, ensuring clear type distinction.
Each of these type guards enables you to write safer, more reliable, and clearer code by making explicit what types are expected in different scenarios.
