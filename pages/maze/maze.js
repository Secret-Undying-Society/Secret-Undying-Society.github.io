const left = document.getElementById("left");
const right = document.getElementById("right");
const title = document.getElementById("title");

const directions = ["up", "down", "left", "right", "in", "out", "jump", "dance", "cry", "run"];
const encouragement = [    "don't give up now",    "hang in there",    "stay the course",    "keep pushing forward",    "you're getting closer",    "keep your eye on the prize",    "one step at a time",    "keep moving forward",    "stay focused and determined",    "the finish line is in sight",    "keep the momentum going",    "don't stop now",    "keep on truckin'",    "keep fighting the good fight",    "you're making progress",    "keep your head up",    "don't look back, keep moving forward",    "the end is in sight",    "just a little further",    "you're on the right track"];


function randomize() {
    left.innerText = directions[Math.floor(Math.random() * directions.length)];
    right.innerText = directions[Math.floor(Math.random() * directions.length)];
    title.innerHTML = encouragement[Math.floor(Math.random() * encouragement.length)];
    let test = Math.floor(Math.random() * 7); 
    console.log (test);
    if (test === 6) {
        window.location.href = "right.html";
    }
}