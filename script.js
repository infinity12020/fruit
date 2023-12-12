const words = ["peach", "apple", "grape", "apricot", "kiwi", "orange", "banana", "ananas"];


console.log(words.filter(item => item.startsWith("a")  ));


console.log(words.sort());

console.log(words.find(item => item.length));

words.unshift= prompt()

console.log(words);


words.length
console.log(words);



let num1 = [6, 18, 23, 3, 2, [22, 59]]
let num2 = [101, 4, 59, 89, 0, 7, 31, 12,] 


let mass = [...num1, ...num2 ]
console.log(mass);
console.log(mass.reduce((a, b) => b + a));




let numbers = [42, 'Alex', 'John', 18, 23, 100, 1]



let index = numbers.indexOf("Alex" );
if (index !== -1) {
    numbers.splice(index, 1);
    
}

let index2 = numbers.indexOf("John" );
if (index2 !== -1) {
    numbers.splice(index2, 1);
    console.log(numbers);
}


let names = ['Tyler', 'Stark', 'Jake', 'Igor'  ]

if (names.map((item, i) => {"Constantin" })) {
    names.unshift("Constantin")
console.log(names);
} else {

names.pop("Constantin")

}

