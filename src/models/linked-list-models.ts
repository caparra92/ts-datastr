/**
* @credits Loiane Groner
* Source: 'Estruturas de dados e algoritmos com Javascript'
*/
export class Node<T> {
    element: any
    next: Node<T>

    constructor(element: T, next?: Node<T>) {
        this.element = element;
        this.next = next ?? undefined;
    }
}

export class DoublyNode<T> extends Node<T>{
    prev: DoublyNode<T>

    constructor(element: T, next?: DoublyNode<T>, prev?: DoublyNode<T>) {
        super(element, next);
        this.prev = prev;
    }
}