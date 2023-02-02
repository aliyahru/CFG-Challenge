// jobGenerator function
function randomJob() {
    let name = prompt("What is your name?");
    alert("Hello, " + name + "! I think you've got a great career ahead of you in science!");
}

//event listener
let jobGeneratorButton = document.getElementByID("job-generator-button");
jobGeneratorButton.addEventListener("click", randomJob);


