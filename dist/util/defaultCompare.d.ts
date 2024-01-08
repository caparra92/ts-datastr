export declare const Compare: {
    LESS_THAN: number;
    BIGGER_THAN: number;
};
export declare function defaultCompare<T>(a: T, b: T): number;
export declare function reverseCompare(compareFn: any): (a: any, b: any) => any;
