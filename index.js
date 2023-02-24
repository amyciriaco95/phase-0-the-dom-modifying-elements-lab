// Write your code here!

//1. remove <main> with id 'main':

const removeMain = document.getElementById("main");
removeMain.remove()

//2. 'newHeader' variable that points to the <h1> node:
const newHeader = document.createElement("h1");

//3. 'newHeader' variable that points to the <h1> node has an id of 'victory'
newHeader.setAttribute("id", "victory");

//4. 'newHeader' variable that points to the <h1> node with an id of 'victory' has the text "YOUR-NAME is the champion" (with your name in place of YOUR-NAME) inside it:
newHeader.textContent = 'Amy is the champion';
