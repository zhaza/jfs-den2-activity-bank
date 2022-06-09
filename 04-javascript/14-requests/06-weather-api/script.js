

const put = async () => {
  let city = document.getElementById("city").value;
  let request = `http://api.weatherapi.com/v1/current.json?key=b879833c9dc3491f8b8222128220706&q=${city}&aqi=no`
  let response = await fetch(request);
  console.log(response);
    if(!response.ok){
        throw Error(`There is an error with status ${response.status}`)
    }
  let weather = await response.json();
  console.log(weather);
  // let curWeatherJson = response.json();
  // let h1 = document.createElement('h1');
  // h1.innerText = `${newName.value} ${newJob.value}`;
  // document.body.appendChild(h1);
  return weather;
};

put();

const show = async () => {
  let location = document.getElementById("weather");
  let div = document.createElement("div");
  let h1 = document.createElement("h1");
  let current = await put();
  h1.innerHTML = current.location.name;
  h1.innerHTML = current.location.name;
  h1.innerHTML = current.location.name;
  div.appendChild(h1);
  location.appendChild(div);
};

let button = document.querySelector("button");
button.addEventListener("click", show);
