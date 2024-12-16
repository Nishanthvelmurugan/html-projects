const promise = new Promise((resolve, reject) => {
    const clock = new Date()
    const sec = clock.getSeconds()
    const ranNum = Math.floor(Math.random() * 100);

    console.log(ranNum);
    console.log(sec);
    
    if((sec <= 30) && (ranNum  <= 30)) {
        resolve("Below 30 second" + " "+ - + sec + " "+ - + ranNum);
    }
    else {
        reject("Above 30 second" + " "+ - + " "+ sec + " "+ - +  ranNum);
    }
})

promise
.then(msg => console.log(msg))
.catch(msg => console.log(msg))

