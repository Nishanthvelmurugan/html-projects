const html = document.createElement("html")
const head = document.createElement("head")
html.appendChild(head)
const title = document.createElement("title")
head.appendChild(title)
title.innerHTML = "Color Flipper"
const body = document.createElement("body")
html.appendChild(body)

const header = document.createElement("header")
body.appendChild(header)
const headtitle = document.createElement("h1")
header.appendChild(headtitle)
headtitle.innerHTML = "Color flipped"
const headspan = document.createElement("span")
header.appendChild(headspan)
headspan.innerHTML = "#FFFFFF"
const main = document.createElement("main")
body.appendChild(main)

const btncontainer = document.createElement("div")
body.appendChild(btncontainer)
const btn = document.createElement("button")
btncontainer.appendChild(btn)
btn.innerHTML = "Change BG-Color"

const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

const randomnum = () => {
    let randomDigit = Math.floor((Math.random)*16)
    return hex[randomDigit]
}

const randomcolor = () => {
    const hexCode = "#"
    for(let i=1; i<6; i++) {
        hexCode+=randomcolor()
    }
    return hexCode
}


btn.addEventListener("click", () => {
    const rancolor = randomcolor()
    main.style.backgroundColor = rancolor
    btn.innerHTML = rancolor
    headtitle.style.color = rancolor
    headspan.style.color = rancolor
})