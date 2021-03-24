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
