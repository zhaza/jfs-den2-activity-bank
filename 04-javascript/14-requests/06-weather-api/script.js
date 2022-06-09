// FETCH from API
const get = async () => {
  let city = document.getElementById("city").value;
  let request = `http://api.weatherapi.com/v1/current.json?key=b879833c9dc3491f8b8222128220706&q=${city}&aqi=no`;
  let response = await fetch(request);
  if (!response.ok) {
    throw Error(`There is an error with status ${response.status}`);
  }
  let weather = await response.json();
  // bonus-buttons
  let bonus = document.getElementById('bonus-buttons');
  let button = document.createElement('button');
  let name = weather.location.name;
  button.innerText = name;
  button.id = name
  bonus.appendChild(button);
  return weather;
};

// SELECTIONS FROM FETCH into an Object
const prepare = async () => {
  class Spot {
    constructor(name, temp, condition, image) {
      this.name = name;
      this.temp = temp;
      this.condition = condition;
      this.image = image;
    }
  }
  let current = await get();
  let name = current.location.name;
  let tempF = `${current.current.temp_f}F&deg;`;
  let conditionText = current.current.condition.text;
  let string = current.current.condition.icon;
  let image = string.slice(21);
  let newSpot = new Spot(name, tempF, conditionText, image);
  window.localStorage.setItem(newSpot.name, JSON.stringify(newSpot));
  return newSpot;
};

// DISPLAY weather object
const show = async () => {
  let input = await prepare();
  let place = document.getElementById("weather");
  let div = document.createElement("div");
  let h1 = document.createElement("h1");
  let img = document.createElement("img");
  let weather = Object.values(input);
  weather.pop();
  h1.innerHTML = weather.join(" ");
  img.src = `./${input.image}`;
  div.appendChild(h1);
  div.appendChild(img);
  place.innerHTML = div.innerHTML;
  return place;
};

// EVENT LISTENERS
let form = document.querySelector("form");
form.addEventListener("click", show);
form.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    show();
  }
});

let bonus = document.getElementById('bonus-buttons');
bonus.forEach(element => {
  let button = document.getElementById()
});
