// const timeout = (name, age) => {
//     console.log(`Hi my name is ${name} and my age is ${age}`)
// }
// setTimeout(timeout, 2000, "Nishanth", 20)


const button = document.getElementById("btn");
const result = document.getElementById("result");

function tossCoin() {
    return new Promise((resolve, reject) => {
        button.addEventListener("click", () => {
            const toss = Math.floor(Math.random() * 2);
            console.log(toss);

            if (toss === 0) {
                resolve("Head");
            } else {
                reject("Tail");
            }
        });
    });
}


tossCoin()
    .then((flipText) => {
        console.log(flipText)
        result.value = flipText;
    })

    .catch((flipText) => {
        console.log(flipText)
        result.value = flipText;
    });