let celsius = document.getElementById('celsius');
let Fahrenheit = document.getElementById('Fahrenheit');


celsius.oninput = () => {
    let output =(parseFloat(celsius.value) * 9)/5 + 32;
    Fahrenheit.value = parseFloat(output.toFixed(2));
};

Fahrenheit.oninput = () => {
    let output =((parseFloat(Fahrenheit.value) - 32) * 5) / 9;
    celsius.value = parseFloat(output.toFixed(2));
};