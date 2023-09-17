const jsonFile = "../data.json"

const reactionElement = document.querySelector("#reaction .category")
const memoryElement = document.querySelector("#memory .category")
const verbalElement = document.querySelector("#verbal .category")
const visualElement = document.querySelector("#visual .category")

const reactionScore = document.querySelector("#reaction .mainScore")
const memoryScore = document.querySelector("#memory .mainScore")
const verbalScore = document.querySelector("#verbal .mainScore")
const visualScore = document.querySelector("#visual .mainScore")

const reactionIcon = document.querySelector("#reaction img")
const memoryIcon = document.querySelector("#memory img")
const verbalIcon = document.querySelector("#verbal img")
const visualIcon = document.querySelector("#visual img")

fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
        console.log(a)

        // Categories
        reactionElement.innerHTML = data[0].category
        memoryElement.innerHTML = data[1].category
        verbalElement.innerHTML = data[2].category
        visualElement.innerHTML = a[3].category

        // Scores
        reactionScore.innerHTML = data[0].score
        memoryScore.innerHTML = data[1].score
        verbalScore.innerHTML = data[2].score
        visualScore.innerHTML = data[3].score

        // Icons
        reactionIcon.setAttribute("src", data[0].icon)
        memoryIcon.setAttribute("src", data[1].icon)
        verbalIcon.setAttribute("src", data[2].icon)
        visualIcon.setAttribute("src", data[3].icon)
    }).
    catch(a => {
        console.error("Erro ao carregar o arquivo JSON: ", a)
    });