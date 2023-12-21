"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    *
    * @param element
    */
    Stack.prototype.push = function (element) {
        this.items[this.count] = element;
        this.count++;
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        var result = this.items[this.count];
        delete this.items[this.count];
        return result;
    };
    Stack.prototype.peek = function () {
        return this.items[this.count - 1];
    };
    Stack.prototype.size = function () {
        return this.count;
    };
    Stack.prototype.isEmpty = function () {
        return this.count === 0;
    };
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
exports.default = Stack;
