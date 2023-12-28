/**
 * Doubly Linked List implementation class with basic operations.
 * @public
 */
import { defaultEquals } from "../util/defaultEquals";
import { DoublyNode } from "../models/linked-list-models";
import { LinkedList } from "./LinkedList";
export declare class DoublyLinkedList<T> extends LinkedList<T> {
    tail: DoublyNode<T>;
    head: DoublyNode<T> | undefined;
    constructor(equalsFn?: typeof defaultEquals);
    /**
   * The insert() function inserts a new element into the linked list.
   * @param element
   * @param index
   * @return {boolean}
   */
    insert(element: any, index: any): boolean;
    /**
    * The removeAt() function removes an element by using its index.
    * @param index
    * @return {undefined | T}
    */
    removeAt(index: any): any;
}
