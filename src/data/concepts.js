export const roadmap = [
  {
    id: 'beginner',
    title: 'Beginner',
    description: 'The foundation of JavaScript development.',
    lessons: [
      {
        id: 'what-is-js',
        title: 'What is JavaScript?',
        content: `JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2024, 98.9% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices.

JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).

The History of JavaScript:
JavaScript was created in 1995 by Brendan Eich while he was an engineer at Netscape. It was originally going to be named Mocha, then LiveScript, and finally was named JavaScript. This was a marketing tactic to capitalize on the popularity of Java at the time, although the two languages are very different in design.

Core Features:
1. Imperative and Structured: JavaScript supports much of the structured programming syntax from C (e.g., if statements, while loops, switch statements, do while loops, etc.). One exception is scoping: JavaScript originally had only function-level scoping with var. ES6 added let and const for block-level scoping.

2. Dynamic: Like most scripting languages, JavaScript is dynamically typed; a type is associated with a value rather than an expression. For example, a variable that is bound to a number may be rebound to a string.

3. Object-Oriented (Prototype-based): JavaScript is almost entirely object-based. Objects are associative arrays, augmented with a prototype (see below); each key provides the name for an object property, and there are two syntactical ways to specify such a name: dot notation (obj.x = 10) and bracket notation (obj['x'] = 10).

Why Learn JavaScript?
JavaScript is everywhere. It’s the language of the browser, but with the advent of Node.js, it’s also a powerful server-side language. With frameworks like React Native and Electron, you can build mobile and desktop apps. It has one of the largest and most active ecosystems in the world (NPM).

The Modern Landscape:
Today, JavaScript development often involves using modern tools like Vite, Webpack, and Babel to transpile and bundle code. We use modern syntax (ES6+) like arrow functions, destructuring, and async/await to write cleaner, more maintainable code. JavaScript continues to evolve rapidly with new features added to the ECMAScript specification every year.`,
        example: 'console.log("Hello, JavaScript!");\n\n// JavaScript is dynamic\nlet message = "Hello";\nconsole.log(typeof message); // "string"\n\nmessage = 42;\nconsole.log(typeof message); // "number"',
        quiz: {
          question: 'Who created JavaScript in 1995?',
          options: ['Mark Zuckerberg', 'Brendan Eich', 'Bill Gates', 'James Gosling'],
          answer: 1
        },
        expertInsight: "In industry, we rarely refer to it as 'ECMAScript' unless we are discussing specific version compatibility (like ES2022 features). Also, despite the name, JavaScript has zero relation to Java; it was a pure marketing move that has confused students for 30 years!",
        funFact: "Brendan Eich created the first version of JavaScript in just 10 days!"
      },
      {
        id: 'setup',
        title: 'Setup and Environment',
        content: `Getting started with JavaScript is unique compared to many other languages because you don't need to install a heavy compiler or SDK to see your code in action. If you have a web browser, you already have a JavaScript environment ready to go.

The Browser Console:
Every modern browser (Chrome, Firefox, Safari, Edge) comes with a suite of Developer Tools. You can open these by right-clicking on any webpage and selecting "Inspect", or by pressing F12 (or Cmd+Option+I on Mac). The "Console" tab is a Read-Eval-Print Loop (REPL) where you can type JavaScript code and see the results immediately. This is the perfect place for quick experiments and debugging.

Text Editors:
While you can write code in a simple notepad, professional developers use specialized text editors called Integrated Development Environments (IDEs) or code editors.
1. Visual Studio Code (VS Code): The industry standard. It's free, open-source, and has incredible support for JavaScript, including syntax highlighting, IntelliSense (auto-completion), and an integrated terminal.
2. WebStorm: A powerful, paid IDE from JetBrains specifically designed for web development.
3. Sublime Text / Atom: Lightweight alternatives that are fast and highly customizable.

Node.js Environment:
While browsers run JavaScript on the client side, Node.js is a runtime that allows you to run JavaScript on your computer (server-side). Installing Node.js also gives you access to NPM (Node Package Manager), the world's largest software registry, allowing you to easily add libraries and tools to your projects.

HTML Integration:
To use JavaScript on a website, you typically link it to an HTML file. You can do this in two ways:
1. Internal Script: Using the <script> tag directly in your HTML.
2. External Script: Creating a separate .js file and linking it with <script src="script.js"></script>. This is the preferred method for larger projects as it keeps your code organized and allows for browser caching.

The Development Workflow:
A typical modern workflow involves:
1. Writing code in an editor like VS Code.
2. Using a local development server (like the one provided by Vite or Live Server) to see changes in real-time.
3. Using the browser's developer tools to debug and inspect the DOM.
4. Version control with Git to track changes and collaborate with others.

Your First 'Project':
Even a single line like alert('Hello World!'); is a JavaScript program. As you progress, you'll move from these simple alerts to complex applications with thousands of lines of code, but the foundation remains the same: writing instructions that the computer (via the browser or Node.js) can execute.`,
        example: '// 1. Open Console (F12)\n// 2. Type this:\nconsole.log("Environment Ready!");\n\n// 3. Try an alert:\n// alert("Welcome to JS Master!");',
        quiz: {
          question: 'What is the most common tool used by developers to write JS code?',
          options: ['Microsoft Word', 'Visual Studio Code', 'Adobe Photoshop', 'PowerPoint'],
          answer: 1
        },
        expertInsight: "Senior developers spend 80% of their time in the 'Network' and 'Sources' tabs of Chrome DevTools, not just the 'Console'. Learning how to set breakpoints in the Sources tab is a superpower that schools rarely teach.",
        funFact: "The 'Console' is actually an object provided by the browser's environment, not a core part of the JavaScript language itself!"
      },
      {
        id: 'variables',
        title: 'Variables and Data Types',
        content: `Variables are the most basic building blocks of any programming language. They are used to store data that can be used and manipulated throughout your program. In JavaScript, there are three ways to declare a variable: var, let, and const.

1. var: The oldest way to declare a variable. It has function scope and can be redeclared and updated. However, due to its scoping rules (hoisting), it can lead to bugs and is generally avoided in modern JavaScript.

2. let: Introduced in ES6, let has block scope (limited to the {} where it's defined). It can be updated but not redeclared within the same scope. This is the preferred way to declare variables that you expect to change.

3. const: Also introduced in ES6, const stands for 'constant'. Like let, it has block scope. However, it cannot be updated or redeclared. It must be initialized at the time of declaration. Use const for values that should remain the same throughout the program's execution.

JavaScript Data Types:
JavaScript is a loosely typed or dynamic language. This means you don't have to specify the type of a variable when you declare it, and the type can change during execution.

Primitive Types:
- String: Used for text. Represented by characters inside single, double, or backticks.
- Number: Used for both integers and floating-point numbers.
- Boolean: Represents a logical entity and can have two values: true and false.
- Undefined: A variable that has been declared but not assigned a value has the value undefined.
- Null: Represents the intentional absence of any object value.
- Symbol: A unique and immutable primitive value.
- BigInt: Used for integers larger than the maximum safe integer limit for Numbers.

Reference Types:
- Object: A collection of properties (key-value pairs).
- Array: A special type of object used for storing ordered lists of values.
- Function: Also a type of object in JavaScript, allowing them to be passed around like any other value.

Naming Conventions:
Variable names should be descriptive. In JavaScript, the standard naming convention is camelCase (e.g., firstName, userAge, totalScore). Names must start with a letter, underscore (_), or dollar sign ($), and cannot be reserved keywords like 'if' or 'class'.`,
        example: '// Declaration and Initialization\nconst name = "John";\nlet age = 25;\n\n// Updating a let variable\nage = 26;\n\n// Trying to update a const (will throw an error)\n// name = "Jane";\n\n// Checking types\nconsole.log(typeof name); // "string"\nconsole.log(typeof age);  // "number"\nconsole.log(typeof true); // "boolean"',
        quiz: {
          question: 'Which keyword should you use for a variable that should NOT be reassigned?',
          options: ['let', 'var', 'const', 'set'],
          answer: 2
        },
        expertInsight: "In high-stakes production code, use 'const' by default for everything. Only switch to 'let' if you absolutely need to reassign the value. This prevents accidental bugs where variables are changed unexpectedly. Also, 'var' is essentially dead in modern JS—if you see it in a tutorial, that tutorial is outdated!",
        funFact: "JavaScript was originally meant to be a 'glue language' for designers, not a full-scale application language."
      },
      {
        id: 'operators',
        title: 'Operators',
        content: `Operators are symbols that perform operations on one or more operands. In JavaScript, they are essential for everything from basic math to complex logical comparisons.

Arithmetic Operators:
Used to perform mathematical calculations.
- + (Addition): Also used for string concatenation.
- - (Subtraction)
- * (Multiplication)
- / (Division)
- % (Remainder/Modulus): Returns the remainder of a division.
- ** (Exponentiation): Calculates the power (e.g., 2 ** 3 = 8).
- ++ (Increment): Increases the value by 1.
- -- (Decrement): Decreases the value by 1.

Assignment Operators:
Used to assign values to variables.
- = (Simple assignment)
- +=, -=, *=, /= (Compound assignment): e.g., x += 5 is the same as x = x + 5.

Comparison Operators:
Used to compare two values and return a boolean (true or false).
- == (Equality): Compares values after type conversion.
- === (Strict Equality): Compares both value and type (Recommended).
- != (Inequality)
- !== (Strict Inequality)
- >, <, >=, <= (Relational operators)

Logical Operators:
Used to determine the logic between variables or values.
- && (Logical AND): Returns true if both operands are true.
- || (Logical OR): Returns true if at least one operand is true.
- ! (Logical NOT): Reverses the boolean state of its operand.

Ternary Operator:
The only operator that takes three operands. It's a shorthand for an if-else statement.
Syntax: condition ? valueIfTrue : valueIfFalse

Understanding Operator Precedence:
Just like in mathematics, JavaScript has rules for which operators are evaluated first. Multiplication and division have higher precedence than addition and subtraction. You can use parentheses () to override these rules and ensure your code evaluates exactly as intended.`,
        example: 'let x = 10 + 5 * 2; // 20 (Multiplication first)\nlet y = (10 + 5) * 2; // 30 (Parentheses first)\n\n// Strict vs Loose Equality\nconsole.log(10 == "10");  // true (type conversion happened)\nconsole.log(10 === "10"); // false (types are different)\n\n// Ternary Operator\nlet age = 20;\nlet status = age >= 18 ? "Adult" : "Minor";\nconsole.log(status); // "Adult"',
        quiz: {
          question: 'What does the strict equality operator (===) check?',
          options: ['Only value', 'Only type', 'Both value and type', 'Neither'],
          answer: 2
        },
        expertInsight: "Never use '==' in professional code. The type coercion rules are so weird that they lead to famous bugs like [] == ![] being true. Always use '===' to stay sane.",
        funFact: "The '+' operator is the only arithmetic operator that also works on strings for concatenation!"
      },
      {
        id: 'conditionals',
        title: 'Conditional Statements',
        content: `Conditional statements allow your program to make decisions and execute different blocks of code based on certain conditions. They are the backbone of control flow in any application.

The 'if' Statement:
The most basic conditional. If the condition inside the parentheses evaluates to true, the code block inside the curly braces {} is executed.

The 'else' Statement:
Used in conjunction with 'if' to execute a block of code if the initial condition is false.

The 'else if' Statement:
Allows you to check multiple conditions in sequence. The first condition that evaluates to true will have its block executed, and the rest will be skipped.

The 'switch' Statement:
A cleaner way to handle multiple possible values for a single variable. It compares the variable against various 'case' values and executes the corresponding code block. It's often more readable than a long chain of if-else if statements.

Truthiness and Falsiness:
In JavaScript, values aren't just true or false. Every value has an inherent 'truthiness'.
Falsy values include: false, 0, "" (empty string), null, undefined, and NaN.
Everything else is considered 'truthy', including empty arrays [] and objects {}.

Best Practices:
1. Use strict equality (===) in your conditions to avoid unexpected type conversion bugs.
2. Keep your conditions simple and readable.
3. If you have many cases for a single variable, consider using a switch statement or an object lookup for better clarity.
4. Use the ternary operator for simple, single-line decisions, but avoid nesting them as it becomes hard to read.`,
        example: 'let score = 85;\n\nif (score >= 90) {\n  console.log("Grade: A");\n} else if (score >= 80) {\n  console.log("Grade: B");\n} else {\n  console.log("Grade: C");\n}\n\n// Switch Statement\nlet day = "Monday";\nswitch (day) {\n  case "Monday":\n    console.log("Start of the week!");\n    break;\n  case "Friday":\n    console.log("Weekend is near!");\n    break;\n  default:\n    console.log("Just another day.");\n}',
        quiz: {
          question: 'Which statement is used to handle multiple specific cases for a single variable?',
          options: ['if', 'while', 'switch', 'for'],
          answer: 2
        },
        expertInsight: "In complex applications, senior devs often avoid long 'switch' statements by using 'Object Lookups'. It makes the code much more readable and easier to extend without adding more 'case' blocks.",
        funFact: "The ternary operator is the only operator in JavaScript that takes three operands. That's why it's called 'ternary'!"
      },
      {
        id: 'loops',
        title: 'Loops',
        content: `Loops are essential for performing repetitive tasks without writing the same code over and over again. They allow you to iterate through arrays, objects, or simply repeat an action a specific number of times.

The 'for' Loop:
The most common loop in JavaScript. It consists of three parts:
1. Initialization: Executed once before the loop starts (e.g., let i = 0).
2. Condition: Checked before every iteration. If true, the loop continues (e.g., i < 10).
3. Final Expression: Executed at the end of every iteration (e.g., i++).

The 'while' Loop:
Repeats a block of code as long as a specified condition is true. It's useful when you don't know exactly how many times you need to loop. Be careful to include a way to break out of the loop, or you'll create an infinite loop that crashes the browser!

The 'do...while' Loop:
Similar to the while loop, but it executes the code block once before checking the condition. This guarantees that the loop will run at least once.

The 'for...of' Loop:
Introduced in ES6, this loop is the most elegant way to iterate over iterable objects like arrays, strings, and maps. It gives you the value of each element directly.

The 'for...in' Loop:
Used to iterate over the enumerable properties of an object. It's generally used for objects rather than arrays.

Breaking and Continuing:
- 'break': Immediately exits the loop.
- 'continue': Skips the current iteration and moves to the next one.

Best Practices:
1. Prefer 'for...of' for iterating over arrays for better readability.
2. Always ensure your loops have a clear exit condition to avoid infinite loops.
3. Minimize work inside the loop's condition (e.g., calculate array length outside the loop if it doesn't change).`,
        example: '// Standard for loop\nfor (let i = 0; i < 3; i++) {\n  console.log("Count: " + i);\n}\n\n// for...of loop with array\nconst colors = ["red", "green", "blue"];\nfor (const color of colors) {\n  console.log(color);\n}\n\n// while loop\nlet i = 0;\nwhile (i < 3) {\n  console.log("While: " + i);\n  i++;\n}',
        quiz: {
          question: 'Which loop is guaranteed to run at least once?',
          options: ['for', 'while', 'do...while', 'foreach'],
          answer: 2
        },
        expertInsight: "For high-performance data processing (like 100k+ items), a classic 'for' loop is still significantly faster than '.forEach()' or '.map()' because it avoids the overhead of creating a new function scope for every single iteration.",
        funFact: "If you accidentally create an infinite loop in a browser, it will eventually trigger a 'Page Unresponsive' dialog because it's blocking the main thread from doing anything else!"
      },
      {
        id: 'functions',
        title: 'Functions',
        content: `Functions are one of the most powerful features of JavaScript. They allow you to group code into reusable blocks, making your programs more modular, readable, and easier to maintain.

Function Declaration:
The traditional way to define a function using the 'function' keyword. These functions are 'hoisted', meaning they can be called before they are defined in the code.

Function Expression:
Defining a function and assigning it to a variable. These are not hoisted and are often used for anonymous functions.

Arrow Functions (ES6):
A concise syntax for writing function expressions. They have some unique properties, most notably how they handle the 'this' keyword (they don't have their own 'this' context, but inherit it from the surrounding scope).

Parameters and Arguments:
- Parameters: The variables listed in the function definition.
- Arguments: The actual values passed to the function when it is called.
JavaScript functions can take any number of arguments, and you can even set default values for parameters.

Return Value:
The 'return' statement stops the execution of the function and sends a value back to where the function was called. If no return statement is used, the function returns 'undefined'.

Scope:
- Global Scope: Variables defined outside any function, accessible everywhere.
- Local/Function Scope: Variables defined inside a function, only accessible within that function.
- Block Scope: Variables defined with let/const inside {}, only accessible within those braces.

Higher-Order Functions:
Functions that can take other functions as arguments or return them. This is a core concept of functional programming in JavaScript.

Anonymous Functions:
Functions without a name, often used as callbacks (functions passed into other functions to be executed later).`,
        example: '// Function Declaration\nfunction add(a, b = 0) {\n  return a + b;\n}\n\n// Arrow Function\nconst multiply = (a, b) => a * b;\n\nconsole.log(add(5, 3)); // 8\nconsole.log(add(10));   // 10 (using default b=0)\nconsole.log(multiply(4, 5)); // 20\n\n// Anonymous function as callback\nsetTimeout(() => {\n  console.log("Delayed message");\n}, 1000);',
        quiz: {
          question: 'How do you call a function named "myFunc"?',
          options: ['call myFunc()', 'myFunc()', 'run myFunc', 'execute(myFunc)'],
          answer: 1
        },
        expertInsight: "In professional React and Node.js code, we almost exclusively use Arrow Functions for internal logic because they don't mess with the 'this' context. However, regular function declarations are still great for top-level utilities due to hoisting.",
        funFact: "In JavaScript, functions are 'First-Class Citizens'. This means you can treat them like any other variable—pass them as arguments, return them from other functions, and even add properties to them!"
      },
      {
        id: 'arrays-basic',
        title: 'Arrays',
        content: `Arrays are high-level, list-like objects used to store multiple values in a single variable. They are one of the most commonly used data structures in JavaScript.

Creating Arrays:
You can create an array using array literals (const arr = [1, 2, 3]) or the Array constructor (const arr = new Array(1, 2, 3)). Literals are almost always preferred.

Indexing:
Arrays are zero-indexed. This means the first element is at index 0, the second at 1, and so on. You can access elements using bracket notation: arr[0].

Common Array Methods:
- .push(): Adds an element to the end.
- .pop(): Removes the last element.
- .unshift(): Adds an element to the beginning.
- .shift(): Removes the first element.
- .indexOf(): Finds the index of a specific value.
- .includes(): Checks if a value exists in the array.
- .slice(): Returns a shallow copy of a portion of the array.
- .splice(): Adds or removes elements from a specific index.

Iterating over Arrays:
- 'for' loop: The classic way.
- 'for...of' loop: The modern, readable way.
- .forEach(): A built-in method that executes a function for each element.

The 'length' Property:
Every array has a 'length' property that automatically updates as elements are added or removed. It represents the number of elements in the array.

Multidimensional Arrays:
Arrays can contain other arrays, allowing you to create grids, matrices, or complex nested structures.

Reference Type behavior:
Important: When you copy an array variable, you're copying the reference to the array in memory, not the array itself. Modifying the copy will modify the original unless you create a true clone (e.g., using the spread operator [...arr]).`,
        example: 'const fruits = ["Apple", "Banana"];\n\nfruits.push("Cherry"); // ["Apple", "Banana", "Cherry"]\nconsole.log(fruits[0]); // "Apple"\nconsole.log(fruits.length); // 3\n\n// Iterating\nfruits.forEach((fruit, index) => {\n  console.log(`${index}: ${fruit}`);\n});\n\n// Cloning an array\nconst fruitsCopy = [...fruits];',
        quiz: {
          question: 'What is the index of the first element in a JavaScript array?',
          options: ['1', '0', '-1', 'null'],
          answer: 1
        },
        expertInsight: "While standard arrays are flexible, if you're working with millions of numbers (like in image processing), use 'TypedArrays' (like Int32Array). They are much faster and use way less memory because they bypass the complex object-like nature of standard arrays.",
        funFact: "You can actually change an array's length property manually! Setting 'myArray.length = 0' is the fastest way to completely empty an array in JavaScript."
      },
      {
        id: 'objects-basic',
        title: 'Objects',
        content: `Objects are the most important data type in JavaScript. Almost everything in JS is an object. They are collections of related data and functionality, organized as key-value pairs (properties).

Creating Objects:
The most common way is using object literals: const person = { name: "Alice", age: 25 }.

Properties and Methods:
- Properties: The data stored in the object (e.g., name, age).
- Methods: Functions stored as properties that perform actions related to the object.

Accessing Data:
- Dot Notation: person.name (Cleanest and most common).
- Bracket Notation: person["name"] (Useful when the key is a variable or contains special characters).

The 'this' Keyword:
Inside an object's method, the 'this' keyword refers to the object itself. It allows methods to access other properties of the same object.

Adding and Modifying:
You can add new properties or update existing ones at any time: person.job = "Developer"; person.age = 26;

Deleting Properties:
Use the 'delete' keyword: delete person.age;

Nested Objects:
Objects can contain other objects, arrays, and any other data type, allowing for complex, hierarchical data structures (like the roadmap data driving this very website!).

Object Methods:
- Object.keys(obj): Returns an array of the object's keys.
- Object.values(obj): Returns an array of the object's values.
- Object.entries(obj): Returns an array of [key, value] pairs.

JSON (JavaScript Object Notation):
A lightweight data-interchange format based on JavaScript object syntax. It's the standard for sending data between a server and a web application.`,
        example: 'const user = {\n  name: "Alice",\n  age: 30,\n  greet() {\n    console.log(`Hi, I am ${this.name}`);\n  }\n};\n\nuser.greet(); // "Hi, I am Alice"\n\n// Dynamic property access\nconst key = "name";\nconsole.log(user[key]); // "Alice"\n\n// Object methods\nconsole.log(Object.keys(user)); // ["name", "age", "greet"]',
        quiz: {
          question: 'How do you access the value of a property "name" in an object "person"?',
          options: ['person->name', 'person.name', 'person(name)', 'person::name'],
          answer: 1
        },
        expertInsight: "To prevent accidental changes to your objects, use 'Object.freeze()'. In large teams, this is a common practice to ensure that shared configuration objects aren't accidentally modified by another part of the app.",
        funFact: "In JavaScript, 'typeof null' returns 'object'. This is actually a 30-year-old bug in the language that can't be fixed now because it would break millions of websites!"
      }
    ]
  },
  {
    id: 'intermediate',
    title: 'Intermediate',
    description: 'Advance your skills with DOM and Async JS.',
    lessons: [
      {
        id: 'dom-manipulation',
        title: 'DOM Manipulation',
        content: `The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can connect to the page.

Understanding the DOM Tree:
When a web page is loaded, the browser creates a Document Object Model of the page. The HTML DOM model is constructed as a tree of Objects. This tree structure allows JavaScript to access and change all the elements of an HTML document.

Selecting Elements:
To manipulate an element, you first need to select it.
- document.getElementById(id): Selects a single element by its unique ID.
- document.getElementsByClassName(name): Selects all elements with a specific class name.
- document.getElementsByTagName(name): Selects all elements with a specific tag name.
- document.querySelector(selector): Selects the first element that matches a CSS selector (very powerful).
- document.querySelectorAll(selector): Selects all elements that match a CSS selector.

Changing Content and Attributes:
- element.innerHTML: Gets or sets the HTML markup contained within the element.
- element.textContent: Gets or sets the text content of the node and its descendants.
- element.setAttribute(name, value): Sets the value of an attribute on the specified element.
- element.getAttribute(name): Returns the value of a specified attribute on the element.

Manipulating Styles:
You can change the CSS of an element directly via the 'style' property:
element.style.color = "blue";
element.style.fontSize = "20px";
Note: CSS properties with hyphens are written in camelCase in JavaScript (e.g., background-color becomes backgroundColor).

Creating and Removing Elements:
- document.createElement(tagName): Creates a new element node.
- parentElement.appendChild(newElement): Adds a node to the end of the list of children of a specified parent node.
- parentElement.removeChild(element): Removes a child node from the DOM.
- element.remove(): Removes the element from the DOM directly.

Traversing the DOM:
You can move around the DOM tree using properties like parentNode, childNodes, firstChild, lastChild, nextSibling, and previousSibling.

Performance Considerations:
DOM manipulation can be expensive in terms of performance. It's often better to make multiple changes to a document fragment and then append that fragment to the DOM in one go, rather than making multiple individual changes directly to the live DOM.`,
        example: '// Selecting and changing text\nconst title = document.querySelector("h1");\ntitle.textContent = "Mastering the DOM";\n\n// Changing styles\ntitle.style.color = "#eab308";\n\n// Creating a new element\nconst newDiv = document.createElement("div");\nnewDiv.innerHTML = "<p>I am a new element!</p>";\ndocument.body.appendChild(newDiv);\n\n// Adding a class\ntitle.classList.add("highlight");',
        quiz: {
          question: 'Which method is used to select an element by its ID?',
          options: ['querySelector()', 'getElementById()', 'Both A and B', 'getElementByClass()'],
          answer: 2
        },
        expertInsight: "In modern frameworks like React, we almost never touch the DOM directly (imperative). Instead, we describe what the UI should look like based on state (declarative). Direct DOM manipulation is usually reserved for low-level library development or performance-critical animations.",
        funFact: "The 'D' in DOM stands for 'Document', but did you know the DOM was actually designed to be language-independent? You can technically use it with Python or Java too!"
      },
      {
        id: 'events',
        title: 'Events',
        content: `Events are "things" that happen to HTML elements. When JavaScript is used in HTML pages, JavaScript can "react" on these events. An event can be something the browser does, or something a user does.

Common User Events:
- click: When the user clicks an element.
- dblclick: When the user double-clicks an element.
- mousedown/mouseup: When the mouse button is pressed/released.
- mousemove: When the mouse pointer is moving.
- keydown/keyup: When a keyboard key is pressed/released.
- submit: When a form is submitted.
- change: When the value of an input element changes.
- focus/blur: When an element gets/loses focus.

Common Browser Events:
- load: When the page has finished loading.
- resize: When the browser window is resized.
- scroll: When the user scrolls the page.

Event Listeners:
The best way to handle events is using the addEventListener() method. It allows you to attach an event handler to an element without overwriting existing event handlers.
Syntax: element.addEventListener(event, function, useCapture);

The Event Object:
When an event occurs, the browser creates an Event object, which contains information about the event, such as which element was clicked, the mouse coordinates, or which key was pressed. This object is automatically passed as an argument to the event handler function.

Event Bubbling and Capturing:
- Bubbling: The event is first handled by the innermost element and then propagated to outer elements. (Default)
- Capturing: The event is first handled by the outermost element and then propagated to inner elements.

Preventing Default Behavior:
Some events have a default behavior (e.g., clicking a link navigates to a new page, submitting a form refreshes the page). You can prevent this using event.preventDefault().

Event Delegation:
Instead of adding event listeners to many individual elements, you can add a single event listener to a parent element. This listener can then handle events for all of its children by checking the event.target property. This is much more efficient, especially for long lists or dynamic content.`,
        example: 'const button = document.querySelector("button");\n\n// Adding an event listener\nbutton.addEventListener("click", (event) => {\n  console.log("Button was clicked!");\n  console.log("Target element:", event.target);\n});\n\n// Handling form submission\nconst form = document.querySelector("form");\nform.addEventListener("submit", (e) => {\n  e.preventDefault(); // Stop page refresh\n  console.log("Form data processed");\n});',
        quiz: {
          question: 'What is the most common event used on a button?',
          options: ['hover', 'click', 'submit', 'load'],
          answer: 1
        },
        expertInsight: "Event Delegation is a critical performance pattern. If you have a list of 1,000 items, don't add 1,000 listeners. Add ONE listener to the parent 'ul' and check which 'li' was clicked using 'event.target'. This saves massive amounts of memory.",
        funFact: "A 'click' event is actually a composite event! It only fires if both a 'mousedown' and a 'mouseup' happen on the same element."
      },
      {
        id: 'es6-features',
        title: 'ES6+ Features',
        content: `ES6 (ECMAScript 2015) was a major update to JavaScript that introduced a wide range of new features, making the language more powerful and expressive. Subsequent updates (ES7, ES8, etc.) have continued this trend.

Let and Const:
As discussed in the variables section, let and const provide block-level scoping, solving many of the issues associated with var.

Arrow Functions:
A shorter syntax for writing functions. They are anonymous and don't have their own 'this' value, which makes them perfect for callbacks.
const add = (a, b) => a + b;

Template Literals:
Allow for multi-line strings and string interpolation using backticks (\`) and \${expression} syntax.
const name = "World";
console.log(\`Hello \${name}!\`);

Destructuring Assignment:
A convenient way to extract values from arrays or properties from objects into distinct variables.
const { name, age } = user;
const [first, second] = colors;

Spread and Rest Operators (...):
- Spread: Expands an iterable (like an array) into individual elements. Useful for cloning or merging arrays.
- Rest: Collects multiple elements into an array. Useful for functions with a variable number of arguments.

Default Parameters:
Allows you to initialize parameters with default values if no value or undefined is passed.

Classes:
Syntactical sugar over JavaScript's prototype-based inheritance, providing a much cleaner and more familiar syntax for object-oriented programming.

Modules (import/export):
Allow you to break your code into separate files and easily share functionality between them. This is crucial for building large-scale applications.

Promises:
A new way to handle asynchronous operations, providing a cleaner alternative to traditional callbacks. (Deep dive in the Async section!)`,
        example: '// Destructuring\nconst user = { id: 1, name: "Bob", email: "bob@example.com" };\nconst { name, email } = user;\n\n// Spread operator\nconst numbers = [1, 2, 3];\nconst newNumbers = [...numbers, 4, 5];\n\n// Template Literals\nconst greet = `User ${name} can be reached at ${email}`;\n\n// Arrow functions\nconst square = x => x * x;\nconsole.log(square(5)); // 25',
        quiz: {
          question: 'Which symbol is used for template literals?',
          options: ["' (single quote)", '" (double quote)', '` (backtick)', '| (pipe)'],
          answer: 2
        },
        expertInsight: "Modern JS development relies on 'Transpilers' like Babel. These tools take your fancy ES6+ code and turn it into old-school ES5 so it can run on ancient browsers (like IE11). This allows you to use the latest features without worrying about compatibility.",
        funFact: "Why is it called ES6? Because it was the 6th edition of the ECMAScript standard. But they changed the naming to years (ES2015, ES2016) because they wanted to release updates every single year!"
      },
      {
        id: 'error-handling',
        title: 'Error Handling',
        content: `No matter how good you are at coding, your programs will eventually encounter errors. Error handling is the process of anticipating, detecting, and resolving these errors to ensure your application remains stable and provides a good user experience.

Types of Errors:
- Syntax Errors: Occur when the code violates the rules of the language (e.g., missing a bracket). Detected by the browser/engine before the code runs.
- Runtime Errors (Exceptions): Occur while the code is executing (e.g., trying to call a function that doesn't exist).
- Logical Errors: The code runs without crashing but produces incorrect results.

The try...catch Statement:
The primary tool for handling exceptions.
- try: Wrap the code that might throw an error.
- catch: If an error occurs in the try block, execution jumps to the catch block. The error object is passed as an argument.
- finally: (Optional) A block that always executes, regardless of whether an error occurred. Useful for cleanup tasks like closing database connections.

The Error Object:
Contains valuable information about the error:
- name: The type of error (e.g., ReferenceError, TypeError).
- message: A human-readable description of what went wrong.
- stack: A trace of the function calls that led to the error.

Throwing Your Own Errors:
You can use the 'throw' keyword to create your own custom errors. This is useful for validating inputs or enforcing business rules.
throw new Error("Invalid input provided");

Async Error Handling:
When working with Promises, you handle errors using the .catch() method. With async/await, you use the standard try...catch block around your awaited calls.

Best Practices:
1. Only catch errors that you can actually handle or log.
2. Provide meaningful error messages to help with debugging.
3. Don't use try...catch for flow control; it should be for exceptional circumstances.
4. Always log errors to a monitoring service in production so you can track and fix them.`,
        example: 'function divide(a, b) {\n  if (b === 0) {\n    throw new Error("Cannot divide by zero!");\n  }\n  return a / b;\n}\n\ntry {\n  console.log(divide(10, 0));\n} catch (error) {\n  console.error("Error caught:", error.message);\n} finally {\n  console.log("Operation attempted.");\n}',
        quiz: {
          question: 'Which block in a try...catch statement is used to catch an error?',
          options: ['try', 'catch', 'finally', 'error'],
          answer: 1
        },
        expertInsight: "In production apps, we use 'Error Boundaries' in React to prevent the whole app from crashing if one small component has an error. We also send error logs to services like Sentry or LogRocket so we can fix bugs before users even report them.",
        funFact: "The first computer 'bug' was actually a real moth found inside a Harvard Mark II computer in 1947! Grace Hopper recorded it in her logbook, and the term 'debugging' was born."
      },
      {
        id: 'async-js',
        title: 'Asynchronous JavaScript',
        content: `Asynchronous programming is a core concept in JavaScript that allows your program to start a potentially long-running task and still be responsive to other events while that task runs, rather than having to wait until that task has finished. This is crucial for web applications, where you don't want the UI to freeze while waiting for data from a server.

The Callback Pattern:
The original way to handle asynchronous code. You pass a function (a callback) to an asynchronous function, which is then called when the task is complete. However, this often leads to "callback hell" when multiple tasks are nested.

Promises:
Introduced in ES6 to solve the problems of callbacks. A Promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value. A promise can be in one of three states:
- Pending: Initial state, neither fulfilled nor rejected.
- Fulfilled: The operation completed successfully.
- Rejected: The operation failed.
You use .then() to handle fulfillment and .catch() to handle rejection.

Async/Await:
Introduced in ES2017, this is a syntactical sugar built on top of Promises. It allows you to write asynchronous code that looks and behaves like synchronous code, making it much easier to read and maintain.
- async: Declares a function as asynchronous. It always returns a promise.
- await: Pauses the execution of the async function until the promise is resolved.

The Event Loop and Microtasks:
Understanding how JavaScript handles these tasks under the hood is key. Asynchronous tasks like Promises are added to a "microtask queue", which is processed after the current script finishes but before the browser renders or moves on to the next task in the event loop.

Best Practices:
1. Prefer async/await over raw Promises for better readability.
2. Always wrap your awaited calls in try...catch blocks to handle errors.
3. Use Promise.all() when you need to run multiple independent asynchronous tasks in parallel.
4. Avoid using 'await' inside loops if the tasks are independent; instead, create an array of promises and use Promise.all().`,
        example: '// Using Async/Await\nasync function fetchUserData() {\n  try {\n    console.log("Fetching...");\n    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");\n    const user = await response.json();\n    console.log("User Name:", user.name);\n  } catch (error) {\n    console.error("Fetch failed:", error);\n  }\n}\n\nfetchUserData();\nconsole.log("This runs while fetching...");',
        quiz: {
          question: 'What does the "await" keyword do?',
          options: ['Skips the task', 'Pauses execution until the Promise settles', 'Runs code in parallel', 'Stops the program'],
          answer: 1
        },
        expertInsight: "Beginners often confuse 'Parallelism' with 'Concurrency'. JavaScript is single-threaded, so it's concurrent (juggling tasks) but not parallel (doing tasks at the exact same time) on the main thread. If you need true parallelism, you have to use Web Workers.",
        funFact: "Async/Await isn't magic—it's actually built on top of 'Generators' (functions that can be paused and resumed). The engine handles the pausing for you when it sees the 'await' keyword!"
      },
      {
        id: 'fetch-api',
        title: 'Fetch API',
        content: `The Fetch API provides a modern, flexible, and powerful interface for fetching resources (including across the network). It is a more powerful and flexible replacement for the older XMLHttpRequest (AJAX).

Basic Usage:
The fetch() method takes one mandatory argument: the path to the resource you want to fetch. It returns a Promise that resolves to the Response object representing the response to that request.

Handling the Response:
Once you have the Response object, you can use various methods to extract the data in different formats:
- response.json(): Parses the response as JSON.
- response.text(): Parses the response as plain text.
- response.blob(): Parses the response as a binary blob (useful for images).

Checking for Success:
A common mistake is thinking that fetch() will reject the promise if the server returns an error code like 404 or 500. In reality, the promise only rejects on network failure. You should always check the response.ok property (which is true for status codes 200-299).

Request Options:
You can pass an optional second argument to fetch() to customize the request:
- method: GET, POST, PUT, DELETE, etc.
- headers: An object containing any headers you want to send.
- body: The data you want to send (e.g., a JSON string for a POST request).

CORS (Cross-Origin Resource Sharing):
For security reasons, browsers restrict cross-origin HTTP requests. If you're fetching from a different domain, the server must be configured to allow your origin.

Best Practices:
1. Always check response.ok before processing data.
2. Use async/await for cleaner fetch logic.
3. Set appropriate headers (e.g., "Content-Type": "application/json") when sending data.
4. Use a tool like Postman or the browser's Network tab to inspect your requests and responses.`,
        example: '// POST Request Example\nasync function createPost() {\n  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {\n    method: "POST",\n    body: JSON.stringify({\n      title: "New Post",\n      body: "Hello World",\n      userId: 1\n    }),\n    headers: {\n      "Content-type": "application/json; charset=UTF-8"\n    }\n  });\n\n  if (response.ok) {\n    const data = await response.json();\n    console.log("Success:", data);\n  }\n}\n\ncreatePost();',
        quiz: {
          question: 'What does fetch() return?',
          options: ['An object', 'A string', 'A Promise', 'An array'],
          answer: 2
        },
        expertInsight: "If a user navigates away from a page while a fetch request is still pending, you should cancel it to save bandwidth. You can do this using an 'AbortController'. It's a senior-level optimization that prevents 'memory leaks' in network requests.",
        funFact: "By default, the Fetch API does NOT send or receive cookies from the server. You have to explicitly set the 'credentials' option to 'include' to make it work with authentication sessions!"
      },
      {
        id: 'local-storage',
        title: 'Local Storage',
        content: `Web Storage API provides mechanisms by which browsers can store key/value pairs, in a much more intuitive fashion than using cookies. The two main types are LocalStorage and SessionStorage.

LocalStorage:
Stores data with no expiration date. The data will survive even if the browser is closed and reopened. This is perfect for storing user preferences (like dark mode), authentication tokens, or cached data.

SessionStorage:
Similar to LocalStorage, but the data is cleared when the page session ends (i.e., when the browser tab is closed).

Core Methods:
- setItem(key, value): Adds or updates a key-value pair.
- getItem(key): Retrieves the value for a specific key.
- removeItem(key): Deletes a specific key-value pair.
- clear(): Deletes all data in the storage for that origin.

Important Limitations:
1. String Storage Only: LocalStorage can only store strings. To store objects or arrays, you must use JSON.stringify() when saving and JSON.parse() when retrieving.
2. Size Limit: Usually around 5MB per origin.
3. Synchronous: Storage operations are synchronous, meaning they can block the main thread if you're saving very large amounts of data.
4. Security: Data is stored in plain text and is accessible via any script on the same origin. Never store sensitive information like passwords or credit card numbers here.

Storage Events:
You can listen for the 'storage' event on the window object to react to changes made in other tabs/windows of the same origin.

When to use LocalStorage:
- User UI preferences (theme, layout).
- Caching small amounts of data to improve load times.
- Persisting a shopping cart or form data before submission.`,
        example: '// Storing an object\nconst settings = { theme: "dark", notifications: true };\nlocalStorage.setItem("user_settings", JSON.stringify(settings));\n\n// Retrieving and parsing\nconst saved = localStorage.getItem("user_settings");\nif (saved) {\n  const parsed = JSON.parse(saved);\n  console.log("Theme is:", parsed.theme);\n}\n\n// Removing\n// localStorage.removeItem("user_settings");',
        quiz: {
          question: 'Does LocalStorage clear when you close the browser tab?',
          options: ['Yes', 'No', 'Only on mobile', 'Depends on settings'],
          answer: 1
        },
        expertInsight: "If you need to store more than 5MB of data (like an offline database), LocalStorage won't cut it. Instead, use 'IndexedDB'. It's an asynchronous, low-level API for client-side storage of significant amounts of structured data.",
        funFact: "The 5MB limit is actually just a recommendation. Some browsers allow more, but you should never rely on it. Also, Safari's 'Incognito' mode used to set the limit to exactly 0, which broke thousands of websites!"
      }
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced',
    description: 'Master complex patterns and performance.',
    lessons: [
      {
        id: 'closures',
        title: 'Closures',
        content: `A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

How Closures Work:
When you declare a function inside another function, the inner function has access to the variables of the outer function even after the outer function has finished executing. This is because the inner function "closes over" the variables it needs from the outer scope.

Practical Applications:
1. Data Privacy / Encapsulation: You can create private variables that can only be accessed and modified through specific functions. This is a key part of the Module pattern.
2. Function Factories: Functions that create and return other functions with specific behaviors based on arguments passed to the factory.
3. Callbacks and Event Handlers: Closures are used extensively in asynchronous programming to maintain state between the time a task is started and when its callback is executed.

The Lexical Environment:
To understand closures, you must understand lexical scoping. Lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available. Nested functions have access to variables declared in their outer scope.

Common Pitfalls:
1. Memory Leaks: Because closures keep references to variables in their outer scope, they can prevent those variables from being garbage collected, potentially leading to memory leaks if not handled carefully.
2. Loops and Closures: A classic problem where using var in a loop with closures leads to all closures referencing the same final value of the loop variable. ES6's 'let' solves this by creating a new binding for each iteration.

Why they are important:
Closures are a fundamental part of JavaScript and are essential for writing advanced, modular, and efficient code. They are the basis for many of the language's most powerful patterns and features.`,
        example: 'function createGreeter(greeting) {\n  return function(name) {\n    console.log(`${greeting}, ${name}!`);\n  };\n}\n\nconst sayHello = createGreeter("Hello");\nconst sayHi = createGreeter("Hi");\n\nsayHello("Alice"); // "Hello, Alice!"\nsayHi("Bob");      // "Hi, Bob!"\n\n// Private state example\nfunction createCounter() {\n  let count = 0;\n  return {\n    increment: () => ++count,\n    getCount: () => count\n  };\n}\nconst counter = createCounter();',
        quiz: {
          question: 'What is a primary benefit of using closures?',
          options: ['Faster execution', 'Data privacy/encapsulation', 'Smaller file size', 'Easier debugging'],
          answer: 1
        },
        expertInsight: "Closures are the secret sauce behind many popular JS libraries. If you've ever used a 'React Hook' like useState, you're using closures under the hood to preserve state between re-renders. Mastering closures is what separates junior devs from seniors.",
        funFact: "Even though closures feel like a complex feature, every single function in JavaScript is technically a closure!"
      },
      {
        id: 'prototypes',
        title: 'Prototypes & Inheritance',
        content: `JavaScript is a prototype-based language, which means that objects inherit properties and methods from other objects. This is different from class-based languages like Java or C++.

The Prototype Chain:
Every object in JavaScript has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.

How Inheritance Works:
When you try to access a property on an object:
1. JavaScript first looks for the property on the object itself.
2. If not found, it looks at the object's prototype.
3. If still not found, it looks at the prototype's prototype, and so on up the chain.
4. If the end of the chain is reached without finding the property, it returns undefined.

Constructor Functions:
Before ES6 classes, inheritance was implemented using constructor functions and the 'new' keyword.
function Animal(name) { this.name = name; }
Animal.prototype.speak = function() { console.log(this.name + " makes a noise."); };

ES6 Classes:
ES6 introduced the 'class' keyword, which provides a much cleaner and more familiar syntax for creating objects and handling inheritance. However, it's important to remember that classes in JS are just "syntactical sugar" over the existing prototype-based system.

'extends' and 'super':
- extends: Used to create a class that is a child of another class.
- super: Used to call the constructor or methods of the parent class.

Prototypes vs. Classes:
While classes are generally easier to work with, understanding prototypes is crucial for mastering JavaScript. It helps you understand how the language works under the hood and allows you to perform advanced techniques like monkey-patching or creating highly efficient object structures.`,
        example: 'class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  speak() {\n    console.log(`${this.name} makes a noise.`);\n  }\n}\n\nclass Dog extends Animal {\n  speak() {\n    console.log(`${this.name} barks.`);\n  }\n}\n\nconst d = new Dog("Mitzie");\nd.speak(); // "Mitzie barks."\n\n// Checking prototype\nconsole.log(Object.getPrototypeOf(d) === Dog.prototype); // true',
        quiz: {
          question: 'Where are shared methods usually defined in JS constructor functions?',
          options: ['Inside the function', 'On the prototype object', 'On the instance directly', 'In a separate file'],
          answer: 1
        },
        expertInsight: "Classes in JS are not real classes like in Java. They are 'behavioral masks' over prototypes. In high-performance scenarios, manual prototype manipulation can actually be faster than class syntax, though classes are preferred for readability.",
        funFact: "The prototype of all objects eventually leads back to 'Object.prototype', which is the grandfather of everything in JS!"
      },
      {
        id: 'event-loop',
        title: 'Event Loop',
        content: `The Event Loop is perhaps the most misunderstood yet critical part of the JavaScript runtime. It's what allows JavaScript to be "non-blocking" and handle multiple tasks concurrently, despite being a single-threaded language.

The Runtime Components:
1. Call Stack: Where your code is actually executed. It follows the Last-In-First-Out (LIFO) principle.
2. Web APIs (Browser) / C++ APIs (Node.js): Handle tasks like setTimeouts, HTTP requests, or DOM events. These run outside the main thread.
3. Callback Queue (Task Queue): Where callbacks from Web APIs wait to be executed.
4. Microtask Queue: A higher-priority queue for Promises and MutationObservers.
5. The Event Loop: Its job is to look at the Call Stack and the Callback Queue. If the Call Stack is empty, it takes the first task from the queue and pushes it onto the stack.

The Process:
1. Execute the current script (synchronous code).
2. Check the Microtask Queue. Execute ALL microtasks until the queue is empty.
3. Check the Callback Queue. Execute the FIRST task.
4. Render the UI (if in a browser).
5. Repeat.

Why it matters:
Because the Call Stack can only do one thing at a time, if you run a very heavy synchronous task (like a huge loop), you "block" the event loop. This means the browser can't render, handle clicks, or process asynchronous callbacks, making the page feel frozen.

Microtasks vs. Macrotasks:
- Macrotasks: setTimeout, setInterval, setImmediate, I/O tasks.
- Microtasks: process.nextTick (Node.js), Promises (.then/catch/finally), queueMicrotask.
Important: Microtasks are always processed before the next macrotask and before the next render.

Best Practices:
1. Avoid long-running synchronous code on the main thread.
2. Use Web Workers for heavy computations to run them in a separate thread.
3. Understand that setTimeout(fn, 0) doesn't run immediately; it runs after all current synchronous code and microtasks are finished.`,
        example: 'console.log("1. Start");\n\nsetTimeout(() => {\n  console.log("4. Timeout (Macrotask)");\n}, 0);\n\nPromise.resolve().then(() => {\n  console.log("3. Promise (Microtask)");\n});\n\nconsole.log("2. End");\n\n// Output:\n// 1. Start\n// 2. End\n// 3. Promise (Microtask)\n// 4. Timeout (Macrotask)',
        quiz: {
          question: 'In the event loop, where do setTimeouts go before executing?',
          options: ['Call Stack', 'Callback Queue', 'Microtask Queue', 'Heap'],
          answer: 1
        },
        expertInsight: "This is the #1 question in senior JS interviews. If you can explain why a Promise resolves before a setTimeout(0), you've already beaten 50% of candidates. Remember: Microtasks (Promises) always jump the line!",
        funFact: "The Event Loop isn't actually part of the V8 engine; it's provided by the environment (the Browser or Node.js)!"
      },
      {
        id: 'design-patterns',
        title: 'Design Patterns',
        content: `Design patterns are documented, reusable solutions to commonly occurring problems in software design. They are like blueprints that you can customize to solve a particular design problem in your code.

Why use Design Patterns?
1. Proven Solutions: They are tried-and-tested approaches developed by experienced developers.
2. Common Language: They provide a standard terminology that developers can use to communicate complex ideas more easily.
3. Best Practices: They encourage writing cleaner, more modular, and more maintainable code.

Common JavaScript Patterns:

1. Module Pattern: Used to mimic the concept of classes so that we can store both public and private methods and variables inside a single object.
2. Singleton Pattern: Ensures that a class has only one instance and provides a global point of access to it. Useful for things like database connections or global configuration objects.
3. Observer Pattern: A subscription model where objects (observers) subscribe to an event and get notified when the event occurs. This is the basis of event handling in JavaScript.
4. Factory Pattern: Provides a generic interface for creating objects, where we can specify the type of object we want to be created.
5. Decorator Pattern: Allows behavior to be added to an individual object, either statically or dynamically, without affecting the behavior of other objects from the same class.

Patterns in Modern JS:
Many of these traditional patterns are now built into the language or commonly used libraries. For example, ES6 Modules have largely replaced the manual Module pattern, and the Observer pattern is at the heart of state management libraries like Redux or Vuex.

Choosing a Pattern:
Don't try to force a pattern into your code just for the sake of using it. Patterns should be used when they provide a clear benefit in terms of code structure, readability, or maintainability. Over-engineering with patterns can make code unnecessarily complex.`,
        example: '// Singleton Pattern\nconst Database = (function() {\n  let instance;\n  function createInstance() {\n    return { name: "DB Connection" };\n  }\n  return {\n    getInstance: function() {\n      if (!instance) instance = createInstance();\n      return instance;\n    }\n  };\n})();\n\nconst db1 = Database.getInstance();\nconst db2 = Database.getInstance();\nconsole.log(db1 === db2); // true',
        quiz: {
          question: 'Which pattern is used to ensure only one instance of a class exists?',
          options: ['Factory', 'Observer', 'Singleton', 'Strategy'],
          answer: 2
        },
        expertInsight: "Don't fall into the 'Over-engineering' trap. Design patterns are tools, not goals. Many developers make their code 10x more complex by forcing a pattern where a simple function would have worked perfectly.",
        funFact: "The most famous book on design patterns was written by the 'Gang of Four' (GoF) in 1994. Most of the patterns we use in JS today were originally described in that book using C++ and Smalltalk!"
      },
      {
        id: 'performance',
        title: 'Performance Optimization',
        content: `Performance optimization is the process of making your JavaScript code run faster and more efficiently. In the world of web development, every millisecond counts—better performance leads to better user engagement, higher conversion rates, and better SEO rankings.

Key Areas of Optimization:

1. DOM Access:
The DOM is slow. Accessing it frequently can significantly degrade performance.
- Minimize DOM access.
- Use document fragments when creating multiple elements.
- Cache references to DOM elements in variables.

2. Event Handling:
- Debouncing: Ensures that a function is not called too frequently (e.g., during a window resize or scroll event). It waits for a specific amount of time after the last event before firing.
- Throttling: Limits the number of times a function can be called over a certain period.
- Event Delegation: Using a single event listener on a parent instead of many on children.

3. Memory Management:
- Avoid memory leaks by cleaning up event listeners and intervals when they are no longer needed.
- Be careful with global variables.
- Use Chrome DevTools' Memory tab to identify and fix leaks.

4. Network Performance:
- Lazy Loading: Only load resources (like images or heavy JS modules) when they are actually needed.
- Code Splitting: Break your large JS bundle into smaller chunks that can be loaded on demand.
- Minification and Compression: Reduce the size of your JS files.

5. Code Execution:
- Use efficient algorithms and data structures.
- Avoid heavy computations on the main thread (use Web Workers).
- Use Memoization to cache the results of expensive function calls.

Tools for Measuring Performance:
- Lighthouse: A built-in tool in Chrome DevTools that provides an audit of your page's performance.
- Performance Tab (Chrome DevTools): Allows you to record and analyze the execution of your code in detail.
- window.performance API: Allows you to measure the execution time of specific blocks of code.`,
        example: '// Debounce function\nfunction debounce(func, wait) {\n  let timeout;\n  return function(...args) {\n    clearTimeout(timeout);\n    timeout = setTimeout(() => func.apply(this, args), wait);\n  };\n}\n\n// Usage\nconst handleSearch = debounce((query) => {\n  console.log("Searching for:", query);\n}, 500);\n\n// This will only fire once after the user stops typing for 500ms',
        quiz: {
          question: 'What technique limits the rate at which a function can fire?',
          options: ['Debouncing', 'Throttling', 'Lazy loading', 'Memoization'],
          answer: 1
        },
        expertInsight: "Performance isn't just about code speed; it's about 'Perceived Performance'. Techniques like 'Cumulative Layout Shift' (CLS) optimization and using skeletons/loaders make the app FEEL faster to the user, even if the data takes the same amount of time to load.",
        funFact: "Studies show that 100ms is the threshold for a user to feel that an interface is responding 'instantly'. If your code takes longer than that, you need a loading state!"
      },
      {
        id: 'memory-management',
        title: 'Memory Management',
        content: `Understanding how memory works in JavaScript is crucial for building large-scale, high-performance applications. While JS has automatic garbage collection, developers still need to understand the lifecycle of memory to avoid leaks.

The Memory Lifecycle:
1. Allocation: When you declare a variable or create an object, JS automatically allocates the memory needed.
2. Use: Reading and writing to the allocated memory.
3. Release: When the memory is no longer needed, it is released so it can be reused. This is where Garbage Collection comes in.

Garbage Collection (GC):
JavaScript uses a 'Mark-and-Sweep' algorithm.
- Mark: The GC starts from 'roots' (global objects) and marks all objects that are reachable.
- Sweep: Any object that wasn't marked is considered unreachable and its memory is reclaimed.

Common Memory Leaks:
1. Global Variables: Accidental globals stay in memory forever.
2. Forgotten Timers/Callbacks: If you set an interval and never clear it, the variables it references won't be GC'd.
3. Closures: While powerful, closures can unintentionally keep large objects in memory if not handled correctly.
4. Detached DOM Nodes: If you keep a reference to a DOM node in JS after it's been removed from the document, it won't be GC'd.

Best Practices:
- Always use 'use strict' to avoid accidental globals.
- Manually clear intervals and event listeners when they are no longer needed (especially in single-page apps).
- Nullify large objects once you're done with them to hint to the GC that they can be collected.`,
        example: '// Potential Memory Leak\nlet element = document.getElementById("btn");\nelement.addEventListener("click", () => {\n  console.log("Clicked");\n});\n\n// To fix: remove listener if element is removed\n// element.removeEventListener("click", handler);\n\n// Large object cleanup\nlet bigData = new Array(1000000).fill("data");\n// ... process bigData\nbigData = null; // Eligible for GC',
        quiz: {
          question: 'Which algorithm does JavaScript use for Garbage Collection?',
          options: ['Reference Counting', 'Mark-and-Sweep', 'Linear Allocation', 'Stop-and-Copy'],
          answer: 1
        },
        expertInsight: "If you're debugging a memory leak, the 'Heap Snapshot' tool in Chrome DevTools is your best friend. It allows you to see exactly which objects are staying in memory and what is holding a reference to them.",
        funFact: "In early versions of JavaScript, the garbage collector was much simpler and would often cause noticeable 'stutters' in animations when it ran. Modern engines like V8 use 'incremental' collection to avoid these pauses."
      },
      {
        id: 'web-workers',
        title: 'Web Workers',
        content: `Web Workers allow you to run JavaScript code in the background, on a separate thread from the main execution thread of your web application. This is a game-changer for performance because it prevents long-running scripts from blocking the UI.

The Single-Threaded Problem:
Normally, all JS runs on the "main thread". If you run a heavy calculation (like processing a large image), the browser freezes—it can't respond to clicks or scroll until the task is done.

How Workers Help:
A Web Worker runs in its own thread. It has no access to the DOM, but it can communicate with the main thread via messages.

Types of Workers:
1. Dedicated Workers: Linked to a single script and accessible only to that script.
2. Shared Workers: Can be accessed by multiple scripts from different windows or tabs.
3. Service Workers: Act as proxy servers between web apps, the browser, and the network. Essential for PWA features like offline support.

Communication:
Communication happens via the postMessage() method and the 'message' event. Data is copied, not shared, between threads (using structured cloning).

Limitations:
- No DOM access.
- No 'window' or 'document' objects.
- Limited access to Web APIs (but they can use Fetch, IndexedDB, and WebSockets).`,
        example: '// Main script (main.js)\nconst worker = new Worker("worker.js");\nworker.postMessage([10, 20]);\nworker.onmessage = (e) => {\n  console.log("Result from worker:", e.data);\n};\n\n// Worker script (worker.js)\nonmessage = (e) => {\n  const [a, b] = e.data;\n  const result = a + b; // Heavy math here\n  postMessage(result);\n};',
        quiz: {
          question: 'Can a Web Worker directly modify the HTML of your page?',
          options: ['Yes', 'No', 'Only in Chrome', 'Only if given permission'],
          answer: 1
        },
        expertInsight: "A common use case for Web Workers is 'OffscreenCanvas'. It allows you to render complex 2D or 3D graphics in a background thread, keeping the main UI thread silky smooth even during heavy animation.",
        funFact: "Web Workers don't have access to 'localStorage' in most browsers because LocalStorage is synchronous and would block the worker thread!"
      },
      {
        id: 'proxy-reflect',
        title: 'Proxy and Reflect',
        content: `The Proxy object allows you to create a proxy for another object, which can intercept and redefine fundamental operations for that object, such as property lookup, assignment, enumeration, function invocation, etc.

What is a Proxy?
A Proxy is created with two parameters:
1. target: The original object which you want to proxy.
2. handler: An object that defines which operations will be intercepted and how to redefine them (these are called 'traps').

Reflect:
Reflect is a built-in object that provides methods for interceptable JavaScript operations. The methods are the same as those of proxy handlers. Reflect is not a function object, so it's not constructible.

Why use them together?
Reflect makes it easy to forward the original behavior from within a Proxy trap. It ensures that the default behavior still works as expected.

Use Cases:
1. Validation: Automatically validate data when properties are set.
2. Logging/Profiling: Track access to specific properties.
3. Reactivity: The basis for how frameworks like Vue 3 track changes to state.
4. Security: Creating "read-only" views of objects.`,
        example: 'const user = { name: "John", age: 30 };\\n\\nconst handler = {\\n  get(target, prop, receiver) {\\n    console.log(`Reading property: \\${prop}`);\\n    return Reflect.get(...arguments);\\n  },\\n  set(target, prop, value) {\\n    if (prop === "age" && value < 0) {\\n      throw new Error("Age cannot be negative");\\n    }\\n    return Reflect.set(...arguments);\\n  }\\n};\\n\\nconst proxy = new Proxy(user, handler);\\nconsole.log(proxy.name); // Logs "Reading property: name", then "John"',
        quiz: {
          question: 'In a Proxy, what are the methods used to intercept operations called?',
          options: ['Hooks', 'Interceptors', 'Traps', 'Listeners'],
          answer: 2
        },
        expertInsight: "The 'Reactivity' system in Vue 3 is entirely built using Proxies. When you change a piece of data, the Proxy trap 'intercepts' the change and automatically triggers a UI update. This is much more efficient than the old 'Object.defineProperty' method used in Vue 2.",
        funFact: "A Proxy is one of the few features in JavaScript that is 'impossible' to perfectly polyfill for older browsers. If a browser doesn't support Proxies, you simply can't simulate them 100%!"
      }
    ]
  },
  {
    id: 'expert',
    title: 'Expert',
    description: 'Dive into advanced topics like TypeScript and Web Security.',
    lessons: [
      {
        id: 'typescript-fundamentals',
        title: 'TypeScript Fundamentals',
        content: `TypeScript is a statically typed superset of JavaScript that adds optional types to the language. It's developed and maintained by Microsoft and has become an industry standard for building large-scale, robust applications.

Why use TypeScript?
1.  **Catch Errors Early**: Types allow you to catch a huge class of errors during development, long before your code ever runs in a browser.
2.  **Improved Readability and Maintainability**: Type annotations make code easier to understand and reason about. It acts as a form of documentation.
3.  **Better Tooling**: TypeScript provides incredible autocompletion, refactoring, and error-checking capabilities in code editors like VS Code.
4.  **Scalability**: It helps manage the complexity of large codebases by enforcing contracts between different parts of your application.

Core Concepts:
-   **Basic Types**: \`string\`, \`number\`, \`boolean\`, \`null\`, \`undefined\`, \`any\`, \`unknown\`, \`void\`.
-   **Arrays and Tuples**: \`string[]\` or \`Array<string>\`. Tuples are fixed-length, fixed-type arrays.
-   **Interfaces and Types**: Used to define the shape of objects. \`interface User { id: number; name: string; }\`
-   **Functions**: You can type function parameters and return values. \`function add(a: number, b: number): number { return a + b; }\`
-   **Generics**: Create reusable components that can work with a variety of types. \`function identity<T>(arg: T): T { return arg; }\`
-   **Enums**: A way of giving more friendly names to sets of numeric values.

Getting Started:
To use TypeScript, you need the TypeScript compiler (\`tsc\`). You can install it globally via npm: \`npm install -g typescript\`. You then write your code in \`.ts\` files and compile them to \`.js\` files that can run in any browser or Node.js environment. Modern build tools like Vite have built-in support for TypeScript, making this process seamless.`,
        example: 'interface User {\\n  name: string;\\n  id: number;\\n}\\n\\nconst user: User = {\\n  name: "Alice",\\n  id: 1,\\n};\\n\\nfunction getAdminUser(): User {\\n  // ...logic\\n  return { name: "admin", id: 0 };\\n}\\n\\nconsole.log(user.name);',
        quiz: {
          question: 'What is the primary benefit of using TypeScript?',
          options: ['Faster runtime performance', 'Smaller bundle sizes', 'Catching errors during development', 'It runs on more browsers'],
          answer: 2
        },
        expertInsight: "In a large team, TypeScript's main value isn't just catching your own bugs, but preventing you from misusing a colleague's code. The type definitions serve as a contract that ensures you're using their functions and objects correctly.",
        funFact: "TypeScript was created by Anders Hejlsberg, the same person who designed C# at Microsoft. You can see a lot of C#'s influence in TypeScript's design!"
      },
      {
        id: 'web-security-essentials',
        title: 'Web Security Essentials',
        content: `Web security is not just a feature; it's a prerequisite for any modern application. Understanding the common vulnerabilities and how to prevent them is a critical skill for any developer.

**Common Web Vulnerabilities**:

1.  **Cross-Site Scripting (XSS)**: Occurs when an attacker injects malicious scripts into a web page viewed by other users. To prevent this, always sanitize user input before rendering it on a page. Use libraries like DOMPurify or built-in framework features that automatically escape HTML.

2.  **Cross-Site Request Forgery (CSRF)**: Tricks a user into performing an unwanted action on a web application in which they're currently authenticated. This is often prevented using anti-CSRF tokens.

3.  **SQL Injection (SQLi)**: An attack where malicious SQL queries are inserted into an application's database queries. Always use prepared statements or an ORM (Object-Relational Mapper) to prevent this.

4.  **Insecure Direct Object References (IDOR)**: Occurs when an application provides direct access to objects based on user-supplied input. For example, changing \`?user_id=123\` to \`?user_id=124\` to see another user's data. Always enforce authorization checks on the server.

**Best Practices for Secure Development**:

-   **HTTPS Everywhere**: Always use HTTPS to encrypt data in transit.
-   **Principle of Least Privilege**: Give users and services only the permissions they absolutely need.
-   **Keep Dependencies Updated**: Regularly scan and update your project's dependencies to patch known vulnerabilities.
-   **Use Security Headers**: Implement headers like \`Content-Security-Policy\` (CSP), \`Strict-Transport-Security\` (HSTS), and \`X-Content-Type-Options\`.
-   **Secure Authentication**: Store passwords using a strong, salted hashing algorithm (like bcrypt). Implement multi-factor authentication (MFA).`,
        example: '// Example of sanitizing user input to prevent XSS\\nimport DOMPurify from \'dompurify\';\\n\\nconst untrustedHTML = \'<img src="x" onerror="alert(\'XSS Attack!\')"/>\';\\nconst sanitizedHTML = DOMPurify.sanitize(untrustedHTML);\\n\\n// The output will be: <img src="x">\\ndocument.getElementById(\'content\').innerHTML = sanitizedHTML; // Safe to render',
        quiz: {
          question: 'What is the best way to prevent SQL Injection?',
          options: ['Manually escaping quotes', 'Using prepared statements or an ORM', 'Validating user input on the frontend', 'Using a firewall'],
          answer: 1
        },
        expertInsight: "Security is a process, not a destination. No app is 100% secure. The goal is to make your application as difficult and expensive to attack as possible. Regular security audits and penetration testing are non-negotiable for serious applications.",
        funFact: "The first major XSS attack was on MySpace in 2005. The 'Samy' worm gained over a million friends in less than 24 hours by injecting a script into users' profiles!"
      },
      {
        id: 'data-structures-javascript',
        title: 'Data Structures in JavaScript',
        content: `While JavaScript provides powerful built-in data structures like Arrays and Objects, a deeper understanding of traditional data structures is essential for solving complex problems efficiently.

**1. Linked List**:
A linear data structure where elements are not stored at contiguous memory locations. Each element (a 'node') contains a data field and a reference (a 'link') to the next node in the sequence. They are efficient for insertions and deletions.

**2. Stack**:
A LIFO (Last-In, First-Out) data structure. Think of a stack of plates. The last plate you put on top is the first one you take off. Common operations are \`push\` (add to top) and \`pop\` (remove from top).

**3. Queue**:
A FIFO (First-In, First-Out) data structure. Like a queue of people waiting for a bus. The first person to get in line is the first to get on. Common operations are \`enqueue\` (add to back) and \`dequeue\` (remove from front).

**4. Hash Table (or Hash Map)**:
The data structure that powers JavaScript's own Objects. It stores key-value pairs and uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found. This allows for near-constant time lookups, insertions, and deletions.

**5. Tree**:
A hierarchical data structure that consists of nodes connected by edges. A Binary Search Tree (BST) is a common type where each node has at most two children, and the left child is less than the parent, and the right child is greater. Trees are efficient for searching and sorting.

**6. Graph**:
A non-linear data structure consisting of nodes (or vertices) and edges. They are used to model networks, like social networks or road maps.`,
        example: '// Implementing a simple Stack\\nclass Stack {\\n  constructor() {\\n    this.items = [];\\n  }\\n  push(element) {\\n    this.items.push(element);\\n  }\\n  pop() {\\n    if (this.items.length === 0) return "Underflow";\\n    return this.items.pop();\\n  }\\n  peek() {\\n    return this.items[this.items.length - 1];\\n  }\\n}\\n\\nconst stack = new Stack();\\nstack.push(10);\\nstack.push(20);\\nconsole.log(stack.pop()); // 20',
        quiz: {
          question: 'Which data structure follows a LIFO (Last-In, First-Out) principle?',
          options: ['Queue', 'Stack', 'Linked List', 'Tree'],
          answer: 1
        },
        expertInsight: "Data structure knowledge is what separates a 'coder' from a 'software engineer'. Knowing when to use a Hash Map over an Array for lookups can be the difference between an app that is instant and one that freezes for seconds.",
        funFact: "The call stack, which manages function calls in JavaScript, is a perfect real-world example of a Stack data structure!"
      }
    ]
  }
];

export const projects = [
  {
    id: 'todo-app',
    title: 'To-do List App',
    description: 'A classic project to practice DOM and LocalStorage.',
    difficulty: 'Beginner',
    features: ['Add tasks', 'Delete tasks', 'Persist with LocalStorage'],
    guide: `
Step 1: Create the HTML structure with an input field, an 'Add' button, and an empty <ul> for the tasks.
Step 2: Write a function to handle adding tasks. Use document.createElement to create a new <li>.
Step 3: Add a delete button to each task <li>.
Step 4: Use LocalStorage to save the array of tasks so they persist after page refresh.
Step 5: Load tasks from LocalStorage when the page initializes.
    `,
    code: `
const input = document.querySelector('input');
const btn = document.querySelector('button');
const list = document.querySelector('ul');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function render() {
  list.innerHTML = tasks.map((t, i) => \`
    <li>
      \${t} 
      <button onclick="remove(\${i})">Delete</button>
    </li>
  \`).join('');
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

btn.onclick = () => {
  if (input.value) {
    tasks.push(input.value);
    input.value = '';
    render();
  }
};

window.remove = (i) => {
  tasks.splice(i, 1);
  render();
};

render();
    `
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    description: 'Learn to fetch data from real-world APIs.',
    difficulty: 'Intermediate',
    features: ['API Fetching', 'Async/Await', 'Dynamic UI Updates'],
    guide: `
Step 1: Get an API key from a service like OpenWeatherMap.
Step 2: Create a search input and a display area for weather data (temp, city, description).
Step 3: Use the Fetch API to call the weather service with the user's input city.
Step 4: Handle the JSON response and update the DOM with current weather info.
Step 5: Add error handling for cases where the city is not found or the API fails.
    `,
    code: `
const API_KEY = "your_api_key_here";
const btn = document.querySelector('button');
const cityInput = document.querySelector('input');

async function getWeather(city) {
  try {
    const res = await fetch(\`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${API_KEY}&units=metric\`);
    if (!res.ok) throw new Error('City not found');
    const data = await res.json();
    displayWeather(data);
  } catch (err) {
    alert(err.message);
  }
}

function displayWeather(data) {
  document.querySelector('.temp').textContent = \`\${data.main.temp}°C\`;
  document.querySelector('.city').textContent = data.name;
}

btn.onclick = () => getWeather(cityInput.value);
    `
  },
  {
    id: 'calculator',
    title: 'Calculator App',
    description: 'Build a fully functional calculator with arithmetic operations.',
    difficulty: 'Beginner',
    features: ['Arithmetic Logic', 'UI Event Handling', 'Keyboard Support'],
    guide: `
Step 1: Design the grid layout for buttons (0-9, operators, =, C).
Step 2: Create a variable to store the current expression as a string.
Step 3: Use event delegation to handle button clicks.
Step 4: Use the eval() function (carefully) or write a simple parser to calculate the result.
Step 5: Add clear and backspace functionality.
    `,
    code: `
let display = document.querySelector('.display');
let currentInput = '';

function updateDisplay() {
  display.value = currentInput || '0';
}

document.querySelectorAll('button').forEach(btn => {
  btn.onclick = () => {
    const val = btn.textContent;
    if (val === '=') {
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = 'Error';
      }
    } else if (val === 'C') {
      currentInput = '';
    } else {
      currentInput += val;
    }
    updateDisplay();
  };
});
    `
  },
  {
    id: 'quiz-app',
    title: 'Interactive Quiz App',
    description: 'Create a quiz app with score tracking and timers.',
    difficulty: 'Intermediate',
    features: ['State Management', 'Timer Logic', 'Result Calculations'],
    guide: `
Step 1: Define an array of question objects (question, options, answer).
Step 2: Create variables to track current question index and score.
Step 3: Write a function to display the current question and options.
Step 4: Add click listeners to options to check the answer and move to the next question.
Step 5: Show the final score when all questions are answered.
    `,
    code: `
const questions = [
  { q: "2+2?", a: ["3", "4"], correct: 1 },
  // ... more
];

let index = 0;
let score = 0;

function showQuestion() {
  const q = questions[index];
  document.querySelector('.q').textContent = q.q;
  // render options...
}

function checkAnswer(selected) {
  if (selected === questions[index].correct) score++;
  index++;
  if (index < questions.length) showQuestion();
  else alert(\`Score: \${score}\`);
}
    `
  },
  {
    id: 'simple-game',
    title: 'Memory Match Game',
    description: 'A fun game to practice game logic and state handling.',
    difficulty: 'Intermediate',
    features: ['Game State', 'CSS Transitions', 'Randomization'],
    guide: `
Step 1: Create a grid of cards with two sides (front and back).
Step 2: Define an array of pairs and shuffle them.
Step 3: Track flipped cards (max 2 at a time).
Step 4: Check if the two flipped cards match. If they match, keep them flipped; otherwise, flip them back.
Step 5: Track the number of pairs matched to determine when the game ends.
    `,
    code: `
let cards = ['A', 'A', 'B', 'B', 'C', 'C'];
cards.sort(() => Math.random() - 0.5);

let flipped = [];
let matched = 0;

function handleFlip(card, val) {
  if (flipped.length < 2) {
    card.textContent = val;
    flipped.push({ card, val });
    if (flipped.length === 2) checkMatch();
  }
}

function checkMatch() {
  const [c1, c2] = flipped;
  if (c1.val === c2.val) {
    matched++;
    flipped = [];
  } else {
    setTimeout(() => {
      c1.card.textContent = '';
      c2.card.textContent = '';
      flipped = [];
    }, 1000);
  }
}
    `
  }
];

export const reference = {
  syntax: [
    { name: 'Variables', snippet: 'const x = 5; let y = "hi";' },
    { name: 'Functions', snippet: 'function add(a, b) { return a + b; }' },
    { name: 'Arrow Function', snippet: 'const add = (a, b) => a + b;' },
    { name: 'Destructuring', snippet: 'const { name, age } = user;\nconst [first, second] = list;' },
    { name: 'Template Literals', snippet: 'const msg = `Hello ${name}!`;' }
  ],
  arrayMethods: [
    { name: '.map()', description: 'Creates a new array by calling a function for every array element.' },
    { name: '.filter()', description: 'Creates a new array with every element that passes a test.' },
    { name: '.reduce()', description: 'Executes a reducer function on each element, resulting in a single output value.' },
    { name: '.forEach()', description: 'Executes a provided function once for each array element.' },
    { name: '.find()', description: 'Returns the value of the first element in the array that satisfies the provided testing function.' }
  ],
  stringMethods: [
    { name: '.split()', description: 'Splits a String object into an array of strings by separating the string into substrings.' },
    { name: '.includes()', description: 'Determines whether one string may be found within another string.' },
    { name: '.slice()', description: 'Extracts a section of a string and returns it as a new string.' }
  ]
};

export const resources = {
  books: [
    { 
      title: "You Don't Know JS Yet", 
      author: "Kyle Simpson", 
      desc: "A series of books diving deep into the core mechanisms of the JavaScript language.",
      link: "https://github.com/getify/You-Dont-Know-JS"
    },
    { 
      title: "Eloquent JavaScript", 
      author: "Marijn Haverbeke", 
      desc: "A modern introduction to programming, focusing on JavaScript and the web.",
      link: "https://eloquentjavascript.net/"
    },
    { 
      title: "JavaScript: The Good Parts", 
      author: "Douglas Crockford", 
      desc: "The classic guide to the best features of JavaScript, helping you avoid the bad ones.",
      link: "https://www.oreilly.com/library/view/javascript-the-good/9780596517748/"
    }
  ],
  youtube: [
    { 
      name: "Traversy Media", 
      desc: "Practical project-based tutorials for all skill levels.",
      link: "https://www.youtube.com/@traversymedia"
    },
    { 
      name: "Fireship", 
      desc: "High-intensity code tutorials and tech news in '100 seconds'.",
      link: "https://www.youtube.com/@Fireship"
    },
    { 
      name: "Web Dev Simplified", 
      desc: "Breaking down complex web concepts into easy-to-understand videos.",
      link: "https://www.youtube.com/@WebDevSimplified"
    }
  ],
  practice: [
    { 
      name: "Codewars", 
      desc: "Solve 'kata' (challenges) to level up your skills and rank up.",
      link: "https://www.codewars.com/"
    },
    { 
      name: "LeetCode", 
      desc: "The standard for practicing technical interview questions.",
      link: "https://leetcode.com/"
    },
    { 
      name: "Frontend Mentor", 
      desc: "Build real-world frontend projects using professional designs.",
      link: "https://www.frontendmentor.io/"
    }
  ]
};
