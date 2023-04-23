// Write a function that takes an array of numbers and 
// returns a new array that contains only the numbers that are divisible by 3.

function divisibleNums(arr){
  nums = []
  for(i= 0 ;i<arr.length;i++){
    if(arr[i]%3===0){
        nums.push(arr[i])
       
    }
    
  }
  return nums
}
let arr =[20,9,18,78,55]
console.log(divisibleNums(arr))

// Write a function that takes an array of strings and returns a new array 
// that contains only the strings that start with the letter "a".

function findStringsStartingWithA(strings) {
  let newArray = []
  for (let i=0 ; i<strings.length;i++){
    if(strings[i][0]==="a"){
      newArray.push(strings[i])
    }
  }
  return newArray
}
let strings =["alice","helene","amanda","steve","mat"]
console.log(findStringsStartingWithA(strings))

// Write a function that takes an array of numbers and 
// returns the lowest number in the array.

function lowestNumber(array){
   let number = array.sort()
  let newNumber = Math.min.apply(Math,number)
  console.log(newNumber)
}
let array = [1,90,100,89,6]
lowestNumber(array)