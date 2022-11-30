
let fonts = document.getElementById("font")
let colors = document.getElementById("color")
let sizes = document.getElementById("size")
var htmle = document.querySelectorAll("html")
let bodyy = document.querySelector("body")
let selects = document.querySelectorAll("select")

let fontsList = ["Open", "Roboto", "Cairo"];
let colorsList = ["blue", "red", "green", "yellow", "pink", "black"];

for (i = 0; i < 3; i++) {
    let option = document.createElement("option").cloneNode(true)
    let text = document.createTextNode(fontsList[i])
    option.appendChild(text)
    fonts.appendChild(option.cloneNode(true))
}

for (i = 0; i < colorsList.length; i++) {
    let option = document.createElement("option").cloneNode(true)
    let text = document.createTextNode(colorsList[i])
    option.appendChild(text)
    colors.appendChild(option.cloneNode(true))

}

for (i = 20; i < 50; i++) {
    let option = document.createElement("option").cloneNode(true)
    let text = document.createTextNode(i)
    option.appendChild(text)
    size.appendChild(option.cloneNode(true))

}

//get font size form localstorge with appliction start
if (localStorage.getItem("color")) {
    bodyy.style.backgroundColor = JSON.parse(localStorage.getItem("color"))
}
colors.addEventListener("change", (e) => {
    bodyy.style.backgroundColor = e.target.value
    window.localStorage.setItem("color", JSON.stringify(`${e.target.value}`))

})

//get font size form localstorge with appliction start
if (localStorage.getItem("size")) {
    for (i = 0; i < selects.length; i++) {
        selects[i].style.fontSize = JSON.parse(localStorage.getItem("size"))
    }
}

sizes.addEventListener("change", (e) => {
    for (i = 0; i < selects.length; i++) {
        selects[i].style.fontSize = `${e.target.value}px`;
        window.localStorage.setItem("size", JSON.stringify(`${e.target.value}px`))

    }
})



fonts.addEventListener("change", (e) => {
    for (i = 0; i < selects.length; i++) {
        selects[i].style.fontFamily = e.target.value;
        // set font in localstorage
        window.localStorage.setItem("fonts", JSON.stringify(`${e.target.value}`))

    }
})
//get font form localstorge with appliction start
if (localStorage.getItem("fonts")) {
    for (i = 0; i < selects.length; i++) {
        selects[i].style.fontFamily = JSON.parse(localStorage.getItem("fonts"))
    }
}