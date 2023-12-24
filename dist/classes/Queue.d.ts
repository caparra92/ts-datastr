/**
 * Queue implementation class with basic operations.
 * @public
 */
export declare class Queue {
    items: Object;
    lowestCount: number;
    count: number;
    constructor();
    /**
    * The enqueue() method inserts a new item in the queue and increments its counter size.
    * @param element
    */
    enqueue(element: any): void;
    /**
    * The dequeue() method removes the first item in the queue and returns the modified object.
    */
    dequeue(): undefined | Object;
    /**
    * The peek() method returns the first item in queue.
    */
    peek(): undefined | Object;
    /**
    * The isEmpty() method validates if the queue is empty.
    */
    isEmpty(): boolean;
    /**
    * The size() method returns the queue's lenght.
    */
    size(): number;
    /**
    * The clear() method resets the queue to its initial values.
    */
    clear(): void;
    /**
    * The toString() method returns the string representation of the queue object.
    */
    toString(): string;
}
