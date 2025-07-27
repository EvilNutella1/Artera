function showThankYou() {
    const name = document.getElementById("visitorName").value.trim();
    if (name == "") {
        alert("Please enter your name!");
        return;
    }
    if (/\s/.test(name)) {  // Prüft, ob Leerzeichen drin sind
        alert("Please enter only one word without spaces!");
        return;
    }
    const message = `Thank you for visiting Artera Kingdom, ${name}! You are a lovely person!♥`;
    document.getElementById("thankYouMessage").textContent = message;
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
