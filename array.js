import Memory from './memory';
import memory from './memory'

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length)
  }

  //resize the array so there is space for new item using _resize
  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.set(this.ptr + this.length, value);
    this.length++
  }

  // you can't ask for some extra space directly at the end of your currently allocated space 
  // bc that space directly after likely already will have already been allocated for some 
  // other purpose
  // so instead you have to allocate new, larger chunk of memory, copy any existing values from 
  // old to new chunk, and free the old chunk
  // rather than resizing every time you push data, you can allocate more space than you need, 
  // that way you resize less often
  // O(1) operation
  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error ('Out of memory');
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }

  // retrieving values from arrays
  // this adds an index offset, and get the value stored at a memory address
  // both are O(1) operations
  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return memory.get(this.ptr + index)
  }

  // popping values from arrays
  // rather than resizing array, you just leave extra space which will be filled at next push
  // O(1) operation
  pop() {
    if (this.length === 0) {
      throw new Error('Index error');
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  // inserting values from arrays
  // inserting at any point in array and not just middle? 
  // you need to shift all the values after the new value back 1 position
  // best case performance of O(1) - same as pushing
  // worst case O(n) - requires every value to be shifted 1 memory address later
  // average case - inserting value in middle of array, need to shift half the values
  // so this means n/2 copies, avg case is also O(n) if you ignore constant factor of 1/2. 
  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array*SIZE_RATIO);
    }
    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++
  }

  // removing values from arrays
  // simlar to inserting values, except copying values backward to fill the space where
  // you removed the value rather than forwards to make space for a new value
  // best case scenario is O(1), same as popping
  // avg and worst case is O(n)
  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.length--; 
  } 

} 

Array.SIZE_RATIO = 3;

module.exports = Array;