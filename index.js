// Write your code here!
// main.remove();

// const newHeader = document.createElement('h1');

// newHeader.innerText = 'h1#victory';

// const main = document.getElementById('victory')

const main = document.querySelector("#main");
main.remove();

const newHeader = document.createElement("h1");
newHeader.innerHTML = "John Nganga is the champion";

newHeader.id = "victory";
document.body.append(newHeader);

