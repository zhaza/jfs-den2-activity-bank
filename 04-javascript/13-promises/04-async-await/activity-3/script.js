function run(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making Request to ${location}`);
        if (location === "no") {
            resolve("LET'S FIGHT!");
        } else {
            reject("RUN FORREST! RUN!");
        }
    });
}

function fight(message) {
    return new Promise((resolve, reject) => {
        console.log('working')
        if (message === "LET'S FIGHT!") {
            console.log("Processing optimal attack pattern");
            resolve('Game master commences fight: Player one attacks first');
        } else {
            reject('Welcome Home');
        }
    });
}

async function demo() {
    try {
        const response = await run('yes')
        console.log(response);
        const newResponse = await fight(response);
        console.log(newResponse);
    } catch (error) {
        console.log(error);
    }
}
demo();