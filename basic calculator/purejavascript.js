document.addEventListener("DOMContentLoaded", () => {

})
    
    const html = document.createElement("html");
    const head = document.createElement("head");
    const script = document.createElement("script"); 
    script.src = "https://cdn.tailwindcss.com";
    head.appendChild(script);
    const body = document.createElement("body");
    html.appendChild(head);
    html.appendChild(body);
    const title = document.createElement("title");
    title.textContent = "Pure Java Script";
    head.appendChild(title);
    body.classList.add("bg-[rgba(300,400,200,0.456)]")

    const calculatorWrapper = document.createElement("div");
    calculatorWrapper.id = "calculator";
    calculatorWrapper.classList.add("bg-[rgba(0,0,0,0.8)]", "absolute", "left-1/2", "top-1/2", "transform", "-translate-x-1/2", "-translate-y-1/2", "w-full", "md:w-5/12", "p-8", "flex-col", "text-center", "shadow-2xl", "rounded-lg");
    body.appendChild(calculatorWrapper);
    const header = document.createElement("h1");
    header.textContent = "Basic Calculator"
    calculatorWrapper.appendChild(header);
    header.classList.add("text-2xl", "font-bold", "text-white");
    

    const fields = document.createElement("div");
    calculatorWrapper.appendChild(fields);
    fields.classList.add("flex", "gap-4", "w-full", "justify-center");

    const createInputField = (id, placeholder, name) => {
        const fielddiv = document.createElement("div");
        fielddiv.id = id;
        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.placeholder = placeholder;
        inputField.name = name;
        inputField.classList.add("h-7", "w-12/12", "rounded-lg", "p-1", "outline-none");
        fielddiv.appendChild(inputField);
        fields.appendChild(fielddiv);
        return inputField;
    }

    const numb1 = createInputField("firstnum" , "Enter the Number", "num1");

    const operators = document.createElement("select");
    ["+", "-", "*", "/", "%"].forEach(op => {
        const option = document.createElement("option");
        option.value = op;
        option.textContent = op;
        operators.appendChild(option);
    });

    fields.appendChild(operators);
    document.replaceChild(html, document.documentElement);

    const numb2 = createInputField("secondnum", "Enter the Number", "num2");

    const showResult = document.createElement("div");
    showResult.id = "result";
    showResult.classList.add("mt-4", "text-lg", "font-semibold")
    calculatorWrapper.appendChild(showResult);


    const calculator =() =>{
        const num1 = Number(numb1.value);
        const num2 = Number(numb2.value);
        const operation = operators.options[operators.selectedIndex].value;
        let result;

        switch (operation) {
            case "+":
                result = num1 + num2;
                break;

            case "-":
                result = num1 - num2;
                break;

            case "*":
                result = num1 * num2;
                break;

            case "/":
                result = num2 !== 0 ? num1/num2 : "Error";
                break;

            case "%":
                result = num2 !== 0 ? num1%num2 : "Error";
                break;
        }
        showResult.textContent = `Result: ${result}`;
}

const calcbutton = document.createElement("button");
calcbutton.textContent = "Calculate";
calcbutton.addEventListener('click', calculator);
calcbutton.classList.add("bg-blue-700", "text-white", "rounded-lg", "p-2", "hover:bg-[coral]", "transition", "ease-linear", "duration-200");
calculatorWrapper.appendChild(calcbutton);