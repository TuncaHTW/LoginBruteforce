const correctUsername = "tunca";
const correctPassword = "root123";

const loginButton = document.getElementById("loginBtn");
const result = document.getElementById("result");

loginButton.addEventListener("click", () => {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === correctUsername && pass === correctPassword) {
        result.textContent = "Login erfolgreich";
        result.style.color = "green";
    } else {
        result.textContent = "Login fehlgeschlagen";
        result.style.color = "red";
    }
});
