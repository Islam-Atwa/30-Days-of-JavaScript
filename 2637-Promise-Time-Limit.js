/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {
        const originalFnPromise = fn (...args);

        const timeoutPromise = new Promise((resolve ,reject)=>{
            setTimeout(()=>{
                reject ("Time Limit Exceeded")
            },t);
        })
        return Promise.race([originalFnPromise, timeoutPromise]);

                    // Neetcode Soultion 
        // return new Promise(async (resolve, reject)=>{
        //     const id = setTimeout(()=> reject ("Time Limit Exceeded"),t);

        //     try {
        //         const res = await fn(...args);
        //         resolve(res);
        //     }catch (err){
        //         reject(err);
        //     }
        // });
    };
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */