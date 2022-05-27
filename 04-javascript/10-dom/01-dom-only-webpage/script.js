const img = document.createElement('img');
const ul = document.createElement('ul');
const li = document.createElement('li');

function heading() {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    h1.innerHTML = "Yo!"
    p.innerHTML = "Lorem"
    document.body.appendChild(div);
    div.appendChild(h1);
    div.appendChild(p);
}
heading()

function main() {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const ul = document.createElement('ul');
    img.src = "https://duckduckgo.com/?t=ffab&q=fries&ia=images&iax=images&iai=https%3A%2F%2Fakns-images.eonline.com%2Feol_images%2FEntire_Site%2F2018619%2Frs_1024x1024-180719122106-1024-mcdonalds-fries.jpg%3Ffit%3Dinside%257C900%3Aauto%26output-quality%3D90"
    document.body.div
    div.appendChild(img);

    let favoriteFoods = ["Fries", "Sushi", "Uncrustables", "Cinnamon rolls", "Churros"];

    for (let food of favoriteFoods) {
        const li = document.createElement('li');
        li.innerHTML = food;
        ul.appendChild(li)
    }
    document.body.appendChild(div);
    div.appendChild(ul);
}

main();