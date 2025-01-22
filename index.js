function convertToCelsius(Fahr) {
  return (5 / 9) * (Fahr - 32);
}

function describeTemperature(Fahr) {
  const Cels = convertToCelsius(Fahr);
  let tempDescription;
  if (Cels < 0) {
    tempDescription = "hella cold";
  } else if (Cels < 20) {
    tempDescription = "cold-ish";
  } else if (Cels < 30) {
    tempDescription = "warm-ish";
  } else if (Cels < 40) {
    tempDescription = "pretty hot";
  } else {
    tempDescription = "too hot";
  }
  return `The temperature is ${Cels} ˚C. That's ${tempDescription}.`;
}

const Fahr = prompt("Enter temp in Fahrenheit");
const description = describeTemperature(Fahr);
alert(description);
