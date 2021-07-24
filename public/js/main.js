let submitBtn = document.querySelector("#submitBtn");
let cityName = document.querySelector("#cityName");
let city_name = document.querySelector("#city_name");
let temp = document.querySelector("#temp");
let temp_status = document.querySelector("#temp_status");
let dataHide = document.querySelector(".data_hide");

let getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;

  if (cityVal === "") {
    city_name.innerText = `Plz write the name before search`;
    dataHide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=2943b859c846f67989b8f3c1652e2fee`;

      let response = await fetch(url);
      let data = await response.json();
      let arrData = [data];

      city_name.innerText = `${arrData[0].name} ,${arrData[0].sys.country}`;
      temp.innerText = arrData[0].main.temp;
      let tempMood = arrData[0].weather[0].main;

      if (tempMood === "Clear") {
        temp_status.innerHTML =
          '<i class="fas fa-sun style="color: #e666c8;"></i>';
      } else if (tempMood === "Clouds") {
        temp_status.innerHTML =
          '<i class="fas fa-cloud style="color: #f1f2f6;"></i>';
      } else if (tempMood === "Rain") {
        temp_status.innerHTML =
          '<i class="fas fa-cloud-rain style="color: #a4b0be;"></i>';
      } else {
        temp_status.innerHTML =
          '<i class="fas fa-sun style="color: #e666c8;"></i>';
      }

      dataHide.classList.remove("data_hide");
    } catch {
      city_name.innerText = `Plz enter the city name properly`;
      dataHide.classList.add("data_hide");
    }
  }
};

submitBtn.addEventListener("click", getInfo);


let getDay = () => {
    let weekDay = ['Sunday','Monday','Tueday','Wedusday','Thursday','Friday','Saturday'];

    let currentDay = new Date().getDay();
    let day = weekDay[currentDay];

    document.querySelector("#day").innerText = day;

};

getDay();


let getMonth = () => {
    let month = [
        'JAN',
        'FEB',
        'MAR',
        'APR',
        'MAY',
        'JUNE',
        'JULY',
        'AUG',
        'SEP',
        'OCT',
        'NOV',
        'DEC'
    ];
    
    let currentMonth = new Date().getMonth();
    let curMonth = month[currentMonth];


    document.querySelector("#today_Date").innerText = `${new Date().getDate()} ${curMonth}`;

};

getMonth();