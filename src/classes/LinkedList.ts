/**
 * Linked List implementation class with basic operations.
 * @public
 */
import { defaultEquals } from '../util/defaultEquals';
import { Node } from '../models/linked-list-models';

export class LinkedList<T> {
  count: number
  head: Node<T> | undefined
  equalFn: <T>(a: T, b: T) => boolean;

  constructor(equalsFn = defaultEquals) {
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
  insert(element: T, index: number): boolean {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        const current: Node<T> = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous: Node<T> = this.getElementAt(index - 1);
        const current: Node<T> = previous.next;
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
  remove(element: T): undefined | T {
    const index: number = this.indexOf(element);
    return this.removeAt(index);
  }

  /**
  * The removeAt() function removes an element by using its index.
  * @param index
  * @return {undefined | T}
  */
  removeAt(index: number): undefined | T {
    if(index >= 0 && index < this.count) {
      let current: Node<T> = this.head;
      if(index === 0) {
        this.head = current.next;
      } else {
        const previous: any = this.getElementAt(index - 1);
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
  getElementAt(index: number): undefined | Node<T> {
    if(index >= 0 && index <= this.count) {
      let current: Node<T> = this.head;
      for(let i = 0; i < index && current != null; i++) {
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
  push(element: T): void {
    const node: Node<T> = new Node(element);
    let current: Node<T>;
    if(this.head == null || this.head == undefined){
      this.head = node;
    } else {
      current = this.head;
      while(current.next != null){
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
  indexOf(element: T): number {
    let current: Node<T> = this.head;
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
  isEmpty(): boolean {
    return this.size() === 0;
  }

  /**
  * The size() returns the size of the linked list.
  * @return {number}
  */
  size(): number {
    return this.count;
  }

  /**
  * The getHead() returns the head Node of the linked list.
  * @return {Node<T>}
  */
  getHead(): Node<T> {
    return this.head;
  }

  /**
  * The toString() returns the string representation of the deque object.
  * @return {string}
  */
  toString(): string {
    if(this.head === null) {
      return '';
    }
    let objString: string = `${this.head.element}`;
    let current: any = this.head.next;
    for(let i = 0; i < this.size() && current != null; i++) {
      objString += `${objString}, ${current.element}`;
      current = current.next;
    }
    return objString;
  }
}