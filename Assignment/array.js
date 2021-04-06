const Memory = require('./memory')
const memory = new Memory

class Array {
  constructor() {
    this.length = 0
    this._capacity = 0
    this.ptr = memory.allocate(this.length)
  }

  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO)
    }
    memory.set(this.ptr + this.length, value)
    this.length ++
  }

  _resize(size) {
    const oldPtr = this.ptr
    this.ptr = memory.allocate(size)
    if (this. ptr === null) {
      throw new Error ('Out of memory');
    }
    memory.copy(this.ptr, oldPtr, this.length)
    memory.free(oldPtr)
    this._capacity = size
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error ('Index error')
    }
    return memory.get(this.ptr + index)
  }

  pop() {
    if (this.length === 0) {
      throw new Error ('Index error')
    }
    const value = memory.get(this.ptr + this.length - 1)
    this.length --
    return value  
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error ('Index error')
    }  
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO)
    }

    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index)
    // why do this.length - index? is there a way to visualize this
    memory.set(this.ptr + index, value)
    this.length++
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error ('Index error')
    }
    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1)
    this.length --
  }
}

module.exports = Array

function main(){

  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();
  // Add an item to the array
  arr.push(3);
  // Array { length: 1, _capacity: 3, ptr: 0 }

  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  // Array { length: 6, _capacity: 12, ptr: 3 }
  // why is capacity at 12? not 18?
  // push(value) {
  //   if (this.length >= this._capacity) { // it's true, so run it
  //     this._resize((3 + 1) * 3) // this is why _capacity=12?
  //   }
  //   memory.set(0 + 6, value)
  //   this.length ++
  // }

  // console.log(arr);

  arr.pop();
  arr.pop();
  arr.pop();

  // console.log(arr);
  // Array { length: 3, _capacity: 12, ptr: 3 }
  // the length of the array is now 3 because the function performed pop 3x, 
  // taking away the last three items in array

  // console.log(arr.get(0))
  // first item in array: 3

  arr.pop();
  arr.pop();
  arr.pop();
  arr.push("tauhida")
  console.log(arr.get(0))
  // result: NaN; 
  // question: is it because it's not a number? are we not allowed to have strings?
}

main()