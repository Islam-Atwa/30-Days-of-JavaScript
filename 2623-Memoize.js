/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const MemoObject = {};
    return function(...args) {
        const key = String (args);

        if (key in MemoObject){
            return MemoObject[key];
        }

        const result = fn(... args);
        MemoObject[key] = result ;

        return result;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */