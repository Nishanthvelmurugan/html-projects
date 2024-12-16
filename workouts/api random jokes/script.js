// API - Application Program Interface - a set of rules which allowes different software appliations to communicate with each other
//       eg-the link used to connect b/t backend to frontend is called as API links
//          APIs act as a bridege in between applications

// rest api - the api which is created by ourself
// restful api - the api which is generate by other developers and we use it

const joke = document.getElementById("joke")
const btn = document.getElementById("getjoke")


btn.addEventListener("click", () => {
    fetch("https://official-joke-api.appspot.com/random_ten")
    .then(response => response.json())
    .then(res => {
        res.map(jokes => {
            const list = document.createElement("li")
            list.textContent = `${jokes.setup} - ${jokes.punchline}`
            joke.appendChild(list)
        })
    })
})
