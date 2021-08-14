const button = document.querySelector("button");

function once() {
    console.log("Click once");
    /*button.removeEventListener("click", once);*/
}

button.addEventListener("click", once);

const title = document.getElementById('title');

const redButton = document.getElementById('red');

const blueButton = document.getElementById('blue');

const blackButton = document.getElementById('black');

redButton.addEventListener('click', () => { title.style = "color: red" })
blueButton.addEventListener('click', () => { title.style = "color: blue" })
blackButton.addEventListener('click', () => { title.style = "color: black" })

const input = document.getElementById('text');

input.addEventListener("input", function (event) {
    title.textContent = event.target.value;
});

window.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        document.body.style.background = "lightblue";
    }

    if (event.key == "Enter" && event.ctrlKey) {
        document.body.style.background = "orange";
    }
});



