var counter;
var name = '';

while (!name) {
  name = prompt('Enter a letter:');
}

for (counter = 0; counter < 10; counter++) {
  document.write(name);
}
