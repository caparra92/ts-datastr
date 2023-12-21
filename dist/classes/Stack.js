"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
/**
 * Stack implementation class with basic operations.
 * @public
 */
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = {};
        this.count = 0;
    }
    /**
    * The push() method inserts a new item in the stack and increments its counter size.
    * @param element
    */
    Stack.prototype.push = function (element) {
        this.items[this.count] = element;
        this.count++;
    };
    /**
    * The pop() method removes the last item in the stack and returns the element.
    * @return {any}
    */
    Stack.prototype.pop = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        var result = this.items[this.count];
        delete this.items[this.count];
        return result;
    };
    /**
    * The peek() method returns the last item in the stack.
    * @return {any}
    */
    Stack.prototype.peek = function () {
        return this.items[this.count - 1];
    };
    /**
    * The size() method returns the stack's lenght.
    * @return {number}
    */
    Stack.prototype.size = function () {
        return this.count;
    };
    /**
    * The isEmpty() method checks if the stack is empty or not.
    * @return {boolean}
    */
    Stack.prototype.isEmpty = function () {
        return this.count === 0;
    };
    /**
    * The clear() method removes all the items in the stack and reset the size counter.
    * @return {void}
    */
    Stack.prototype.clear = function () {
        this.items = {};
        this.count = 0;
    };
    /**
    * The toString() method returns the string representation of the stack object.
    * @return {string}
    */
    Stack.prototype.toString = function () {
        if (this.isEmpty()) {
            return '';
        }
        var objString = "".concat(this.items[0]);
        for (var i = 1; i < this.count; i++) {
            objString = "".concat(objString, ",").concat(this.items[i]);
        }
        return objString;
    };
    return Stack;
}());
exports.Stack = Stack;
