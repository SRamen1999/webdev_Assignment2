// FOR EACH //
Array.prototype.myEach = function() {
  // Place your code here.
  for (let i = 0; i < this.length; i++) {   
    if (this[i] === undefined) continue;
    console.log(this[i])
  }
};

// MAP //
Array.prototype.myMap = function() {
  // Place your code here.
  let arr = new Array(this.length)
  for(let i =0; i < this.length; i++){
    if (this[i] === undefined) continue;

    arr[i] = this[i] * 2
  }
  return arr
};

// SOME //
Array.prototype.mySome = function() {
  // Place your code here.
  for(let i =0; i < this.length; i++){
    if (this[i] === undefined) continue;

    if(this[i] % 2 === 0){
      return true
    }
  }
  return false
};

// REDUCE //
Array.prototype.myReduce = function() {
  // Place your code here.
  var total = 0;
  for(let i = 0; i < this.length; i++){
    if (this[i] === undefined) continue;
    total += this[i]
  }
  return total

};

// INCLUDES //
Array.prototype.myIncludes = function(target) {
  // Place your code here.
  for(let i =0; i < this.length; i++){
    if (this[i] === undefined) continue;

    if(this[i] === target){
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
Array.prototype.myLastIndexOf = function(target) {
  // Place your code here.
  for(let i = this.length -1; i >= 0; i--){
    if(this[i] === target){
      return i
    }
  }
  return -1
};

// KEYS //
Object.myKeys = function(obj) {
  // Place your code here.
  index = 0
  let arr = new Array(obj.length)
  for (const i in obj) {
    arr[index] = i
    index++
  }
  return arr
};

// VALUES //
Object.myValues = function(obj) {
  // Place your code here.
  index = 0
  let arr = new Array(obj.length)
  for (const i in obj) {
    arr[index] = obj[i]
    index++
  }
  return arr
};



/*let array1 = [6, 3,1,7,4,2];

array1.myEach(x => console.log(x));   
const map1 = array1.myMap(x=> x*2);
console.log(map1)  
const even = array1.mySome(x => x %2 ===0);
console.log(even)

console.log(array1.myReduce())
console.log(array1.myIncludes(2))
console.log(array1.myIndexOf(1,4))
console.log(array1)
console.log(array1.myPush(2,3,2))
console.log(array1)
console.log(array1.myLastIndexOf(7))

const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.myKeys(object1))
console.log(Object.myValues(object1)) */
