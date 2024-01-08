"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortedLinkedList = void 0;
/**
 * Sorted Linked List implementation class with basic operations.
 * @public
 */
const defaultCompare_1 = require("../util/defaultCompare");
const defaultEquals_1 = require("../util/defaultEquals");
const LinkedList_1 = require("./LinkedList");
class SortedLinkedList extends LinkedList_1.LinkedList {
    constructor(equalsFn = defaultEquals_1.defaultEquals, compareFn = defaultCompare_1.defaultCompare) {
        super(equalsFn);
        this.compareFn = compareFn;
    }
    /**
   * The insert() function inserts a new element into the linked list.
   * @param element
   * @param index
   * @return {boolean}
   */
    insert(element, index = 0) {
        if (this.isEmpty()) {
            return super.insert(element, 0);
        }
        const pos = this.getIndexNextSortedElement(element);
        return super.insert(element, pos);
    }
    /**
   * The insertObj() function inserts a new object element into the linked list.
   * @param element
   * @param selectedKey
   * @return {undefined | boolean}
   */
    insertObj(element, selectedKey = null) {
        if (this.isEmpty()) {
            return super.insert(element, 0);
        }
        if (this.isObject(element)) {
            if (element.hasOwnProperty(selectedKey)) {
                //let key = selectedKey.replace(/['"]+/g, '');
                const pos = this.getIndexNextSortedElementByKey(element, selectedKey);
                return super.insert(element, pos);
            }
        }
        return undefined;
    }
    /**
   * The getIndexNextSortedElement() function returns the next sorted element index when passing and element as argumnent.
   * @param element
   * @return {number}
   */
    getIndexNextSortedElement(element) {
        let current = this.head;
        let i = 0;
        for (; i < this.size() && current; i++) {
            const comp = this.compareFn(element, current.element);
            if (comp === defaultCompare_1.Compare.LESS_THAN) {
                return i;
            }
            current = current.next;
        }
        return i;
    }
    /**
  * The getIndexNextSortedElementByKey() function returns the next sorted element index when passing and element and a key as argumnent.
  * @param element
  * @return {number}
  */
    getIndexNextSortedElementByKey(element, key) {
        let current = this.head;
        let i = 0;
        for (; i < this.size() && current; i++) {
            const comp = this.compareFn(element[key], current.element[key]);
            if (comp === defaultCompare_1.Compare.BIGGER_THAN) {
                return i;
            }
            current = current.next;
        }
        return i;
    }
    /**
   * The isObject() function validates if the value passed is an object.
   * @param value
   * @return {boolean}
   */
    isObject(value) {
        return (typeof value === 'object' &&
            value !== null &&
            !Array.isArray(value));
    }
}
exports.SortedLinkedList = SortedLinkedList;
