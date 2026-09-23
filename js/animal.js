// Harjoitus 1 & 2
const animalButton = document.getElementById("alertButton");
const animalTableButton = document.getElementById("animalTable");
const header2hover = document.getElementById("header2");

// Harjoitus 3
const feedback = document.getElementById("feedback");
const status = document.getElementById("status");
const charcount = document.getElementById("charcount");
const preview = document.getElementById("preview");

// Harjoitus 4
const feedbackForm = document.getElementById("feedbackForm");

animalButton.addEventListener("click", function () {
    alert("Klikkasit minua!");
});

function showTable() {
    let animal = "Susi";
    let habitat = "Metsä"
    let species = "Lupus"
    let diat = "Lihansyöjät"

    let table = `
    <table>
            <tr>
                <th>Eläin</th>
                <th>Elinympäristö</th>
                <th>Laji</th>
                <th>Ruokavalio</th>
            </tr>
            <tr>
                <td>${animal}</td>
                <td>${habitat}</td>
                <td>${species}</td>
                <td>${diat}</td>
            </tr>
    </table>
    `;

    let container = document.querySelector("#tableContainer");
    container.innerHTML = table;
}

animalTableButton.addEventListener("click", function () {
    showTable();
});

function testFunction() {
    document.getElementById("header1").innerHTML = "Bye bye mouse!";
    document.getElementById("header1").style.color = "red";
}

header2hover.addEventListener("mouseover", function () {
    console.log("“Stepped over me with a mouse!”")
});

feedback.addEventListener("focus", function () {
    status.textContent = "Kirjoitat Palautetta!";
    feedback.style.backgroundColor = "lightgray"
});

feedback.addEventListener("blur", function () {
    status.textContent = "";
    feedback.style.backgroundColor = ""
});

feedback.addEventListener("input", function () {
    charcount.textContent = feedback.value.length + "/200";
    preview.textContent = feedback.value;
});

feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault()

    const length = feedback.value.length;

    if (length < 10 || length > 200) {
        status.textContent = "Palaute pitää olla 10-200 merkkiä pitkä.";
        return;
    }

    feedback.value = "";
    status.textContent = "Kiitos palautteesta!";
    preview.textContent = "";
});

window.addEventListener("keydown", (e) => {
    console.log(`Painoit nappia: ${e.key} menee myös koodissa: ${e.code}`);

    document.getElementById("keybox").innerHTML = `näppäin: ${e.key}, koodissa: ${e.code}`
    document.getElementById("keyinfo").innerHTML = `${e.key}`;
    document.getElementById("keyinfo").style.fontSize = "xx-large";
});
