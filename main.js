const dateElement = document.getElementById("date");

const today = new Date();
const formattedDate = today.toLocaleDateString('en-GB');  
dateElement.textContent = formattedDate;

const apiKey = '9a943721a9fc4dc784d110015240711';

function searchCountry(city = 'Mansoura') {  
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
        .then(response => response.json())
        .then(data => {
            if (data.location && data.current) {
                document.querySelector('.current-city').textContent = data.location.name; 
                document.getElementById('date').textContent = new Date().toLocaleDateString(); 
                document.querySelector('.degree').textContent = `${data.current.temp_c}°C`; 

                const weatherIcon = document.querySelector('.weather-img-container img');
                weatherIcon.src = `https:${data.current.condition.icon}`; 
                weatherIcon.alt = data.current.condition.text; 

            } else {
                alert("City not found. Please try again.");
            }
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

document.addEventListener("DOMContentLoaded", () => {
    searchCountry();  
});

document.querySelector('.fa-magnifying-glass').addEventListener('click', () => {
    const city = document.getElementById('country').value;
    searchCountry(city);
});

document.getElementById('country').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const city = e.target.value;
        searchCountry(city);
    }
});
