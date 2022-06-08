

const put = async () => {
  let city = document.getElementById("city").value;
  let response = await fetch(
    'http://api.weatherapi.com/v1/current.json?key=b879833c9dc3491f8b8222128220706&q=London&aqi=no');
    if(!response.ok){
        throw Error(`There is an error with status ${response.status}`)
    }
  // let curWeatherJson = response.json();
  // let h1 = document.createElement('h1');
  // h1.innerText = `${newName.value} ${newJob.value}`;
  // document.body.appendChild(h1);
  return response;
};

const show = response => {
  let weather = document.getElementById("weather");
  let div = document.createElement("div");
  let h1 = document.createElement("h1");
  h1.innerHTML = response;
  console.log(response)
  div.appendChild(h1);
  weather.appendChild(div);
};

let button = document.querySelector("button");
button.addEventListener("click", show);
