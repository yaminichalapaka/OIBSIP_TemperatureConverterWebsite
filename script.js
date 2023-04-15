function convert() {
  const temp = parseFloat(document.getElementById('temp').value);
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  let result;

  if (from === 'celsius' && to === 'fahrenheit') {
    result = `${temp} &#8451; = ${(temp * 1.8 + 32).toFixed(2)} &#8457;`;
  } else if (from === 'fahrenheit' && to === 'celsius') {
    result = `${temp} &#8457; = ${((temp - 32) * 5/9).toFixed(2)} &#8451;`;
  } else if (from === 'celsius' && to === 'kelvin') {
    result = `${temp} &#8451; = ${(temp + 273.15).toFixed(2)} K`;
  } else if (from === 'kelvin' && to === 'celsius') {
    result = `${temp} K = ${(temp - 273.15).toFixed(2)} &#8451;`;
  } else if (from === 'fahrenheit' && to === 'kelvin') {
    result = `${temp} &#8457; = ${((temp - 32) * 5/9 + 273.15).toFixed(2)} K`;
  } else if (from === 'kelvin' && to === 'fahrenheit') {
    result = `${temp} K = ${((temp - 273.15) * 1.8 + 32).toFixed(2)} &#8457;`;
  }
  document.getElementById('result').innerHTML = result;
}
