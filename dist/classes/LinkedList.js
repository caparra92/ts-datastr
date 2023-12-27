"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
/**
 * Linked List implementation class with basic operations.
 * @public
 */
const defaultEquals_1 = require("../util/defaultEquals");
const linked_list_models_1 = require("../models/linked-list-models");
class LinkedList {
    constructor(equalsFn = defaultEquals_1.defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalFn = equalsFn;
    }
    /**
    * The insert() function inserts a new element into the linked list.
    * @param element
    * @param index
    * @return {boolean}
    */
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new linked_list_models_1.Node(element);
            if (index === 0) {
                const current = this.head;
                node.next = current;
                this.head = node;
            }
            else {
                const previous = this.getElementAt(index - 1);
                const current = previous.next;
                node.next = current;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }
    /**
   * The remove() function removes an element and returns its index.
   * @param element
   * @return {undefined | T}
   */
    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }
    /**
    * The removeAt() function removes an element by using its index.
    * @param index
    * @return {undefined | T}
    */
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                this.head = current.next;
            }
            else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
    /**
    * The getElementAt() function returns an element by using its index.
    * @param index
    * @return {undefined | Node<T>}
    */
    getElementAt(index) {
        if (index >= 0 && index <= this.count) {
            let current = this.head;
            for (let i = 0; i < index && current != null; i++) {
                current = current.next;
            }
            return current;
        }
        return undefined;
    }
    /**
    * The push() function inserts an element at the end of the linked list or at the head if it is empty.
    * @param element
    * @return {void}
    */
    push(element) {
        const node = new linked_list_models_1.Node(element);
        let current;
        if (this.head == null || this.head == undefined) {
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }
    /**
    * The indexOf() function return the index of the specified element.
    * @param element
    * @return {number}
    */
    indexOf(element) {
        let current = this.head;
        for (let i = 0; i < this.count && current != null; i++) {
            if (this.equalFn(element, current.element)) {
                return i;
            }
            current = current.next;
        }
        return -1;
    }
    /**
    * The isEmpty() method verifies if the linked list is empty.
    *  @return {boolean}
    */
    isEmpty() {
        return this.size() === 0;
    }
    /**
    * The size() returns the size of the linked list.
    * @return {number}
    */
    size() {
        return this.count;
    }
    /**
    * The getHead() returns the head Node of the linked list.
    * @return {Node<T>}
    */
    getHead() {
        return this.head;
    }
    /**
    * The toString() returns the string representation of the deque object.
    * @return {string}
    */
    toString() {
        if (this.head === null) {
            return '';
        }
        let objString = `${this.head.element}`;
        let current = this.head.next;
        for (let i = 0; i < this.size() && current != null; i++) {
            objString += `${objString}, ${current.element}`;
            current = current.next;
        }
        return objString;
    }
}
exports.LinkedList = LinkedList;
