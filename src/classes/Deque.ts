/**
 * Deque implementation class with basic operations.
 * @public
 */
export class Deque {

    count: number
    lowestCount: number
    items: Object

    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    /**
    * The addFront() method inserts a new item in the front of the deque and increments its counter size.
    * @param element
    */
    addFront(element): void {
        if (this.isEmpty()) {
            this.addBack(element);
        } else if (this.lowestCount > 0) {
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        } else {
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1];
            }
            this.count++;
            this.lowestCount = 0;
            this.items[0] = element;
        }
    }

    /**
    * The addBack() method inserts a new item in the back of the deque and increments its counter size.
    * @param element
    */
    addBack(element): void {
        this.items[this.count] = element
        this.count++
    }

    /**
    * The removeFront() method removes an item in the front of the deque and returns it.
    */
    removeFront(): any {
        if(this.isEmpty()) {
            return undefined
        }
        const result =  this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }

    /**
    * The removeBack() method removes an item in the back of the deque and returns it.
    */
    removeBack(): any {
        if (this.isEmpty()) {
            return undefined
        }
        this.count--
        const result = this.items[this.count]
        delete this.items[this.count]
        return result
    }

    /**
    * The peekFront() method returns the item in the front of the deque.
    */
    peekFront(): any {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[this.lowestCount];
    }
    
    /**
    * The peekBack() method returns the item in the back of the deque.
    */
    peekBack() {
        return this.items[this.count - 1];
    }

    /**
    * The isEmpty() method verifies if the deque is empty.
    */
    isEmpty(): boolean {
        return this.size() === 0 
    }

    /**
    * The size() returns the size of the deque.
    */
    size(): number {
        return this.count - this.lowestCount 
    }

    /**
    * The clear() update the deque to its default properties.
    */
    clear(): void {
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }

    /**
    * The toString() returns the string representation of the deque object.
    */
    toString(): string {
        let objString: string = `${this.items[this.lowestCount]}`
        for(let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`
        }
        return objString
    }
}