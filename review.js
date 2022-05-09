var axios = require('axios');
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
console.log("Hello World!");
function greet(person, date) {
    console.log("Hello:".concat(person.name.toUpperCase, ",today is:").concat(date));
}
var person = new Person(null);
person.name = "Abibou";
greet(person, new Date("5/9/2022"));
var msg = "hello there!";
var numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.forEach(function (n) {
    console.log(n);
});
var city = [1, 2, 3, 4, "a"];
function add(a, b) {
    return a + b;
}
function getRandomNumber() {
    return Math.random();
}
var names = ["Alice", "Bob", "Eve"];
names.forEach(function (s) {
    console.log(s.toUpperCase());
    //Property 'toUppercase' does not exist on type 'string'. Did you mean
    //'toUpperCase'?
});
var file = "c:\names.pdf";
//objects
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
//optional properties with ?function printName(obj: { first: string; last?: string }) {
function printName(obj) {
    console.log("first value is " + obj.first);
    console.log("last value is " + obj.last);
}
var obj = {
    first: "Abibou"
};
printName(obj);
//Union with |
function printId(id) {
    if (typeof (id) == "string") {
        console.log("Your ID string is: " + id);
    }
    else {
        console.log("Your ID int is: " + id);
    }
}
printId("James");
printId(145);
function welcomePeople(x) {
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    }
    else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}
function printCoord2(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord2({ x: 100, y: 100 });
function sanitizeInput(str) {
    return sanitize(str);
}
function sanitize(str) {
    return str.trim();
}
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.eat = function () {
        console.log('I am eating');
    };
    MyClass.prototype.smile = function () {
        console.log('I am smiling');
    };
    return MyClass;
}());
var myclass = new MyClass();
myclass.x = 1;
myclass.y = 2;
myclass.eat();
myclass.smile();
console.log(JSON.stringify(myclass));
var myCanvas = document.getElementById("main_canvas");
var myCanvas2 = document.getElementById("main_canvas");
function printText(s, alignment) {
    // ...
}
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
var req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);
function handleRequest(url, method) {
    axios.get(url)
        .then(function (r) {
        console.log(r);
    })["catch"](function (error) {
        console.log(error);
    });
}
function doSomething(x) {
    if (x === null) {
        // do nothing
    }
    else {
        console.log("Hello, " + x.toUpperCase());
    }
}
