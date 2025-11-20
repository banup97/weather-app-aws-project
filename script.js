const apiKey = "1b5a0559cd478d3872b32efeefe4fc70"; // 
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const currentDiv = document.getElementById('current');

let chart; // Chart.js instance

searchBtn.addEventListener('click', ()=> {
  const city = cityInput.value.trim();
  if (!city) return alert('Please enter city name');
  getWeather(city);
});

async function getWeather(city) {
  try {
    // Current weather
    const curRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`
    );
    if (!curRes.ok) throw new Error('City not found');
    const curData = await curRes.json();
    showCurrent(curData);

    // Forecast 5 day / 3 hour
    const fRes = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`
    );
    const fData = await fRes.json();
    const daily = convertToDaily(fData);
    showChart(daily);
  } catch (err) {
    alert('Error: ' + err.message);
  }
}

function showCurrent(d) {
  currentDiv.innerHTML = `
    <h2>${d.name}, ${d.sys.country}</h2>
    <p>Temp: ${d.main.temp} °C | Humidity: ${d.main.humidity}%</p>
    <p>Weather: ${d.weather[0].main} - ${d.weather[0].description}</p>
  `;
}

function convertToDaily(fData) {
  const map = {};
  fData.list.forEach(item => {
    const date = item.dt_txt.split(' ')[0];
    if (!map[date]) map[date] = [];
    map[date].push(item.main.temp);
  });
  const result = Object.keys(map).slice(0,5).map(date => {
    const temps = map[date];
    const avg = temps.reduce((a,b)=>a+b,0)/temps.length;
    return { date, temp: Math.round(avg*10)/10 };
  });
  return result;
}

function showChart(daily) {
  const labels = daily.map(x => x.date);
  const data = daily.map(x => x.temp);

  const ctx = document.getElementById('forecastChart').getContext('2d');
  if (chart) chart.destroy();
  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{ label: 'Avg Temp (°C)', data }]
    },
    options: { responsive:true }
  });
}