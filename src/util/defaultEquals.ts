/**
* The defaultEquals function returns a boolean value when comparing two elements.
* @param a
* @param b
* @return {boolean}
*/
export function defaultEquals<T>(a: T, b: T): boolean {
    return a === b;
}