document.getElementById('convert-btn').addEventListener('click', function () {
    const input = document.getElementById('temperature-input').value;
    const resultElement = document.getElementById('result');
    let temperature;
    
    if (!input) {
        resultElement.textContent = 'Please enter a temperature value to convert.'; // Show error message
        return; // Stop further execution
    }
    // Regular expression to check the input format
    const celsiusRegex = /^-?\d+(\.\d+)?°?C$/i;
    const fahrenheitRegex = /^-?\d+(\.\d+)?°?F$/i;

    // Check if input is in Celsius
    if (celsiusRegex.test(input)) {
        temperature = parseFloat(input); // Extract numerical value
        const converted = (temperature * 9 / 5) + 32; // Convert to Fahrenheit
        resultElement.textContent = `${temperature}°C is ${converted.toFixed(2)}°F`;
    }
    // Check if input is in Fahrenheit
    else if (fahrenheitRegex.test(input)) {
        temperature = parseFloat(input);
        const converted = (temperature - 32) * 5 / 9; // Convert to Celsius
        resultElement.textContent = `${temperature}°F is ${converted.toFixed(2)}°C`;
    } else {
        resultElement.textContent = 'Please enter a valid temperature.';
    }
});

document.getElementById('cancel-btn').addEventListener('click', function () {
    document.getElementById('temperature-input').value = ''; // Clear input field
    document.getElementById('result').textContent = 'No value given'; // Clear result display
});
