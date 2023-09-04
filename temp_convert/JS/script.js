function convertToFar() {
    let celsiusInput = document.getElementById("celsiusInput").value;
    let result = document.getElementById("result");

    if (celsiusInput === "") {
        result.textContent = "Please enter a temperature in Celsius.";
        return;
    }

    let celsius = parseFloat(celsiusInput);
    let fahrenheit = (celsius * 9/5) + 32;

    result.textContent = `${celsius}°C is equal to ${fahrenheit}°F.`;
}
