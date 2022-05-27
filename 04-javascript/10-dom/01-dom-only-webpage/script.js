function heading() {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.innerHTML = "Yo!"
    const body = document.querySelector('body');
    document.body.appendChild(div);
    div.appendChild(h1);
}

heading()
