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
        document.getElementById("characters").appendChild(liChar);
    });
});

