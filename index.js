//1-misol
//Vazifa: Ushbu API orqali barcha postlarni olish va har bir postning title va body qismini konsolga chiqarish.

const btn = document.getElementById("btn");

btn &&
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    })
      .then(function (response) {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then(function (data) {
        data.forEach(function (post) {
          console.log(post.title);
          console.log(post.body);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  });

//2-misol
//Vazifa: API orqali bitta random foydalanuvchining ismi, emaili va manzilini (address) konsolga chiqarish.

const btn2 = document.getElementById("btn2");

btn2 &&
  btn2.addEventListener("click", function (event) {
    event.preventDefault();
    fetch("https://randomuser.me/api/", {
      method: "GET",
    })
      .then(function (response) {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error(`Xatolik: ${response.status}`);
        }
      })
      .then(function (data) {
        const user = data.results[0];
        console.log(` ${user.name.first} ${user.name.last}`);
        console.log(user.email);
        console.log(
          ` ${user.location.street}, ${user.location.city}, ${user.location.country}`
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  });

//3-misol
//Vazifa: API orqali dunyo bo'yicha COVID-19 statistik ma'lumotlarini olish va quyidagi ma'lumotlarni konsolga chiqarish:

const btn3 = document.getElementById("btn3");

btn3 &&
  btn3.addEventListener("click", function (event) {
    event.preventDefault();
    fetch("https://disease.sh/v3/covid-19/all", {
      method: "GET",
    })
      .then(function (response) {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then(function (data) {
        console.log(data.cases);
        console.log(data.recovered);
        console.log(data.deaths);
        console.log(data.active);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

//4-misol
//Bitcoinning joriy USD narxini (rate) olish va konsolga chiqarish.

const btn4 = document.getElementById("btn4");

btn4 &&
  btn4.addEventListener("click", function (event) {
    event.preventDefault();
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json", {
      method: "GET",
    })
      .then(function (response) {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then(function (data) {
        console.log(data.bpi.USD.rate);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

//5-misol
//Shahar nomi (city) parametrini API'ga berib, o'sha shahardagi hozirgi haroratni (temperature) konsolga chiqarish

const btn5 = document.getElementById("btn5");

btn5 &&
  btn5.addEventListener("click", function (event) {
    event.preventDefault();
    const city = "";

    fetch(`https://goweather.herokuapp.com/weather/Fergana`, {
      method: "GET",
    })
      .then(function (response) {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then(function (data) {
        console.log(data.temperature);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
