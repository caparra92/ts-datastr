/**
 * Stack implementation class with basic operations.
 * @public
 */
export declare class Stack<T> {
    items: Object;
    count: number;
    constructor();
    /**
    * The push() method inserts a new item in the stack and increments its counter size.
    * @param element
    */
    push(element: T): void;
    /**
    * The pop() method removes the last item in the stack and returns the element.
    * @return {undefined | T}
    */
    pop(): undefined | T;
    /**
    * The peek() method returns the last item in the stack.
    * @return {T}
    */
    peek(): T;
    /**
    * The size() method returns the stack's lenght.
    * @return {number}
    */
    size(): number;
    /**
    * The isEmpty() method checks if the stack is empty or not.
    * @return {boolean}
    */
    isEmpty(): boolean;
    /**
    * The clear() method removes all the items in the stack and reset the size counter.
    * @return {void}
    */
    clear(): void;
    /**
    * The toString() method returns the string representation of the stack object.
    * @return {string}
    */
    toString(): string;
}
