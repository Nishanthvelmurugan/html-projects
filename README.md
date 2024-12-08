Interview Questions

// Function Recursive - A recursive function is a function that calls itself in order to solve a problem
1. Factorial - if 5!: 5*4*3*2*1 = 120
2. Fibonacci
3. Binary Search
4. Merge Sort
5. Quick Sort
6. Tower of Hanoi
7. Binary Search Tree
8. AVL Tree
9. Heap Sort
10. Bubble Sort
11. Selection Sort
12. Insertion Sort
13. Merge Sort
14. Quick Sort
15. Heap Sort


What is Java Script?
    <!-- JavaScript is a powerful and flexible programming language for the web that is widely used to make websites interactive and dynamic. JavaScript can also able to change or update HTML and CSS dynamically. JavaScript can also run on servers using tools like Node.js, allowing developers to build entire applications with it. -->



### Arithmetic Operators

Arithmetic operators perform mathematical calculations.

- **Addition (`+`)**
  - Example: `let sum = 5 + 3; // 8`
- **Subtraction (`-`)**
  - Example: `let difference = 5 - 3; // 2`
- **Multiplication (`*`)**
  - Example: `let product = 5 * 3; // 15`
- **Division (`/`)**
  - Example: `let quotient = 5 / 2; // 2.5`
- **Remainder (`%`)**
  - Example: `let remainder = 5 % 2; // 1`
- **Exponentiation (`**`)\*\*
  - Example: `let power = 2 ** 3; // 8`

### Comparison Operators

Comparison operators are used to compare two values and return a Boolean (`true` or `false`).

- **Equal (`==`)**
  - Example: `5 == '5'; // true (type coercion)`
- **Strict Equal (`===`)**
  - Example: `5 === '5'; // false (no type coercion)`
- **Not Equal (`!=`)**
  - Example: `5 != '5'; // false (type coercion)`
- **Strict Not Equal (`!==`)**
  - Example: `5 !== '5'; // true (no type coercion)`
- **Greater Than (`>`)**
  - Example: `5 > 3; // true`
- **Less Than (`<`)**
  - Example: `5 < 3; // false`
- **Greater Than or Equal (`>=`)**
  - Example: `5 >= 5; // true`
- **Less Than or Equal (`<=`)**
  - Example: `5 <= 3; // false`

### Logical Operators

Logical operators are used to combine multiple Boolean expressions.

- **AND (`&&`)**
  - Example: `true && false; // false`
- **OR (`||`)**
  - Example: `true || false; // true`
- **NOT (`!`)**
  - Example: `!true; // false`

### Assignment Operators

Assignment operators are used to assign values to variables.

- **Simple Assignment (`=`)**
  - Example: `let x = 5;`
- **Addition Assignment (`+=`)**
  - Example: `x += 2; // equivalent to x = x + 2;`
- **Subtraction Assignment (`-=`)**
  - Example: `x -= 2; // equivalent to x = x - 2;`
- **Multiplication Assignment (`*=`)**
  - Example: `x *= 2; // equivalent to x = x * 2;`
- **Division Assignment (`/=`)**
  - Example: `x /= 2; // equivalent to x = x / 2;`
- **Remainder Assignment (`%=`)**
  - Example: `x %= 2; // equivalent to x = x % 2;`
- **Exponentiation Assignment (`**=`)\*\*
  - Example: `x **= 2; // equivalent to x = x ** 2;`

## Prompt

- Using `prompt()` to Get User Input
- Validating User Input

## Math Object

- Common Methods:
  - `Math.round()`, `Math.floor()`, `Math.ceil()`, `Math.random()`, `Math.abs()`
- Mathematical Constants:
  - `Math.PI`, `Math.E`

## Data Types

- **Primitive Types**
  - String, Number, Boolean, Null, Undefined, Symbol
- **Reference Types**
  - Objects, Arrays, Functions

### Primitive Types

Primitive data types are the most basic data types in JavaScript. They are immutable and stored directly in the variable.

1. **String**

   - Represents a sequence of characters.
   - Example: `let name = "Alice";`
   - **Methods:**
     - `charAt(index)`: Returns the character at the specified index.
       - Example: `name.charAt(0); // "A"`
     - `indexOf(searchValue, start)`: Returns the first index of the specified value.
       - Example: `name.indexOf("l"); // 2`
     - `slice(start, end)`: Extracts a section of a string.
       - Example: `name.slice(1, 4); // "lic"`
     - `substring(start, end)`: Similar to `slice`, but doesn't accept negative indices.
       - Example: `name.substring(1, 4); // "lic"`
     - `toUpperCase()`: Converts the string to uppercase.
       - Example: `name.toUpperCase(); // "ALICE"`
     - `toLowerCase()`: Converts the string to lowercase.
       - Example: `name.toLowerCase(); // "alice"`
     - `trim()`: Removes whitespace from both ends of the string.
       - Example: `"   hello   ".trim(); // "hello"`
     - `split(separator)`: Splits the string into an array of substrings.
       - Example: `name.split(" "); // ["Alice"]`
     - `includes(searchString)`: Checks if the string contains the specified substring.
       - Example: `name.includes("li"); // true`

2. **Number**

   - Represents both integer and floating-point numbers.
   - Example: `let age = 30;`
   - **Methods:**
     - `Number.isInteger(value)`: Checks if the value is an integer.
       - Example: `Number.isInteger(age); // true`
     - `Number.parseFloat(string)`: Converts a string to a floating-point number.
       - Example: `Number.parseFloat("3.14"); // 3.14`
     - `Number.parseInt(string, radix)`: Converts a string to an integer.
       - Example: `Number.parseInt("10", 2); // 2`
   - **Properties:**
     - `Number.MAX_VALUE`: The largest possible number in JavaScript.
     - `Number.MIN_VALUE`: The smallest possible positive number.
     - `Number.NaN`: Represents a value that is not a number.

3. **Boolean**

   - Represents a logical entity and can have two values: `true` or `false`.
   - Example: `let isActive = true;`
   - **Methods:**
     - `Boolean(value)`: Converts a value to a Boolean.
       - Example: `Boolean(1); // true`

4. **Null**

   - Represents the intentional absence of any object value.
   - Example: `let value = null;`

5. **Undefined**

   - Indicates that a variable has been declared but not assigned a value.
   - Example: `let notAssigned; // undefined`

6. **Symbol**
   - A unique and immutable primitive value primarily used as object property keys.
   - Example: `let sym = Symbol("description");`

### Reference Types

Reference types are objects that are more complex than primitive types. They are mutable and stored by reference.

1. **Objects**

   - Collections of key-value pairs.
   - Example: `let person = { name: "Alice", age: 30 };`
   - **Methods:**
     - `Object.keys(obj)`: Returns an array of a given object's own enumerable property names.
       - Example: `Object.keys(person); // ["name", "age"]`
     - `Object.values(obj)`: Returns an array of a given object's own enumerable property values.
       - Example: `Object.values(person); // ["Alice", 30]`
     - `Object.entries(obj)`: Returns an array of a given object's own enumerable property `[key, value]` pairs.
       - Example: `Object.entries(person); // [["name", "Alice"], ["age", 30]]`

2. **Arrays**

   - Ordered collections of values.
   - Example: `let fruits = ["apple", "banana", "cherry"];`
   - **Methods:**
     - `Array.isArray(value)`: Checks if the value is an array.
       - Example: `Array.isArray(fruits); // true`
     - `push(value)`: Adds one or more elements to the end of an array.
       - Example: `fruits.push("date"); // ["apple", "banana", "cherry", "date"]`
     - `pop()`: Removes the last element from an array.
       - Example: `fruits.pop(); // "date"`
     - `shift()`: Removes the first element from an array.
       - Example: `fruits.shift(); // "apple"`
     - `unshift(value)`: Adds one or more elements to the beginning of an array.
       - Example: `fruits.unshift("kiwi"); // ["kiwi", "banana", "cherry"]`
     - `concat(array)`: Merges two or more arrays.
       - Example: `let moreFruits = fruits.concat(["fig", "grape"]);`
     - `slice(start, end)`: Returns a shallow copy of a portion of an array.
       - Example: `fruits.slice(1, 3); // ["banana", "cherry"]`
     - `splice(start, deleteCount, item1, item2, ...)`: Adds/removes elements from an array.
       - Example: `fruits.splice(1, 1, "orange"); // ["kiwi", "orange", "cherry"]`

3. **Functions**
   - First-class objects that can be stored in variables, passed as arguments, and returned from other functions.
   - Example: `function greet() { return "Hello!"; }`
   - **Methods:**
     - `Function.prototype.call(thisArg, arg1, arg2, ...)`: Calls a function with a given `this` value and arguments.
       - Example: `greet.call(null);`
     - `Function.prototype.apply(thisArg, argsArray)`: Calls a function with a given `this` value and an array of arguments.
       - Example: `greet.apply(null);`
     - `Function.prototype.bind(thisArg, arg1, arg2, ...)`: Creates a new function that, when called, has its `this` keyword set to the provided value.
       - Example: `let boundGreet = greet.bind(null);`

    **foreach, map, filter, reduce**
      <!-- - Foreach function:
           The forEach() method calls a function for each element in an array.
           The forEach() method is not executed for empty elements.
           It does not return the original array

      - Map function:
           creates a new array from calling a function for every array element.
           does not execute the function for empty elements.
           does not change the original array.
           can able to retunr the ans in the form of array

      - Filter function:
           The filter() method in JavaScript is used to create a new array with 
        all elements that pass a certain condition defined by a callback function

        let arr = [2, 4, 8, 10];
        let updatedArr = arr.slice().filter(val => val < 5);
        console.log(arr);
        console.log(updatedArr);

        o/p = [ 2, 4, 8, 10 ]
              [ 2, 4 ]

      - Reduce function:
            The reduce() method in JavaScript is used to reduce an array to a single value.

            let arr= [2,4,8,10]
            let updatedArr = arr.reduce((prev, curr)=> curr= prev+curr)
            console.log(arr);
            console.log(updatedArr);

            o/p = [ 2, 4, 8, 10 ]
                  24 -->


## Template Literals

- Syntax: Using backticks (`` ` ``)
- Multiline Strings
- String Interpolation

## DOM (Document Object Model)

The DOM is a programming interface for web documents. It represents the structure of a document as a tree of objects, allowing you to manipulate its content, structure, and style.

## DOM (Document Object Model)

The DOM is a programming interface for web documents. It represents the structure of a document as a tree of objects, allowing you to manipulate its content, structure, and style.

### Selecting Elements

Selecting elements is the first step to interact with them in the DOM. Here are some common methods:

1. **`getElementById(id)`**

   - Selects an element by its unique ID.
   - Returns a single element.
   - Example:
     ```javascript
     const header = document.getElementById("header");
     ```

2. **`querySelector(selector)`**

   - Selects the first element that matches a specified CSS selector.
   - Can be used to select by class, type, attribute, etc.
   - Example:
     ```javascript
     const firstButton = document.querySelector(".btn");
     ```

3. **`getElementsByClassName(className)`**

   - Selects all elements with a specified class name.
   - Returns a live HTMLCollection (automatically updates when the document changes).
   - Example:
     ```javascript
     const buttons = document.getElementsByClassName("btn");
     console.log(buttons.length); // Number of elements with class "btn"
     ```

4. **`getElementsByTagName(tagName)`**

   - Selects all elements with the specified tag name.
   - Also returns a live HTMLCollection.
   - Example:
     ```javascript
     const paragraphs = document.getElementsByTagName("p");
     ```

5. **`querySelectorAll(selector)`**
   - Selects all elements that match a specified CSS selector.
   - Returns a static NodeList (does not update if the document changes).
   - Example:
     ```javascript
     const allButtons = document.querySelectorAll(".btn");
     ```

### Manipulating Elements

Once elements are selected, you can manipulate their content, style, and attributes.

1. **`innerHTML`**

   - Gets or sets the HTML content inside an element.
   - Example:
     ```javascript
     const container = document.getElementById("container");
     container.innerHTML = "<h1>Hello, World!</h1>"; // Replaces content
     ```

2. **`textContent`**

   - Gets or sets the text content inside an element.
   - Unlike `innerHTML`, it does not parse HTML tags.
   - Example:
     ```javascript
     const title = document.getElementById("title");
     title.textContent = "New Title"; // Updates text only
     ```

3. **`style`**

   - Accesses the CSS styles applied to an element.
   - You can change styles using JavaScript.
   - Example:
     ```javascript
     const box = document.getElementById("box");
     box.style.backgroundColor = "blue"; // Changes background color
     box.style.display = "none"; // Hides the element
     ```

4. **`setAttribute(attribute, value)`**

   - Sets a specific attribute on an element.
   - Example:
     ```javascript
     const link = document.getElementById("myLink");
     link.setAttribute("href", "https://www.example.com");
     ```

5. **`removeAttribute(attribute)`**
   - Removes a specified attribute from an element.
   - Example:
     ```javascript
     link.removeAttribute("target"); // Removes the target attribute
     ```

### Creating and Removing Elements

You can dynamically create and remove elements from the DOM.

1. **`createElement(tagName)`**

   - Creates a new HTML element with the specified tag name.
   - Example:
     ```javascript
     const newDiv = document.createElement("div");
     newDiv.textContent = "This is a new div!";
     ```

2. **`appendChild(child)`**

   - Adds a new child element to a specified parent element.
   - Example:
     ```javascript
     const container = document.getElementById("container");
     container.appendChild(newDiv); // Adds the new div to the container
     ```

3. **`removeChild(child)`**

   - Removes a specified child element from a parent element.
   - Example:
     ```javascript
     container.removeChild(newDiv); // Removes newDiv from the container
     ```

4. **`replaceChild(newChild, oldChild)`**
   - Replaces an existing child element with a new child element.
   - Example:
     ```javascript
     const oldDiv = document.getElementById("oldDiv");
     const newDiv = document.createElement("div");
     newDiv.textContent = "This is the new div!";
     container.replaceChild(newDiv, oldDiv); // Replaces oldDiv with newDiv
     ```

### Event Handling

Event handling allows you to execute code in response to user actions.

1. **`addEventListener(type, listener)`**

   - Attaches an event handler to an element without overwriting existing event handlers.
   - `type` is the event type (e.g., "click", "mouseover").
   - `listener` is the function to be executed when the event occurs.
   - Example:
     ```javascript
     const button = document.getElementById("myButton");
     button.addEventListener("click", function () {
       alert("Button clicked!");
     });
     ```

2. **Removing an Event Listener**

   - You can remove an event listener using `removeEventListener(type, listener)`, but you must use the same function reference.
   - Example:
     ```javascript
     function handleClick() {
       alert("Button clicked!");
     }
     button.addEventListener("click", handleClick);
     // Later, to remove:
     button.removeEventListener("click", handleClick);
     ```

3. **Event Object**

   - When an event occurs, an event object is created and passed to the event handler. This object contains information about the event.
   - Example:
     ```javascript
     button.addEventListener("click", function (event) {
       console.log(event); // Logs the event object
       console.log(event.target); // Logs the element that triggered the event
     });
     ```

4. **Event Delegation**
   - You can add a single event listener to a parent element to manage events for multiple child elements.
   - Example:
     ```javascript
     const list = document.getElementById("myList");
     list.addEventListener("click", function (event) {
       if (event.target.tagName === "LI") {
         alert("List item clicked: " + event.target.textContent);
       }
     });
     ```

### Summary

The DOM provides a powerful way to interact with web documents. By selecting, manipulating, creating, and handling events on elements, you can build dynamic and interactive web applications.

Feel free to ask if you need further details or examples on any specific section!

## Arrays

- Creating Arrays
- Accessing and Modifying Elements
- Common Array Methods:
  - `push()`, `pop()`, `shift()`, `unshift()`, `splice()`, `slice()`

## 2D Arrays

- Creating 2D Arrays
- Accessing Elements
- Iterating Through 2D Arrays

## Array Methods

- **ForEach**
- **Map**
- **Filter**
- **Reduce**

## If Else

- Basic Syntax
- Nested If Statements
- Ternary Operator

## Switch

- Basic Syntax
- Use Cases and Examples

## Event Listener

- Adding Event Listeners
- Removing Event Listeners
- Event Object

## Objects

- Creating Objects
- Accessing and Modifying Properties
- Methods in Objects
- Object Destructuring

## Loops

- **For Loop**
- **While Loop**
- **Do While Loop**
- **For...of Loop**
- **For...in Loop**

## Function Types

- **Function Declarations**
- **Function Expressions**
- **Arrow Functions**

## Callback

- Definition and Use Cases
- Passing Functions as Arguments

## Returning Functions and Closure

- Understanding Closures
- Practical Examples of Closures

## Memory Allocation

- How JavaScript Allocates Memory
- Garbage Collection

## Set and Map

- **Set**
  - Creating Sets
  - Common Methods: `add()`, `delete()`, `has()`
- **Map**
  - Creating Maps
  - Common Methods: `set()`, `get()`, `delete()`

## Solving LeetCode Questions

- Tips for Approaching Coding Challenges
- Common Patterns to Recognize

## Object-Oriented Programming

- Classes and Instances
- Inheritance
- Encapsulation
- Polymorphism

## Asynchronous JavaScript

- Understanding the Event Loop
- Callbacks vs Promises

## Promise

- Creating Promises
- Handling Promise States: `then()`, `catch()`, `finally()`
- Chaining Promises

## Error Handling

- Using `try...catch`
- Custom Error Handling

## Async and Await

- Syntax and Usage
- Converting Promises to Async/Await

## JSON

- Parsing JSON: `JSON.parse()`
- Stringifying Objects: `JSON.stringify()`

## Fetch API

- Making GET and POST Requests
- Handling Responses
- Error Handling with Fetch

## Using Local Storage

- Storing Data: `localStorage.setItem()`
- Retrieving Data: `localStorage.getItem()`
- Removing Data: `localStorage.removeItem()`

# Important:

- How Javascript works
- How javascript code is executed
- Hoisting in javascript
- How functions work in javascript
- undefined and not defined n javascript
- The scope chain & lexical Environment
- let and const in javascript
- Block scope & shadowing in javascript
- Closures in javascript
- First class function
- Callback functions in javascript
- Asyncronous javascript & Event Loop
- Higher order function
- map, filter & reduce in javascript
- setTimeout
- async & await

# Projects:

- Celcius to Farenheit - Done
- Centimeter to Inches - Done
- word Count - Done
- FD interest rate calculator - Done
- Select States - Done
- Basic Calculator Using Vanilla Js without HTML
- Job Eligibility Checker - Done
- Color Flipper - Done
- Currency Converter
- Digital Clock
- Weather App
- Todo List

## For Javascript coding Practice

- https://edabit.com/challenges/javascript
- https://www.hackerrank.com/domains/javascript
- https://www.codewars.com/collections/javascript
- https://javascript.info/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript
- https://www.w3schools.com/js/DEFAULT.asp