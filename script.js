function convertTemperature() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = parseFloat(fahrenheitInput.value);

    if (!isNaN(celsius)) {
        fahrenheit = (celsius * 9/5) + 32;
        fahrenheitInput.value = fahrenheit.toFixed(2);
    }
    else if (!isNaN(fahrenheit)) {
        celsius = (fahrenheit - 32) * 5/9;
        celsiusInput.value = celsius.toFixed(2);
    }
    else {
        alert("Please enter a valid temperature value.");
    }
}