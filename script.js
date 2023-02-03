// welcome function
function welcome() {
    let name = prompt("What is your name?");
    alert("Hello, " + name + "! I think you've got a great career ahead of you in science!");
}

//event listener
let welcomeFutureButton = document.getElementById("welcome-button");
welcomeFutureButton.addEventListener("click", welcome);




var button = document.getElementById("job-generator-button");
var myarray = ['biochemist', 'cartographer', 'climate scientist', 'data analyst', 'forensic scientist', 'hydrologist',
'economist', 'meteorologist', 'hydrologist', 'marine engineer', 'software engineer', 'zoologist', 'astronaut', 'physicist',
'robotics engineer', 'software engineer', 'web developer'];

button.onclick = function() {
    alert("Hey there, you'd make a great " + (myarray[Math.floor(Math.random() * myarray.length)]) + "... just saying.");
};
