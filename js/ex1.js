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
};

const option = (text, value) => {
const elementA = document.createElement("option");
elementA.textContent = text;
elementA.value = value;
return elementA;
};


const list = houselist => {
const elementB = document.list("li");
elementB.textContent = houselist;
return elementB;
};


const housElement = document.querySelector("select");
houses.forEach(house => {
housElem.appendChild(option(house.name, house.code));
});


housElem.addEventListener("change", e => {

const char = getCharacters(e.target.value);
const charElement = document.getElementById("characters");



charElement.innerHTML = "";


char.forEach(character => {
    charElement.appendChild(list(character));
});
});