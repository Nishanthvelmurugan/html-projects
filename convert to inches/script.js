const userval = document.getElementById("val");
const button = document.getElementById("btn");
const convertedval = document.getElementById("conval");

button.addEventListener("click", () => {
    if (userval.value.trim() === "") {
        alert("Please enter a value to convert");
    } else {
        const cmValue = Number(userval.value);
        const inchesValue = cmValue * 0.393701;
        
        convertedval.value = inchesValue + " Inches";
    }
});