// Character list. Each house has a name and a code
const houses = [{
    code: "ST",
    name: "Stark"
},
{
    code: "LA",
    name: "Lannister"
},
{
    code: "BA",
    name: "Baratheon"
},
{
    code: "TA",
    name: "Targaryen"
}
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
    switch (houseCode) {
        case "ST":
            return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
        case "LA":
            return ["Tywin", "Cersei", "Jaime", "Tyrion"];
        case "BA":
            return ["Robert", "Stannis", "Renly"];
        case "TA":
            return ["Aerys", "Daenerys", "Viserys"];
        default:
            return []; //Empty array
    }
}

const houseDDL = document.getElementById("house");

houses.forEach(house => {
    const houseElement = document.createElement("option");
    houseElement.value = house.code;
    houseElement.textContent = house.name;
    houseDDL.appendChild(houseElement);
});

document.addEventListener("change", e => {
    const ulCharacters = document.getElementById("characters");
    ulCharacters.InnerHTML = "";

    const characters = getCharacters(e.target.value);
    character.forEach(char => {
        const liChar = document.createElement("li");
        liChar.textContent.Content = char;
        ulCharacters.appendChild(liChar);
    });
});

