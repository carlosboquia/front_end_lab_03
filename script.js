// Created variables based off the ID's within HTML
let planetName = "Mercury";
let mercuryType = "planet";
let mercuryYear = "3000 BC";
const btn = document.getElementById("reveal-fact")

function populateHeader() {
    // Created a node to update the header based off the planetName variable to manipulate the DOM
    let celestialName = document.getElementById("celestial-name")
    celestialName.textContent = planetName;
    }


// Created addeventlistner to reveal the space fact for mercury  
let spaceFact = document.getElementById("space-fact");
spaceFact.textContent = "";
btn.addEventListener("click", () => {
    console.log("Button was clicked!");
    // Found out style.display function online - https://medium.com/developerhelps/getelementbyid-display-none-faf96b4d24b0#:~:text=If%20you%20want%20to%20show,getElementById(%22element%22).
    spaceFact.style.display = "block";
    spaceFact.textContent = "Mercury is the closest planet to the Sun!";
});


let newParagraph = document.createElement("p");
newParagraph.textContent = planetName + " is a " + mercuryType;
document.body.appendChild(newParagraph);

// Generates function
populateHeader();
