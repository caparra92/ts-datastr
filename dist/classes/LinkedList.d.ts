/**
 * Linked List implementation class with basic operations.
 * @public
 */
import { defaultEquals } from '../util/defaultEquals';
import { Node } from '../models/linked-list-models';
export declare class LinkedList<T> {
    count: number;
    head: Node<T> | undefined;
    equalFn: <T>(a: T, b: T) => boolean;
    constructor(equalsFn?: typeof defaultEquals);
    /**
    * The insert() function inserts a new element into the linked list.
    * @param element
    * @param index
    * @return {boolean}
    */
    insert(element: T, index: number): boolean;
    /**
   * The remove() function removes an element and returns its index.
   * @param element
   * @return {undefined | T}
   */
    remove(element: T): undefined | T;
    /**
    * The removeAt() function removes an element by using its index.
    * @param index
    * @return {undefined | T}
    */
    removeAt(index: number): undefined | T;
    /**
    * The getElementAt() function returns an element by using its index.
    * @param index
    * @return {undefined | Node<T>}
    */
    getElementAt(index: number): undefined | Node<T>;
    /**
    * The push() function inserts an element at the end of the linked list or at the head if it is empty.
    * @param element
    * @return {void}
    */
    push(element: T): void;
    /**
    * The indexOf() function return the index of the specified element.
    * @param element
    * @return {number}
    */
    indexOf(element: T): number;
    /**
    * The isEmpty() method verifies if the linked list is empty.
    *  @return {boolean}
    */
    isEmpty(): boolean;
    /**
    * The size() returns the size of the linked list.
    * @return {number}
    */
    size(): number;
    /**
    * The getHead() returns the head Node of the linked list.
    * @return {Node<T>}
    */
    getHead(): Node<T>;
    /**
    * The toString() returns the string representation of the deque object.
    * @return {string}
    */
    toString(): string;
}
