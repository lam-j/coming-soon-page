const email = document.getElementById("email");
const form = document.getElementById("form");
const invalidContainer = document.querySelector(".invalid");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(invalidContainer.classList.contains("active")) {
        invalidContainer.classList.remove("active");
    }
    // in reality, would use an email regex
    if (!email.value.includes("@")) {
        console.log("email invalid");
        invalidContainer.classList.add("active");
    }
});
