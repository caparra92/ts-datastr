"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseCompare = exports.defaultCompare = exports.Compare = void 0;
exports.Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
};
function defaultCompare(a, b) {
    if (a === b) {
        return 0;
    }
    return a < b ? exports.Compare.LESS_THAN : exports.Compare.BIGGER_THAN;
}
exports.defaultCompare = defaultCompare;
;
function reverseCompare(compareFn) {
    return (a, b) => compareFn(b, a);
}
exports.reverseCompare = reverseCompare;
