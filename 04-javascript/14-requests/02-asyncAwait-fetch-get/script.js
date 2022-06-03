// fetch("https://reqres.in/api/users")
// .then(response => {
//     console.log(response);
//     return response.json();
// }).then(users => {
//     console.log(users);
// })

const requestUsers = async () => {
    let response = await fetch("https://reqres.in/api/users");
    let usersJson = await response.json();
    return usersJson;
}

requestUsers().then(users => {
    console.log(users);
})