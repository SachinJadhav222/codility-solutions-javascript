let A=[
    {
        name:"SOHAM",
        age:8
    },
    1,
    "SACHIN"
]

console.log(A)
console.log(A[0].name)
console.log(A[1])

const person = [];

console.log(Array.isArray(person))
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
//person.length;     // Will return 0
//person[0]; 
console.log(Array.isArray(person))
console.log(typeof person)
console.log(person)
