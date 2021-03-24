const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Autria",
    "Azerbaïjan"
];
countrySugg = document.createElement("cs");
countrySugg.id = "countrySugg"
document.getElementById("sugg").appendChild(countrySugg);


document.getElementById("country").addEventListener("input", (e) => {

    let countryArray = [];
    let userInput = e.target.value;

    if (e.target.value) {
        countryNameArray = countryList.filter(country => country.toLowerCase().includes(userInput.toLowerCase()));
        countryNameArray = countryNameArray.map(country => `<li>${country}<li>`)
    }

    showCountryNameArray(countryNameArray);

})

function showCountryNameArray(countryNameArray) {
    const scriptHtml = !countryNameArray.length ? "" : countryNameArray.join("");
    document.querySelector("cs").innerHTML = scriptHtml;
}