const faqTitle = document.querySelector(".faq-title")
const faqAnswer = document.querySelectorAll(".faq-text")
const dropDown = document.querySelectorAll(".down-icon")
const upIcon = document.querySelectorAll(".up-icon")


const ans1 = document.querySelector(".ans1")
const up1 = document.querySelector(".up-1")
const down1 = document.querySelector(".down-1")

const ans2 = document.querySelector(".ans2")
const up2 = document.querySelector(".up-2")
const down2 = document.querySelector(".down-2")

const ans3 = document.querySelector(".ans3")
const up3 = document.querySelector(".up-3")
const down3 = document.querySelector(".down-3")

const ans4 = document.querySelector(".ans4")
const up4 = document.querySelector(".up-4")
const down4 = document.querySelector(".down-4")

const ans5 = document.querySelector(".ans5")
const up5 = document.querySelector(".up-5")
const down5 = document.querySelector(".down-5")

 /* Question 1*/
down1.addEventListener("click", () => {
    ans1.classList.remove("hidden")
    down1.classList.add("hidden")
    up1.classList.remove("hidden")
})

up1.addEventListener("click", () => {
    ans1.classList.add("hidden")
    down1.classList.remove("hidden")
    up1.classList.add("hidden")
}) 

/* Question 2*/
down2.addEventListener("click", () => {
    ans2.classList.remove("hidden")
    down2.classList.add("hidden")
    up2.classList.remove("hidden")
})

up2.addEventListener("click", () => {
    ans2.classList.add("hidden")
    down2.classList.remove("hidden")
    up2.classList.add("hidden")
}) 

/* Question 3*/
down3.addEventListener("click", () => {
    ans3.classList.remove("hidden")
    down3.classList.add("hidden")
    up3.classList.remove("hidden")
})

up3.addEventListener("click", () => {
    ans3.classList.add("hidden")
    down3.classList.remove("hidden")
    up3.classList.add("hidden")
}) 

/* Question 4*/
down4.addEventListener("click", () => {
    ans4.classList.remove("hidden")
    down4.classList.add("hidden")
    up4.classList.remove("hidden")
})

up4.addEventListener("click", () => {
    ans4.classList.add("hidden")
    down4.classList.remove("hidden")
    up4.classList.add("hidden")
}) 

/* Question 5*/
down5.addEventListener("click", () => {
    ans5.classList.remove("hidden")
    down5.classList.add("hidden")
    up5.classList.remove("hidden")
})

up5.addEventListener("click", () => {
    ans5.classList.add("hidden")
    down5.classList.remove("hidden")
    up5.classList.add("hidden")
}) 