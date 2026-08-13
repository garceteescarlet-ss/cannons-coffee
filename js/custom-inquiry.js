let container = document.querySelector(".container");
let form = document.getElementById("inquiry-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
	event.preventDefault();

	const data = new FormData(form);
	const dataObj = Object.fromEntries(data.entries());

	console.log("Our inquiry data:", dataObj);

	let name = dataObj.name;
	let email = dataObj.email;
	let phone = dataObj.phone;
	let comments = dataObj.comments;
	let flavor = dataObj.flavor;
	let interest = dataObj.interest;

	let message = `Thank you ${name}! We appreciate your interest in ${interest}. Your favorite coffee flavor is ${flavor} and your comments are ${comments}. We will soon contact you at ${email} or ${phone}.`;

	let messagePara = document.createElement("p");

	messagePara.textContent = message;

	container.appendChild(messagePara);

	form.style.display = "none";
}