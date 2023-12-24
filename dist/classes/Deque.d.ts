/**
 * Deque implementation class with basic operations.
 * @public
 */
export declare class Deque {
    count: number;
    lowestCount: number;
    items: Object;
    constructor();
    /**
    * The addFront() method inserts a new item in the front of the deque and increments its counter size.
    * @param element
    */
    addFront(element: any): void;
    /**
    * The addBack() method inserts a new item in the back of the deque and increments its counter size.
    * @param element
    */
    addBack(element: any): void;
    /**
    * The removeFront() method removes an item in the front of the deque and returns it.
    */
    removeFront(): any;
    /**
    * The removeBack() method removes an item in the back of the deque and returns it.
    */
    removeBack(): any;
    /**
    * The peekFront() method returns the item in the front of the deque.
    */
    peekFront(): any;
    /**
    * The peekBack() method returns the item in the back of the deque.
    */
    peekBack(): any;
    /**
    * The isEmpty() method verifies if the deque is empty.
    */
    isEmpty(): boolean;
    /**
    * The size() returns the size of the deque.
    */
    size(): number;
    /**
    * The clear() update the deque to its default properties.
    */
    clear(): void;
    /**
    * The toString() returns the string representation of the deque object.
    */
    toString(): string;
}
