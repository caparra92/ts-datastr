/**
 * Stack implementation class with basic operations.
 * @public
 */
export default class Stack {
    items: Object
    count: number

    constructor() {
      this.items = {}
      this.count = 0
    }
    
    /**
    * 
    * @param element
    */
    push(element: any):void {
      this.items[this.count] = element
      this.count++
    }
    
    pop(): any {
      if(this.isEmpty()) {
        return undefined
      }
      this.count--
      const result = this.items[this.count]
      delete this.items[this.count]
      return result
    }
    
    peek(): any {
      return this.items[this.count-1]
    }
    
    size(): number {
      return this.count
    }
    
    isEmpty(): boolean {
      return this.count === 0
    }
    
    clear(): void {
      this.items = {}
      this.count = 0
    }
    
    /**
    * The toString() method returns the string representation of the stack object.
    * @return {string}
    */
    toString():string {
      if(this.isEmpty()) {
        return ''
      }
      let objString:string = `${this.items[0]}`
      for(let i = 1; i < this.count; i++){
        objString = `${objString},${this.items[i]}`
      }
      return objString
    }
  }