"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoublyNode = exports.Node = void 0;
/**
* @credits Loiane Groner
* Source: 'Estruturas de dados e algoritmos com Javascript'
*/
class Node {
    constructor(element, next) {
        this.element = element;
        this.next = next !== null && next !== void 0 ? next : undefined;
    }
}
exports.Node = Node;
class DoublyNode extends Node {
    constructor(element, next, prev) {
        super(element, next);
        this.prev = prev;
    }
}
exports.DoublyNode = DoublyNode;
