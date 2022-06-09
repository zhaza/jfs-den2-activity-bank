const get = async () => {
  let city = document.getElementById("city").value;
  let request = `http://api.weatherapi.com/v1/current.json?key=b879833c9dc3491f8b8222128220706&q=${city}&aqi=no`
  let response = await fetch(request);
    if(!response.ok){
        throw Error(`There is an error with status ${response.status}`)
    }
  let weather = await response.json();
  console.log(weather);
  return weather;
};


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
  let string = current.current.condition.icon
  let image = string.slice(21)
  console.log(image)
  let index = new Spot(name, tempF, conditionText, image);
  return index;
};

const show = async () => {
  let input = await prepare();
  let place = document.getElementById("weather");
  let div = document.createElement("div");
  let h1 = document.createElement("h1");
  let img = document.createElement("img");
  let weather = Object.values(input);
  weather.pop();
  h1.innerHTML = weather.join(' ');
  img.src = `./${input.image}`;
  div.appendChild(h1);
  div.appendChild(img);
  place.innerHTML = div.innerHTML;
}

let button = document.querySelector("button");
let form = document.querySelector("form");
button.addEventListener("click", show);
form.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    show()
   }
});