function showThankYou() {
    const name = document.getElementById("visitorName").value.trim();
    if (name == "") {
        alert("Please enter your name!");
        return;
    }
    if (/\s/.test(name)) {
        alert("Please enter only one word without spaces!");
        return;
    }

    const message = `Thank you for visiting Artera Kingdom, ${name}! You are a lovely person!♥`;
    
    const msgElement = document.getElementById("thankYouMessage");
    msgElement.textContent = message;

    // 💛 Verlauf anwenden
    msgElement.style.background = `linear-gradient(to bottom,
        #edbc6b 0%,
        #e9cc82 25%,
        #ddbd73 50%,
        #d0a04a 75%,
        #d6ac62 100%)`;
    msgElement.style.backgroundClip = 'text';
    msgElement.style.webkitBackgroundClip = 'text'; // Für Safari/Chrome
    msgElement.style.color = 'transparent';
}

function checkAnswer() {
   let answer = document.getElementById("answer").value.trim();

   if (answer === "") {
      alert("Please enter an answer!");
   } 
   else if (answer === "This Website took some time to make but it was definitely worth it") {
      alert("You are almost there! You forgot a little detail 😭");
   } 
   else if (answer === "This Website took some time to make but it was definitely worth it!") {
      alert("✅ Good job! You found the secret message! This heart is for you! ♥");
   } 
   else {
      alert("❌ Wrong answer! Please try again.");
   }
}

function ShowContactInfo(event) {
    event.preventDefault(); // verhindert, dass der Link springt
    alert("If you have questions or helpful request about this Website\nthen please Contact me via Discord:\n@Veganlife\n\nor via Instagram:\n@EvilNutellaaa");
}
