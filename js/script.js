//https://api.openweathermap.org/data/2.5/solar_radiation?lat=53.2734&lon=-7.77832031&appid=13ae39032acef1f0b90e3908fa895646

let i = 0;   
let k = 0; 

const select2 = new ItcCustomSelect('#select-2', {
    //name: 'Please enter city', // значение атрибута name у кнопки
    //targetValue: 'Please enter city', // значение по умолчанию
    options: [['Berlin', 'Berlin'], ['Lviv', 'Lviv'], ['London', 'London'], ['Ottawa', 'Ottawa'], ['Sydney', 'Sydney'], ['Moscow', 'Moscow'], ['Nagur', 'Nagur'], ['Yueyang', 'Yueyang'], ['Bangui', 'Bangui'], ['Guilin', 'Guilin']], // опции
  });

 
  document.querySelector('#select-2').addEventListener('itc.select.change', (e) => {
    
    const btn = e.target.querySelector('.itc-select__toggle');
    const selected = e.target.querySelector('.itc-select__option_selected');
    const text = selected ? selected.textContent : '';

 
 
    function showWeather() {
        let inp = text;
        let location = ['Berlin', 'Lviv', 'London', 'Ottawa', 'Sydney', 'Moscow', 'Nagur', 'Yueyang', 'Bangui', 'Guilin'];
    
    for (i = 0; i < location.length; i++) {
        if (inp == location[i]) {
            console.log(location[i]);
            getAir();
            return location[i];
        }
    }
}


function getAir() {
        location[0] = 'http://api.openweathermap.org/data/2.5/air_pollution?lat=44.4688795&lon=-71.1836547&appid=13ae39032acef1f0b90e3908fa895646';
        location[1] = 'http://api.openweathermap.org/data/2.5/air_pollution?lat=49.841952&lon=24.0315921&appid=13ae39032acef1f0b90e3908fa895646';
        location[2] = 'http://api.openweathermap.org/data/2.5/air_pollution?lat=37.1289771&lon=-84.0832646&appid=13ae39032acef1f0b90e3908fa895646';
        location[3] = 'http://api.openweathermap.org/data/2.5/air_pollution?lat=45.4208777&lon=-75.6901106&appid=13ae39032acef1f0b90e3908fa895646';
        location[4] = 'http://api.openweathermap.org/data/2.5/air_pollution?lat=-33.8698439&lon=151.2082848&appid=13ae39032acef1f0b90e3908fa895646';
        location[5] = 'http://api.openweathermap.org/data/2.5/air_pollution?lat=55.7504461&lon=37.6174943&appid=13ae39032acef1f0b90e3908fa895646';
        location[6] = 'http://api.openweathermap.org/data/2.5/air_pollution?lat=16.3650736&lon=78.285935&appid=13ae39032acef1f0b90e3908fa895646';//Nagur
        location[7] = 'http://api.openweathermap.org/data/2.5/air_pollution?lat=29.1461421&lon=113.1104561&appid=13ae39032acef1f0b90e3908fa895646';//Yueyang
        location[8] = 'http://api.openweathermap.org/data/2.5/air_pollution?lat=18.5367387&lon=120.7657563&appid=13ae39032acef1f0b90e3908fa895646';//Bangui
        location[9] = 'http://api.openweathermap.org/data/2.5/air_pollution?lat=29.9008272&lon=106.4094271&appid=13ae39032acef1f0b90e3908fa895646';//Guilin

        //location[11] = 'http://api.openweathermap.org/geo/1.0/direct?q=Guilin&limit=5&appid=13ae39032acef1f0b90e3908fa895646';

    //let air = 'http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=13ae39032acef1f0b90e3908fa895646';
    //для тестирования и последующего добавления новых локаций

    fetch(location[i])
.then(function (resp) { return resp.json() })
.then(function (dataR) {
    console.log(dataR);
    document.querySelector('.pm10').textContent = dataR.list[0].components.pm10;
    document.querySelector('.pm2_5').textContent = dataR.list[0].components.pm2_5;
    document.querySelector('.nh3').textContent = dataR.list[0].components.nh3;
    document.querySelector('.no').textContent = dataR.list[0].components.no2;
    document.querySelector('.so2').textContent = dataR.list[0].components.so2;
    document.querySelector('.co').textContent = dataR.list[0].components.co;
    document.querySelector('.o3').textContent = dataR.list[0].components.o3;
    document.querySelector('.aqiP').textContent = dataR.list[0].main.aqi;


    
    
})

fetch(location[i])
.then(function (resp) { return resp.json() })
.then(function (aqiR) {
    let arAQI = {
        'green' : 'хорошо',
        'yellow' : 'удовлетворительно',
        'orange' : 'умеренно',
        'red' : 'плохо',
        'purple' : 'очень плохо'
    }
    let arAqi = ['хорошо', 'удовлетворительно', 'умеренно', 'плохо', 'очень плохо']
    let aqi = aqiR.list[0].main.aqi;
    let outAqi = document.querySelector('.ind');
    let colorAqi = document.querySelector('.indicator');
    let smileAqi = document.querySelector('.imageR');
    let descriptionAqi = document.querySelector('.description');

    switch (aqi) {
        case 1:
            outAqi.innerHTML = 'хорошо';
            colorAqi.style.backgroundColor = 'green';
            descriptionAqi.innerHTML = 'Качество воздуха считается удовлетворительным, и загрязнение воздуха представляется незначительным в пределах нормы.';
            break;
        case 2:
            outAqi.innerHTML = 'удовлетворительно';
            colorAqi.style.backgroundColor = 'yellow';
            descriptionAqi.innerHTML = 'Качество воздуха является приемлемым; однако некоторые загрязнители могут представлять опасность для людей, являющихся особо чувствительным к загрязнению воздуха.';
            break;
        case 3:
            outAqi.innerHTML = 'умеренно';
            colorAqi.style.backgroundColor = 'orange';
            descriptionAqi.innerHTML = '	Может оказывать эффект на особо чувствительную группу лиц. На среднего представителя не оказывает видимого воздействия.';
            break;
        case 4:
            outAqi.innerHTML = 'плохо';
            colorAqi.style.backgroundColor = 'red';
            descriptionAqi.innerHTML = 'Каждый может начать испытывать последствия для своего здоровья; особо чувствительные люди могут испытывать более серьезные последствия';
            break;
        case 5:
            outAqi.innerHTML = 'очень плохо';
            colorAqi.style.backgroundColor = 'purple';
            descriptionAqi.innerHTML = 'Опасность для здоровья: каждый человек может испытывать более серьезные последствия для здоровья';
            break;
            
    }

    console.log(aqi);
})

    .catch(function () {

    });

  }

  showWeather();
  

  });

  //main.aqi Индекс качества воздуха. Возможные значения: 1, 2, 3, 4, 5. Где 1 = хорошо, 2 = удовлетворительно, 3 = умеренно, 4 = плохо, 5 = очень плохо.


    