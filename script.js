// Add an event listener to the 'get-weather' button
document.getElementById('get-weather').addEventListener('click', function() {
// Get the city name from the input field 
    const city = document.getElementById('city-input').value;
// Define the OpenWeatherMap API key
    const apiKey = 'b30bca2b0d8ecee5c43499237bee8978'; // Replace with your OpenWeatherMap API Key
// Construct the API URL
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
// Fetch the weather data from the API
    fetch(apiUrl)
        .then(response => {
// If the response is not ok, throw an error
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
// Otherwise, return the response data as JSON
return response.json();
        })
        .then(data => {
// Display the weather data
displayWeatherData(data);
        })
.catch(error => {
// Log any errors and display an error message
            console.error('Error fetching data:', error);
            document.getElementById('weather-display').innerText = 'Error fetching data';
        });
});
// Function to display the weather data
function displayWeatherData(data) {
// Get the 'weather-display' div
    const weatherDisplay = document.getElementById('weather-display');
// Update the div with the weather data
    weatherDisplay.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].main}</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;
}
