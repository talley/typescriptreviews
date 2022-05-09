let axios=require('axios');

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
console.log("Hello World!");

function greet(person: Person, date: Date) {
  console.log(`Hello:${person.name.toUpperCase},today is:${date}`);
}
let person: Person = new Person(null);
person.name = "Abibou";
greet(person, new Date("5/9/2022"));

let msg = "hello there!";

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];

numbers.forEach((n) => {
  console.log(n);
});

let city: any[] = [1, 2, 3, 4, "a"];

function add(a: number, b: number): number {
  return a + b;
}

function getRandomNumber(): number {
  return Math.random();
}
const names = ["Alice", "Bob", "Eve"];
names.forEach((s) => {
  console.log(s.toUpperCase());
  //Property 'toUppercase' does not exist on type 'string'. Did you mean
  //'toUpperCase'?
});
let file = "c:\names.pdf";

//objects
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
//optional properties with ?function printName(obj: { first: string; last?: string }) {
function printName(obj: { first: string; last?: string }) {
  console.log("first value is " + obj.first);
  console.log("last value is " + obj.last);
}
let obj = {
  first: "Abibou",
};
printName(obj);
//Union with |

function printId(id: number | string) {
    if(typeof(id)=="string"){
        console.log("Your ID string is: " + id);
    }
    else{
        console.log("Your ID int is: " + id);
    }
  
}
printId("James");
printId(145);

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}
//type Allias
type Point={
  x:number;
  y:number;
}

type Point2=Point &{
   z:string
}


function printCoord2(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
  }

  printCoord2({ x: 100, y: 100 });

  type ID=number|string;

  type UserInputSanitizedString = string;
function sanitizeInput(str: string): UserInputSanitizedString {
return sanitize(str);
} 

function sanitize(str: string): string {
  return str.trim();
}

//interface
interface iPoint{
  x:number;
  y:number;
  eat():void;
  smile():void;
}

class MyClass implements iPoint{
  x: number;
  y: number;
  eat(): void {
    console.log('I am eating');
  }
  smile(): void {
    console.log('I am smiling');
  }

  constructor(){

  }
}
let myclass=new MyClass();
myclass.x=1;
myclass.y=2;
myclass.eat();
myclass.smile();
console.log(JSON.stringify(myclass));

const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas")

function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
  }

  function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
    }

    const req = { url: "https://example.com", method: "GET"};
handleRequest(req.url, req.method);

function handleRequest(url: string, method: string) {
   axios.get(url)
   .then(r=>{
    console.log(r);
   })
   .catch(error=>{
     console.log(error);
   })
}

function doSomething(x: string | null) {
  if (x === null) {
  // do nothing
  } else {
  console.log("Hello, " + x.toUpperCase());
  }
  }
