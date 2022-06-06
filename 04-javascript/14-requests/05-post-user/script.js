const put = async () => {
    let newName = document.getElementById('name');
    let newJob = document.getElementById('job');
    let response = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: newName,
            job: newJob
        })
    })
    if(!response.ok){
        throw Error(`There is an error with status ${response.status}`)
    }
    let usersJson = response.json();
    let h1 = document.createElement('h1');
    h1.innerText = `${newName.value} ${newJob.value}`;
    document.body.appendChild(h1);
    return usersJson.data;
}

let button = document.querySelector('button');
button.addEventListener('click', put);