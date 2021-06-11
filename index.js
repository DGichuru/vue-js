

let person ={
    name: "Mosh",
    age: 30
};

person.name ='John';

person['name'] = 'Mary';

console.log(person);

function greet(names, lname) {
    console.log('Hello  ' + names +' ' + lname)
}
 

greet('Daniel', 'Dante'); 
// calculating a value

function square(number){
    return number * number;
}

console.log(square(2))

/* comments */
//arrays.
var ourArray = ["John", 89, "Kim"]
/* queues*/

function nextInLine(arr , item) {
    arr.push(item)
    return item
}

myArr = [1,2,3,4,5];
console.log(nextInLine(myArr, 6));

function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "gamma";
            break;
        default:
            answer = "dane";
            break;
    }
    return answer;
}

console.log(caseInSwitch(1))

//card counting
var count = 0;
function cc(card) {

    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "A":
        case "Q":
        case "K":
            count--;
            break;
    }   
    
    var holdbet = 'Hold'
    if (count > 0) {
        holdbet = 'Bet'
    }
    return count + " " + holdbet;;

}
 //Objects - Properties.
 var mydog = {
     "name" : "del",
     "legs" : 2

 };

 delete mydog.legs;
 //Flexible data Objects
 var myMusic = [
     {
         "artist": "Bill Khalid",
         "title": "Piano Man",
         "release_year": 1973,
         "formats": [
             "CD",
             "8T",
             "LP"
         ],
         "gold":true

     },
     {
        "artist": "Kong Khalid",
        "title": "Guitar Man",
        "release_year": 1975,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold":false 
     }
 ];

//keeping a copy for tests
var myMusicCopy = JSON.parse(JSON.stringify(myMusic)) 

var contacts = [
  {
    "firstname" : "Daniel",
    "lastname" : "Gichuru",
    "number" : 79238,
    "likes" : ["pizza", "hiking", "coding"]
  },
  {
    "firstname" : "Eunice",
    "lastname" : "Jan",
    "number" : 848489,
    "likes" : ["pizza", "hiking", "coding"]
  },
  {
    "firstname" : "Josh",
    "lastname" : "King",
    "number" : 887439,
    "likes" : ["pizza", "hiking", "coding"]
  },
  {
    "firstname" : "Ian",
    "lastname" : "Likig",
    "number" : 9494,
    "likes" : ["pizza", "hiking", "coding"]
  },


]

function lookUpProfile(name, prop) {
    for(var i = 0; i < contacts.length; i++ ){
        if(contacts[i].firstname === name){
            return contacts[i][prop] || "No Such Property";
        
        }
        
    }
    return "No such Contact";

}

var data = lookUpProfile("Josh", "likes");

console.log(data);
//conversion of binary to integer
function convertInteger(str) {

    return parseInt(str, 2)

} 

console.log(convertInteger(10010))

//Ternary Operators.
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

checkSign(89)

//concat
var myConcat = (arr1, arr2) => arr1.concat(arr2);

//arrow function and filtering
const realNumberArray = [4, 5.6, 6 , 9, -2, 4,-8, 5];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
comsole.log(squaredIntegers)
    
 //destructuring 
var voxel = {x: 3.6, y: 9.0, z: 7.89};

const { x : a, y : b, z : c} = voxel;
//rest operator
//passing an object as a functions parameter- api calls
