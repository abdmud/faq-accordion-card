const faqTitle = document.querySelector(".faq-title")
const faqAnswer = document.querySelector(".faq-text")
const dropDown = document.querySelectorAll(".down-icon")

/* Select Down Icon */
dropDown.forEach((down) => {
    down.addEventListener("click", () => {
        faqAnswer.style.display = "block"
    })
});
