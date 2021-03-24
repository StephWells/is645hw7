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

document.getElementById("country").addEventListener("input", e => {
    const matchArray = countryList.filter(country => country.toLowerCase().startswith(e.target.value.toLowerCase())); 
    const suggestionElement = document.getElementById("suggestions");

    suggestionElement.InnerHTML = "";

    if (e.target.value.length > 0) {
        matchArray.foreach(country => {
        const countrySugg = document.createElement("div");
        countrySugg.textContent = country;
        countrySugg.classList = "suggestion";
        suggestionElement.addEventListener("click", esugg => {
            e.target.value = esugg.target.textContent;
        });
        suggestionElement.appendChild(countrySugg);
        });
    };
});


