"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoublyLinkedList = void 0;
/**
 * Doubly Linked List implementation class with basic operations.
 * @public
 */
const defaultEquals_1 = require("../util/defaultEquals");
const linked_list_models_1 = require("../models/linked-list-models");
const LinkedList_1 = require("./LinkedList");
class DoublyLinkedList extends LinkedList_1.LinkedList {
    constructor(equalsFn = defaultEquals_1.defaultEquals) {
        super(equalsFn);
        this.tail = undefined;
    }
    /**
   * The insert() function inserts a new element into the linked list.
   * @param element
   * @param index
   * @return {boolean}
   */
    insert(element, index) {
        if (index >= 0 && index < this.count) {
            const node = new linked_list_models_1.DoublyNode(element);
            let current = this.head;
            if (index === 0) {
                if (this.head === null) {
                    this.head = node;
                    this.tail = node;
                }
                else {
                    node.next = this.head;
                    current.prev = node;
                    this.head = node;
                }
            }
            else if (index === this.count) {
                current = this.tail;
                this.tail = node;
                current.next = node;
                node.prev = current;
            }
            else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = node;
                current.prev = node;
                node.next = current;
                node.prev = previous;
            }
            this.count++;
            return true;
        }
        return false;
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
                if (this.count === 1) {
                    this.tail = undefined;
                }
                else {
                    this.head.prev = undefined;
                }
            }
            else if (index === this.count - 1) {
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = undefined;
            }
            else {
                let previous = this.getElementAt(index - 1);
                current = this.getElementAt(index);
                previous = current.prev;
                previous.next = current.next;
                current.next.prev = previous;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
}
exports.DoublyLinkedList = DoublyLinkedList;
