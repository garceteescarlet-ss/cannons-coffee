let message = document.querySelector(".message");
let form = document.getElementById("login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();

    const data = new FormData(form);
    const dataObj = Object.fromEntries(data.entries());

    console.log("Our login data:", dataObj);

    let name = dataObj.name;
    let email = dataObj.email;
    let password = dataObj.password;

    let welcomeMessage = `Welcome, ${name}! You are logged in!`;

    let messagePara = document.createElement("p");

    messagePara.textContent = welcomeMessage;

    message.appendChild(messagePara);

    form.style.display = "none";
}