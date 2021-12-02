// function solution(N) {
//     var i;
//       var NumFactors = 0;
  
//       for(i = 1;i*i < N; i++) {
//           if(N%i == 0) NumFactors += 2;
//       }
  
//       if(i*i == N) NumFactors++;
  
//       return NumFactors
//   }

//   console.log(solution(24))

const numbers = [65, 44, 12, 4];
const newArr = numbers.map(i=>1)

function myFunction(num) {
  return num * 10;
}

Array.prototype.tripple=function(){
    for(let i=0;i<this.length;i++){
        this[i]=this[i]*3
    }
}
numbers.tripple()
console.log(numbers)
console.log(newArr)

Array.prototype.myUcase = function() {
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i].toUpperCase();
    }
  };

  var fruits = ["Banana", "Orange", "Apple", "MANGO"];
fruits.myUcase();

console.log(fruits)