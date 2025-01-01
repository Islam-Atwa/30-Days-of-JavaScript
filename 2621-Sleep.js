/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    await new Promise ((resolve, reject) => {
        setTimeout(resolve, millis)
    })
}

// solution video : https://www.youtube.com/watch?v=P0D9Z6H7O00
/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */