"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Stack implementation class with basic operations.
 * @public
 */
class Stack {
    constructor() {
        this.items = {};
        this.count = 0;
    }
    /**
    * The push() method inserts a new item in the stack and increments its counter size.
    * @param element
    */
    push(element) {
        this.items[this.count] = element;
        this.count++;
    }
    /**
    * The pop() method removes the last item in the stack and returns the element.
    * @return {any}
    */
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }
    /**
    * The peek() method returns the last item in the stack.
    * @return {any}
    */
    peek() {
        return this.items[this.count - 1];
    }
    /**
    * The size() method returns the stack's lenght.
    * @return {number}
    */
    size() {
        return this.count;
    }
    /**
    * The isEmpty() method checks if the stack is empty or not.
    * @return {boolean}
    */
    isEmpty() {
        return this.count === 0;
    }
    /**
    * The clear() method removes all the items in the stack and reset the size counter.
    * @return {void}
    */
    clear() {
        this.items = {};
        this.count = 0;
    }
    /**
    * The toString() method returns the string representation of the stack object.
    * @return {string}
    */
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[0]}`;
        for (let i = 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}
exports.default = Stack;
