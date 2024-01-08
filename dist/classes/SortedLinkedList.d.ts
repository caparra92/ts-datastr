/**
 * Sorted Linked List implementation class with basic operations.
 * @public
 */
import { defaultCompare } from "../util/defaultCompare";
import { defaultEquals } from "../util/defaultEquals";
import { LinkedList } from "./LinkedList";
export declare class SortedLinkedList<T> extends LinkedList<T> {
    compareFn: any;
    constructor(equalsFn?: typeof defaultEquals, compareFn?: typeof defaultCompare);
    /**
   * The insert() function inserts a new element into the linked list.
   * @param element
   * @param index
   * @return {boolean}
   */
    insert(element: any, index?: number): boolean;
    /**
   * The insertObj() function inserts a new object element into the linked list.
   * @param element
   * @param selectedKey
   * @return {undefined | boolean}
   */
    insertObj(element: any, selectedKey?: any): undefined | boolean;
    /**
   * The getIndexNextSortedElement() function returns the next sorted element index when passing and element as argumnent.
   * @param element
   * @return {number}
   */
    getIndexNextSortedElement(element: any): number;
    /**
  * The getIndexNextSortedElementByKey() function returns the next sorted element index when passing and element and a key as argumnent.
  * @param element
  * @return {number}
  */
    getIndexNextSortedElementByKey(element: any, key: any): number;
    /**
   * The isObject() function validates if the value passed is an object.
   * @param value
   * @return {boolean}
   */
    isObject(value: any): boolean;
}
