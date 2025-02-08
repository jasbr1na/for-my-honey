const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// Add audio element for the love song
const loveSong = new Audio("love-song.mp3");

// Play the love song when "yes <3" is clicked
yesBtn.addEventListener("click", () => {
    loveSong.play(); // Play love song

    // Confetti effect
    for (let i = 0; i < 30; i++) {
        createConfetti();
    }

    alert("YAY i love you so much :3 happy valentines day honey x");
});

// Make the "No" button run away when hovered
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * window.innerWidth - 100;
    const y = Math.random() * window.innerHeight - 50;
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Create hearts falling from the top
function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.classList.add("heart");
    document.body.appendChild(heart);

    // Random position
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    // Remove heart after it falls
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Create falling hearts every 100ms
setInterval(createHeart, 100);

// Create confetti on "Yes" click
function createConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    document.body.appendChild(confetti);

    // Random position and animation duration
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = Math.random() * 2 + 1 + "s";

    // Remove confetti after it falls
    setTimeout(() => {
        confetti.remove();
    }, 2000);
}
