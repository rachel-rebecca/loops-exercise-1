console.log("for loop counting 1-10");

for (let i = 1; i < 11; i++) {
    console.log(i);
}

console.log("for loop counting down 10-1");

for (let i = 10; i > 0; i--) {
    console.log(i);
}

console.log("while loop counting 1-10");

var i = 1; //had to use var to be able to reassign i's value
while (i < 11) {
    console.log(i);
    i++;
}

console.log("while loop counting down 10-1");

var i = 10; //had to use var to be able to reassign i's value
while (i > 0) {
    console.log(i);
    i--;
}

console.log("do while counting 1-10");

var i = 1;
do {
    console.log(i);
    i++;
}
while (i <=10);

console.log("do while counting down 10-1")

var i = 10;
do {
    console.log(i);
    i--;
}
while (i >= 1);

console.log("for ... of to log numbers of array")

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let number of numbers) {
    console.log(number);
}

console.log("Extended Challenge")
//Jim helped me out and came up with the else/if method. I put it inside of a while loop with breaks.
let str = prompt("Type a word that is 1 to 9 letters long:");

while (str.length < 10) {
    if (str.length === 9) {
        console.log(" " + str);
        break;
    } else if (str.length === 8) {
        console.log("  " + str);
        break;
    } else if (str.length === 7) {
        console.log("   " + str);
        break;
    } else if (str.length === 6) {
        console.log("    " + str);
        break;
    } else if (str.length === 5) {
        console.log("     " + 5);
        break;
    } else if (str.length === 4) {
        console.log("      " + str);
        break;
    } else if (str.length === 3) {
        console.log("       " + str);
        break;
    } else if (str.length === 2) {
        console.log("        " + str);
        break;
    } else if (str.length === 1) {
        console.log("         " + str);
        break;
    } else {
        console.log("Not an option")
        break;
    }
}
