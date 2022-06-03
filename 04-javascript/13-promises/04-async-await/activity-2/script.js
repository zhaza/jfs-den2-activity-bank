// Refactor the following code to use async..await

function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making Request to ${location}`);
        if (location === "Google") {
            resolve("Google says hi");
        } else {
            reject("We can only talk to Google");
        }
    });
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log("Processing response");
        resolve(`Extra Information + ${response}`);
    });
}

async function request() {
    try {
        const response = await makeRequest('California');
        console.log(response);
    }
    catch (err) {
    console.log(err);
    }
    try {
        const response = await processRequest('jammed');
        console.log(response);
    }
    catch (err) {
    console.log(err);
    }
}

request();