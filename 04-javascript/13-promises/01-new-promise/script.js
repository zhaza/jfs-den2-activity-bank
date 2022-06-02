
function printPromise() {
    let message = Math.floor(Math.random() * 4);
    const chicken = new Promise((resolve, reject) => {
        if (message <= 1 && message >= 0) {
            resolve(message)
        } else {
            reject(message)
        }
    })
    return chicken;
}



printPromise().then((resolve) => {
    console.log(`You rolled ${resolve}. Perfect!`)
}).catch((reject) => {
    console.log(`You rolled ${reject}. Too high!`)
})