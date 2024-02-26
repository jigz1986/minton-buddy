let params = new URLSearchParams(document.location.search);
let name = params.get("fname"); // is the string "Jonathan"
let age = parseInt(params.get("age"), 10); // is the number 18
console.log(name, age);