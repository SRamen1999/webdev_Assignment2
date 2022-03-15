// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
  // Place your code here.
  for (let i = 0; i < this.length; i++) {   
    if (this[i] === undefined) continue;
    callbackFn(this[i], i, this);
  }
};

// MAP //
Array.prototype.myMap = function(callbackFn) {
  // Place your code here.
  //let arr = new Array(this.length)
  let arr = new Array(this.length)
  for(let i =0; i < this.length; i++){
    if (this[i] === undefined) continue;
    arr[i] = (callbackFn(this[i], i, this))
  }
  return arr
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
  // Place your code here.
  for(let i =0; i < this.length; i++){
    if (this[i] === undefined) continue;

    if(callbackFn(this[i],i,this)){
      return true
    }
  }
  return false
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  // Place your code here.
  var total = 0
  for(let i = 0; i < this.length; i++){
    if (this[i] === undefined) continue;
    callbackFn(total += this[i],i,this)
  }
  return total

};

// INCLUDES //
Array.prototype.myIncludes = function(aim) {
  // Place your code here.
  for(let i =0; i < this.length; i++){
    if (this[i] === undefined) continue;

    if(this[i] === aim){
      return true
    }
  }
  return false

};

// INDEXOF //
Array.prototype.myIndexOf = function(target, index = 0) {
  // Place your code here.
  for(let i = index; i < this.length; i++){
    if (this[i] === undefined) continue;

    if(this[i] === target){
        return i
      }
  }
  return -1
};

// PUSH //
Array.prototype.myPush = function(...args) {
  // Place your code here.

  var index = 0
  let l = this.length
  for(let i = l ; i < l + args.length; i++){
    this[i] = args[index]
    index++
  }
  return this.length
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(aim) {
  // Place your code here.
  for(let i = this.length -1; i >= 0; i--){
    if(this[i] === aim){
      return i
    }
  }
  return -1
};

// KEYS //
Object.myKeys = function(currObj) {
  // Place your code here.
  var index = 0
  let arr = new Array(currObj.length)
  for (const i in currObj) {
    arr[index] = i
    index++
  }
  return arr
};

// VALUES //
Object.myValues = function(currObj) {
  // Place your code here.
  var index = 0
  let arr = new Array(currObj.length)
  for (const i in currObj) {
    arr[index] = currObj[i]
    index++
  }
  return arr
};


/*
//testing
let array1 = [1,3,5,7,2];

array1.myEach(x => console.log(x));   
const map1 = array1.myMap(x => x*3);
console.log(map1)  
const even = array1.mySome(x => x %2 === 0);
console.log(even)
const init = 0
const sumW = array1.myReduce((previousValue, currentValue) => previousValue + currentValue,
init);
console.log(sumW);
console.log(array1.myIncludes(2))
console.log(array1.myIndexOf(5))
console.log(array1)
console.log(array1.myPush(2,3,2))
console.log(array1)
console.log(array1.myLastIndexOf(6))

const object1 = {
  a: 'somestring',
  b: 42,
  c: false,
  d: "yo"
};

console.log(Object.myKeys(object1))
console.log(Object.myValues(object1)) */
