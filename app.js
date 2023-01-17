alert("hi");
console.log("hello");

let a=5;
const b=2;
const myName="kim";

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log("hello "+myName);

a=7;
console.log(a/b)

const anIFant = true;
console.log(anIFant);

const amIFant = null;
let something;
console.log(amIFant);
console.log(something);

const daysOfWeek=["mon","tue","wed","thu","fir","sat"];

//Get Item form Array
console.log(daysOfWeek[5])

//Add one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek);


//object
const player = {
    Name:"kim",
    points:10,
    fat:true,
}
console.log(player);
player.points = player.points + 15;
console.log(player);

//fuction
function sayHello(nameOfPerson, age){
    console.log("Hello my name is "+nameOfPerson+" and I'm "+age);
}
sayHello("kim",10);
sayHello("lee",23);
sayHello("hwang",21);

function plus(a,b){
    console.log(a+b);
}
plus(1,2);

function divide(a,b){
    console.log(a/b);
}
divide(1,2)

const player1={
    name:"kim",
    sayHello:function(otherPersonName){
        console.log("hello "+otherPersonName+" nice meet you")
    },
};
player1.sayHello("kim");

const calculator={
    add:function(a,b){
        console.log(a+b);
    },
    minus:function(a,b){
        console.log(a-b);
    },
    mul:function(a,b){
        console.log(a*b);
    },
    power:function(a,b){
        console.log(a**b);
    }
};

calculator.add(5,5);
calculator.minus(5,5);
calculator.mul(5,5);
calculator.power(5,5);

//return
const calculator1={
    add:function(a,b){
        return a+b;
    },
    minus:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    },
    power:function(a,b){
        return a**b;
    }
};

const plusresult = calculator1.add(2,4);
const minusresult = calculator1.minus(plusresult,10);
console.log(plusresult);
console.log(minusresult);