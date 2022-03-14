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
  
};

// PUSH //
Array.prototype.myPush = function(...args) {
  // Place your code here.

  
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(target) {
  // Place your code here.
  
};

// KEYS //
Object.myKeys = function(obj) {
  // Place your code here.
  
};

// VALUES //
Object.myValues = function(obj) {
  // Place your code here.
  
};



/*let array1 = [6, 3,1,7,4,2];

array1.myEach(x => console.log(x));   
const map1 = array1.myMap(x=> x*2);
console.log(map1)  
const even = array1.mySome(x => x %2 ===0);
console.log(even)

console.log(array1.myReduce())
console.log(array1.myIncludes(2))*/
