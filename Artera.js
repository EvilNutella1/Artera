function showThankYou() {
    const name = document.getElementById("visitorName").value.trim();
    if (name === "") {
        alert("Please enter your name!");
        return;
    }
    if (/\s/.test(name)) {  // Prüft, ob Leerzeichen drin sind
        alert("Please enter only one word without spaces!");
        return;
    }
    const message = `Thank you for visiting Artera Kingdom, ${name}! You are a lovely person, ${name} ♥`;
    document.getElementById("thankYouMessage").textContent = message;
}

