/**
 * Sorted Linked List implementation class with basic operations.
 * @public
 */
import { Compare, defaultCompare } from "../util/defaultCompare";
import { defaultEquals } from "../util/defaultEquals";
import { LinkedList } from "./LinkedList";

export class SortedLinkedList<T> extends LinkedList<T> {
    compareFn;
    constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
        super(equalsFn);
        this.compareFn = compareFn;
    }

    /**
   * The insert() function inserts a new element into the linked list.
   * @param element
   * @param index
   * @return {boolean}
   */
    insert(element, index = 0): boolean  {
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
    insertObj(element, selectedKey = null): undefined | boolean {
        if (this.isEmpty()) {
            return super.insert(element, 0);
        }
        if(this.isObject(element)) {
            if(element.hasOwnProperty(selectedKey)) {
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
    getIndexNextSortedElement(element): number {
        let current = this.head;
        let i = 0;
        for (; i < this.size() && current; i++) {
            const comp = this.compareFn(element, current.element);
            if (comp === Compare.LESS_THAN) {
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
            if (comp === Compare.BIGGER_THAN) {
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
    isObject(value): boolean {
        return (
          typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value)
        );
      }
}