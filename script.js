let jokeText = document.querySelector(".joke-Area");
let factText = document.querySelector(".fact-Area");
let jokeBtn = document.querySelector(".joke-Btn");
let factBtn = document.querySelector(".fact-Btn");
let lngth = document.querySelector(".length");



let jokeftch = "https://icanhazdadjoke.com";

async function rndmJoke() {
    let joke = await fetch(jokeftch, {
        headers: { Accept: "application/json" }
    });
    let jsonJoke = await joke.json();
    jokeText.innerHTML = jsonJoke.joke;
    // lngth.textContent = jsonJoke.joke.split(" ").length; for words
    lngth.innerHTML = `Characters: <span class="color"> ${jsonJoke.joke.length}</span>`;
}

rndmJoke();

jokeBtn.addEventListener("click", () => {
    rndmJoke();
});



