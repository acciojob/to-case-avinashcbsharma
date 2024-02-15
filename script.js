function toCase(text) {
  return text.toUpperCase()+'-'+text.toLowerCase();
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
