/**
* @credits Loiane Groner
* Source: 'Estruturas de dados e algoritmos com Javascript'
*/
export declare class Node<T> {
    element: any;
    next: Node<T>;
    constructor(element: T, next?: Node<T>);
}
export declare class DoublyNode<T> extends Node<T> {
    prev: DoublyNode<T>;
    next: DoublyNode<T>;
    constructor(element: T, next?: DoublyNode<T>, prev?: DoublyNode<T>);
}
