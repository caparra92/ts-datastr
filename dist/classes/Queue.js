"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
/**
 * Queue implementation class with basic operations.
 * @public
 */
class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    /**
    * The enqueue() method inserts a new item in the queue and increments its counter size.
    * @param element
    */
    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    }
    /**
    * The dequeue() method removes the first item in the queue and returns the modified object.
    */
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }
    /**
    * The peek() method returns the first item in queue.
    */
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    /**
    * The isEmpty() method validates if the queue is empty.
    */
    isEmpty() {
        return this.size() === 0;
    }
    /**
    * The size() method returns the queue's lenght.
    */
    size() {
        return this.count - this.lowestCount;
    }
    /**
    * The clear() method resets the queue to its initial values.
    */
    clear() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    /**
    * The toString() method returns the string representation of the queue object.
    */
    toString() {
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`;
        }
        return objString;
    }
}
exports.Queue = Queue;
