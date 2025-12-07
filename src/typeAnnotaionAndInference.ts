// TYPE ANNOTATION

let name: string = "anurag";
let age: number = 45;
let isAdmin: boolean = false;

// Function Annotation
function add(a: number, b: number): number {
    return a + b;
}

// Object Annotation:
let user: { name: string; age: number } = {
    name: "Anurag",
    age: 53
};

// Array Annotation:
let numbers: number[] = [13, 45, 54];
let names: string[] = ["Anurag", "Anjali", "Alok"];

console.log(name,age,isAdmin,user)

// TYPE ANNOTATION
let count = 6;
let name2 = "Anurag Kumar";
let isOnline = false;

 // Function Inference:
function add2(a :number,b:number){
    return a+b; // inferred return type: number
}
 // Array Inference:
 let fruits=["Anjali","mango"];

 // Object Inference:
 let person = {
  name: "Anurag",
  age: 20
  // name → string, age → number
};

console.log(count,name2,isOnline,person)