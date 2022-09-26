const main = document.querySelector("main")
//const result = document.querySelector(".result")
const result = document.querySelector("section")
const submit = document.querySelector(".submit")
const point = document.querySelectorAll("#point")
const rating = document.querySelector(".rating")

submit.addEventListener("click", () => {
    result.classList.remove("hidden")
    main.classList.add("hidden")
})

point.forEach((score) =>
    score.addEventListener("click", () => {
        rating.textContent = score.textContent
    })
)
