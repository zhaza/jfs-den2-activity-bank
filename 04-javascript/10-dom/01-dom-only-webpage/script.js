
// * For this activity you will create a basic HTML website using only javascript. The website should be about a favorite type of food, or places, or music, or whatever you can think of.

// * You will need to use methods and properties like `.createElement()`, `.innerHTML`, and `.appendChild()`

// * Your website should have two sibling `<div>` elements in the `<body>`

// * The first "div" should have two children elements, an `<h1>` and a `<p>` element. The "h1" should be a heading for your page, the "p" should be a brief description of what your page is about.

// * The second "div" should also have two children elements, an `<img>` and a `<ul>` element. The "img" should be something related to your page. The "ul" should contain 4-5 children `<li>` elements about your page. You should use a loop for the "li" elements to prevent you from having to hardcode each item. This means you will need to create an array of what you want your "li" to be, so you can loop through it.

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
    img.src = "https://akns-images.eonline.com/eol_images/Entire_Site/2018619/rs_1024x1024-180719122106-1024-mcdonalds-fries.jpg?fit=inside%7C900:auto&output-quality=90"
    img.style.width = '200px'
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
