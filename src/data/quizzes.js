export const quizzes = [
  {
    id: 'basic',
    title: 'Basic JavaScript',
    description: 'Fundamentals: variables, types, operators, and basics.',
    questions: [
      {
        id: 'b1',
        question: 'Which of the following is NOT a JavaScript data type?',
        options: ['String', 'Number', 'Boolean', 'Character'],
        answer: 3,
        explanation: 'JavaScript does not have a "Character" type. Strings represent text, regardless of length.'
      },
      {
        id: 'b2',
        question: 'What keyword is used to define a constant variable?',
        options: ['var', 'let', 'const', 'static'],
        answer: 2,
        explanation: '"const" is used to declare variables whose values cannot be reassigned.'
      },
      {
        id: 'b3',
        question: 'What is the result of 5 + "5"?',
        options: ['10', '"55"', 'NaN', 'Error'],
        answer: 1,
        explanation: 'JavaScript performs type coercion, converting the number 5 to a string and concatenating.'
      },
      {
        id: 'b4',
        question: 'Which operator is used for strict equality?',
        options: ['==', '===', '=', '!='],
        answer: 1,
        explanation: '=== checks both value and type without coercion.'
      },
      {
        id: 'b5',
        question: 'How do you write an single-line comment in JavaScript?',
        options: ['<!-- comment -->', '/* comment */', '// comment', '# comment'],
        answer: 2,
        explanation: '// is used for single-line comments in JS.'
      },
      {
        id: 'b6',
        question: 'Which built-in method returns the length of a string?',
        options: ['length()', 'size()', 'len()', 'None of these'],
        answer: 3,
        explanation: '"length" is a property, not a method (no parentheses needed).'
      },
      {
        id: 'b7',
        question: 'What does "null" represent in JavaScript?',
        options: ['An empty string', 'An undefined variable', 'An intentional absence of value', 'A zero value'],
        answer: 2,
        explanation: 'null is an assigned value representing "nothing".'
      },
      {
        id: 'b8',
        question: 'Which of these is a valid variable name?',
        options: ['2names', '_name', 'first-name', 'var'],
        answer: 1,
        explanation: 'Variable names can start with a letter, underscore (_), or dollar sign ($).'
      },
      {
        id: 'b9',
        question: 'What is the index of the first element in an array?',
        options: ['1', '0', '-1', 'any'],
        answer: 1,
        explanation: 'JavaScript arrays are zero-indexed.'
      },
      {
        id: 'b10',
        question: 'Which function is used to print content to the console?',
        options: ['print()', 'console.log()', 'log.console()', 'write()'],
        answer: 1,
        explanation: 'console.log() is the standard for printing to the console.'
      },
      {
        id: 'b11',
        question: 'What is the output of typeof null?',
        options: ['"null"', '"undefined"', '"object"', '"number"'],
        answer: 2,
        explanation: 'This is a long-standing bug in JS where null is incorrectly identified as an object.'
      },
      {
        id: 'b12',
        question: 'How do you create an array in JavaScript?',
        options: ['let a = []', 'let a = {}', 'let a = ()', 'let a = new Array()'],
        answer: 0,
        explanation: 'Square brackets [] are the standard way to create array literals.'
      },
      {
        id: 'b13',
        question: 'Which loop is best for iterating over array values?',
        options: ['for...in', 'for...of', 'while', 'do...while'],
        answer: 1,
        explanation: 'for...of iterates over the values of an iterable object (like an array).'
      },
      {
        id: 'b14',
        question: 'What does NaN stand for?',
        options: ['New and Next', 'Not a Number', 'Negative and Null', 'None'],
        answer: 1,
        explanation: 'NaN represents a value that is not a legal number.'
      },
      {
        id: 'b15',
        question: 'Which keyword is used to exit a loop?',
        options: ['exit', 'stop', 'break', 'return'],
        answer: 2,
        explanation: 'break exits the current loop immediately.'
      },
      {
        id: 'b16',
        question: 'What is the output of 10 % 3?',
        options: ['1', '3', '0', '0.33'],
        answer: 0,
        explanation: 'The modulo operator % returns the remainder of the division.'
      },
      {
        id: 'b17',
        question: 'How do you declare a function in JS?',
        options: ['function myFunc()', 'def myFunc()', 'func myFunc()', 'method myFunc()'],
        answer: 0,
        explanation: 'The "function" keyword is used to declare functions.'
      },
      {
        id: 'b18',
        question: 'Which method adds an element to the end of an array?',
        options: ['pop()', 'push()', 'shift()', 'unshift()'],
        answer: 1,
        explanation: 'push() adds to the end, while unshift() adds to the beginning.'
      },
      {
        id: 'b19',
        question: 'What is the result of true && false?',
        options: ['true', 'false', 'undefined', 'null'],
        answer: 1,
        explanation: 'The logical AND operator requires both sides to be true.'
      },
      {
        id: 'b20',
        question: 'Which of these is a truthy value?',
        options: ['0', '""', '[]', 'undefined'],
        answer: 2,
        explanation: 'Empty arrays and objects are truthy in JavaScript.'
      },
      {
        id: 'b21',
        question: 'How do you check if a variable is an array?',
        options: ['typeof a === "array"', 'a.isArray()', 'Array.isArray(a)', 'a instanceof Array'],
        answer: 2,
        explanation: 'Array.isArray() is the most reliable way to check for arrays.'
      },
      {
        id: 'b22',
        question: 'What does the "this" keyword refer to by default in a global context?',
        options: ['The current function', 'The Window object', 'null', 'undefined'],
        answer: 1,
        explanation: 'In a browser, "this" refers to the global Window object by default.'
      },
      {
        id: 'b23',
        question: 'Which method removes the last element from an array?',
        options: ['shift()', 'pop()', 'push()', 'splice()'],
        answer: 1,
        explanation: 'pop() removes the last element and returns it.'
      },
      {
        id: 'b24',
        question: 'What is the purpose of the "return" statement?',
        options: ['To stop a loop', 'To output to the console', 'To return a value from a function', 'To jump to a label'],
        answer: 2,
        explanation: 'return stops function execution and sends a value back to the caller.'
      },
      {
        id: 'b25',
        question: 'How do you convert a string to an integer?',
        options: ['toInt()', 'Number.parse()', 'parseInt()', 'Integer.parse()'],
        answer: 2,
        explanation: 'parseInt() parses a string and returns an integer.'
      },
      {
        id: 'b26',
        question: 'What is the output of 2 + 2 + "2"?',
        options: ['6', '"42"', '"222"', 'NaN'],
        answer: 1,
        explanation: 'The first 2 + 2 results in 4 (number), then 4 + "2" results in "42" (string).'
      },
      {
        id: 'b27',
        question: 'Which of these is NOT a logical operator?',
        options: ['&&', '||', '!', '&|'],
        answer: 3,
        explanation: '&| is not a valid operator in JavaScript.'
      },
      {
        id: 'b28',
        question: 'What is the result of typeof NaN?',
        options: ['"NaN"', '"number"', '"undefined"', '"object"'],
        answer: 1,
        explanation: 'NaN is technically a numeric type.'
      },
      {
        id: 'b29',
        question: 'How do you find the minimum of x and y?',
        options: ['Math.min(x, y)', 'min(x, y)', 'Math.lower(x, y)', 'x.min(y)'],
        answer: 0,
        explanation: 'Math.min() returns the smallest of zero or more numbers.'
      },
      {
        id: 'b30',
        question: 'Which method removes the first element from an array?',
        options: ['pop()', 'push()', 'shift()', 'unshift()'],
        answer: 2,
        explanation: 'shift() removes the first element, while pop() removes the last.'
      },
      {
        id: 'b31',
        question: 'What is the output of Boolean("")?',
        options: ['true', 'false', 'undefined', 'null'],
        answer: 1,
        explanation: 'Empty strings are falsy in JavaScript.'
      },
      {
        id: 'b32',
        question: 'How do you round 4.7 to the nearest integer?',
        options: ['Math.round(4.7)', 'Math.rnd(4.7)', 'round(4.7)', 'Math.floor(4.7)'],
        answer: 0,
        explanation: 'Math.round() rounds to the nearest integer.'
      },
      {
        id: 'b33',
        question: 'Which statement is used to execute code based on different conditions?',
        options: ['select', 'switch', 'choose', 'if-all'],
        answer: 1,
        explanation: 'switch is used for multi-way branching.'
      },
      {
        id: 'b34',
        question: 'What is the result of "Hello".charAt(0)?',
        options: ['"H"', '"e"', '0', 'Error'],
        answer: 0,
        explanation: 'charAt(0) returns the character at the first index.'
      },
      {
        id: 'b35',
        question: 'Which operator is used to check if a property exists in an object?',
        options: ['exists', 'has', 'in', 'within'],
        answer: 2,
        explanation: 'The "in" operator returns true if the specified property is in the specified object.'
      },
      {
        id: 'b36',
        question: 'What is the output of `typeof 42`?',
        options: ['"int"', '"number"', '"float"', '"integer"'],
        answer: 1,
        explanation: 'All numbers in JS are of the "number" type.'
      },
      {
        id: 'b37',
        question: 'How do you check the length of an array `arr`?',
        options: ['arr.size()', 'arr.len()', 'arr.length', 'arr.count()'],
        answer: 2,
        explanation: 'length is a property of arrays.'
      },
      {
        id: 'b38',
        question: 'What is the result of `2 ** 3`?',
        options: ['6', '8', '9', '5'],
        answer: 1,
        explanation: '** is the exponentiation operator (2 cubed).'
      },
      {
        id: 'b39',
        question: 'Which method converts a number to a string?',
        options: ['toString()', 'convertToString()', 'asString()', 'parseString()'],
        answer: 0,
        explanation: 'toString() returns a string representing the specified number.'
      },
      {
        id: 'b40',
        question: 'What is the value of `true || false`?',
        options: ['true', 'false', 'undefined', 'null'],
        answer: 0,
        explanation: 'The OR operator returns true if at least one operand is true.'
      },
      {
        id: 'b41',
        question: 'Which keyword is used to declare a block-scoped variable that can be reassigned?',
        options: ['var', 'let', 'const', 'block'],
        answer: 1,
        explanation: 'let is block-scoped and allows reassignment.'
      },
      {
        id: 'b42',
        question: 'How do you write "Hello World" in an alert box?',
        options: ['msg("Hello World")', 'alertBox("Hello World")', 'alert("Hello World")', 'console.alert("Hello World")'],
        answer: 2,
        explanation: 'alert() displays a dialog box with a message.'
      },
      {
        id: 'b43',
        question: 'Which operator is used to assign a value to a variable?',
        options: ['*', 'x', '=', '-'],
        answer: 2,
        explanation: '= is the assignment operator.'
      },
      {
        id: 'b44',
        question: 'What is the result of `10 + 20 + "30"`?',
        options: ['"3030"', '60', '"102030"', 'NaN'],
        answer: 0,
        explanation: '10 + 20 is 30, then 30 + "30" is "3030".'
      },
      {
        id: 'b45',
        question: 'How do you create a function in JavaScript?',
        options: ['function:myFunction()', 'function myFunction()', 'function = myFunction()', 'def myFunction()'],
        answer: 1,
        explanation: 'The standard way to declare a function.'
      },
      {
        id: 'b46',
        question: 'How do you call a function named "myFunction"?',
        options: ['call myFunction()', 'myFunction()', 'run myFunction()', 'execute myFunction()'],
        answer: 1,
        explanation: 'Use the function name followed by parentheses.'
      },
      {
        id: 'b47',
        question: 'How to write an IF statement in JavaScript?',
        options: ['if i = 5 then', 'if (i == 5)', 'if i == 5 then', 'if i = 5'],
        answer: 1,
        explanation: 'Conditions in JS must be in parentheses.'
      },
      {
        id: 'b48',
        question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        options: ['if (i != 5)', 'if (i <> 5)', 'if i <> 5', 'if i != 5 then'],
        answer: 0,
        explanation: '!= is the inequality operator.'
      },
      {
        id: 'b49',
        question: 'How does a WHILE loop start?',
        options: ['while (i <= 10; i++)', 'while i = 1 to 10', 'while (i <= 10)', 'while i <= 10'],
        answer: 2,
        explanation: 'The condition goes in parentheses after "while".'
      },
      {
        id: 'b50',
        question: 'How does a FOR loop start?',
        options: ['for (i = 0; i <= 5)', 'for (i = 0; i <= 5; i++)', 'for i = 1 to 5', 'for (i <= 5; i++)'],
        answer: 1,
        explanation: 'A for loop has three parts: initialization, condition, and increment.'
      }
    ]
  },
  {
    id: 'intermediate',
    title: 'Intermediate JS',
    description: 'DOM, Events, Async, ES6+, and Arrays.',
    questions: [
      {
        id: 'i1',
        question: 'What is the purpose of the "map" method in arrays?',
        options: ['To filter elements', 'To find an element', 'To create a new array with transformed elements', 'To sort an array'],
        answer: 2,
        explanation: 'map() creates a new array by calling a function for every array element.'
      },
      {
        id: 'i2',
        question: 'Which keyword is used to handle errors in JavaScript?',
        options: ['error', 'catch', 'try', 'throw'],
        answer: 2,
        explanation: 'try...catch blocks are used for error handling.'
      },
      {
        id: 'i3',
        question: 'What is a Promise in JavaScript?',
        options: ['A guarantee that code will run', 'An object representing eventual completion of an async operation', 'A type of function', 'A syntax for loops'],
        answer: 1,
        explanation: 'Promises handle asynchronous operations and their future results.'
      },
      {
        id: 'i4',
        question: 'What does the spread operator (...) do?',
        options: ['Combines strings', 'Expands an iterable into individual elements', 'Creates a closure', 'None'],
        answer: 1,
        explanation: 'Spread expands arrays/objects into elements or properties.'
      },
      {
        id: 'i5',
        question: 'Which method is used to select an element by its CSS selector?',
        options: ['getElementById', 'getElementsByClassName', 'querySelector', 'querySelectorAll'],
        answer: 2,
        explanation: 'querySelector() returns the first element matching a CSS selector.'
      },
      {
        id: 'i6',
        question: 'What is the purpose of "template literals"?',
        options: ['To write faster code', 'To allow embedded expressions and multi-line strings', 'To create objects', 'To handle errors'],
        answer: 1,
        explanation: 'Backticks (`) allow string interpolation with ${}.'
      },
      {
        id: 'i7',
        question: 'How do you stop an event from bubbling up the DOM tree?',
        options: ['event.preventDefault()', 'event.stopPropagation()', 'event.stop()', 'return false'],
        answer: 1,
        explanation: 'stopPropagation() prevents the event from reaching parent elements.'
      },
      {
        id: 'i8',
        question: 'What is "hoisting" in JavaScript?',
        options: ['Moving code to the server', 'Variables and function declarations moved to the top of their scope', 'A way to optimize loops', 'None'],
        answer: 1,
        explanation: 'Hoisting allows using functions/variables before they are declared (with var/function).'
      },
      {
        id: 'i9',
        question: 'Which ES6 feature allows extracting values from objects into variables?',
        options: ['Spread', 'Rest', 'Destructuring', 'Arrow functions'],
        answer: 2,
        explanation: 'Destructuring lets you unpack values from arrays/objects.'
      },
      {
        id: 'i10',
        question: 'What is the output of [1, 2, 3].filter(x => x > 1)?',
        options: ['[1]', '[2, 3]', '[1, 2, 3]', '[3]'],
        answer: 1,
        explanation: 'filter() creates a new array with elements that pass the test.'
      },
      {
        id: 'i11',
        question: 'What does "async/await" do?',
        options: ['Makes code run faster', 'Simplifies working with Promises', 'Prevents loops', 'None'],
        answer: 1,
        explanation: 'async/await provides a cleaner syntax for working with asynchronous code.'
      },
      {
        id: 'i12',
        question: 'Which method is used to merge two or more arrays?',
        options: ['combine()', 'merge()', 'concat()', 'join()'],
        answer: 2,
        explanation: 'concat() returns a new array combining multiple arrays.'
      },
      {
        id: 'i13',
        question: 'What is a "closure" in JavaScript?',
        options: ['Closing a browser tab', 'A function with access to its outer scope', 'A way to end a script', 'A private variable'],
        answer: 1,
        explanation: 'A closure is a function that remembers the environment in which it was created.'
      },
      {
        id: 'i14',
        question: 'What is the difference between "let" and "var"?',
        options: ['let is global, var is local', 'let is block-scoped, var is function-scoped', 'There is no difference', 'var is newer than let'],
        answer: 1,
        explanation: 'let (and const) are restricted to the block they are defined in.'
      },
      {
        id: 'i15',
        question: 'Which method converts a JSON string into a JavaScript object?',
        options: ['JSON.stringify()', 'JSON.toObject()', 'JSON.parse()', 'JSON.convert()'],
        answer: 2,
        explanation: 'JSON.parse() is used to parse JSON strings.'
      },
      {
        id: 'i16',
        question: 'What does the "fetch" API return?',
        options: ['A string', 'A JSON object', 'A Promise', 'The data directly'],
        answer: 2,
        explanation: 'fetch() returns a Promise that resolves to a Response object.'
      },
      {
        id: 'i17',
        question: 'How do you remove an element from the DOM?',
        options: ['element.delete()', 'element.remove()', 'element.hide()', 'document.delete(element)'],
        answer: 1,
        explanation: 'The remove() method removes the element directly from the DOM.'
      },
      {
        id: 'i18',
        question: 'What is the purpose of "use strict"?',
        options: ['To make code more readable', 'To enable newer JS features', 'To enforce stricter parsing and error handling', 'None'],
        answer: 2,
        explanation: '"use strict" catches common coding bloopers and prevents unsafe actions.'
      },
      {
        id: 'i19',
        question: 'Which array method returns the first element that satisfies a condition?',
        options: ['filter()', 'some()', 'find()', 'every()'],
        answer: 2,
        explanation: 'find() returns the value of the first element that passes the test.'
      },
      {
        id: 'i20',
        question: 'What is an "Arrow Function"?',
        options: ['A function with a pointer', 'A shorter function syntax that preserves "this"', 'A function that only works with numbers', 'None'],
        answer: 1,
        explanation: 'Arrow functions (=>) are concise and don\'t have their own "this".'
      },
      {
        id: 'i21',
        question: 'What is the result of [1, 2, 3].reduce((a, b) => a + b, 0)?',
        options: ['6', '[1, 2, 3]', '0', 'Error'],
        answer: 0,
        explanation: 'reduce() executes a reducer function on each element, resulting in a single output value.'
      },
      {
        id: 'i22',
        question: 'Which method checks if at least one element in an array passes a test?',
        options: ['every()', 'some()', 'filter()', 'find()'],
        answer: 1,
        explanation: 'some() returns true if any element passes the test.'
      },
      {
        id: 'i23',
        question: 'What does "event.preventDefault()" do?',
        options: ['Stops event bubbling', 'Prevents the default browser action for an event', 'Deletes the event', 'None'],
        answer: 1,
        explanation: 'It stops the browser\'s default behavior (like following a link or submitting a form).'
      },
      {
        id: 'i24',
        question: 'How do you create a custom event in JavaScript?',
        options: ['new Event()', 'document.createEvent()', 'new CustomEvent()', 'All of these'],
        answer: 2,
        explanation: 'CustomEvent allows passing data via the "detail" property.'
      },
      {
        id: 'i25',
        question: 'What is the purpose of the "bind" method?',
        options: ['To combine strings', 'To create a new function with a fixed "this" context', 'To loop through an object', 'None'],
        answer: 1,
        explanation: 'bind() returns a new function with "this" set to a specific value.'
      },
      {
        id: 'i26',
        question: 'What is the output of `[1, 2, 3].every(x => x > 0)`?',
        options: ['true', 'false', 'Error', 'undefined'],
        answer: 0,
        explanation: 'every() checks if all elements in the array pass the test.'
      },
      {
        id: 'i27',
        question: 'Which method is used to flatten an array of arrays?',
        options: ['flatten()', 'flat()', 'smooth()', 'level()'],
        answer: 1,
        explanation: 'flat() creates a new array with all sub-array elements concatenated into it.'
      },
      {
        id: 'i28',
        question: 'What is the purpose of "Array.prototype.sort()"?',
        options: ['To reverse an array', 'To sort elements in place (mutates original)', 'To create a sorted copy', 'None'],
        answer: 1,
        explanation: 'sort() sorts the elements of an array in place.'
      },
      {
        id: 'i29',
        question: 'How do you check if a string includes a specific word?',
        options: ['has()', 'contains()', 'includes()', 'matches()'],
        answer: 2,
        explanation: 'includes() checks if one string may be found within another.'
      },
      {
        id: 'i30',
        question: 'What is the default value of a function parameter if no argument is passed?',
        options: ['null', 'undefined', '0', 'Error'],
        answer: 1,
        explanation: 'Missing arguments result in the parameter being undefined unless a default is set.'
      },
      {
        id: 'i31',
        question: 'Which method is used to find the index of an element in an array?',
        options: ['find()', 'indexOf()', 'search()', 'locate()'],
        answer: 1,
        explanation: 'indexOf() returns the first index at which a given element can be found.'
      },
      {
        id: 'i32',
        question: 'What is the result of `[1, 2, 3].reverse()`?',
        options: ['[3, 2, 1]', '[1, 2, 3]', 'Error', 'undefined'],
        answer: 0,
        explanation: 'reverse() reverses an array in place.'
      },
      {
        id: 'i33',
        question: 'Which method is used to extract a section of an array and returns a new array?',
        options: ['splice()', 'slice()', 'extract()', 'cut()'],
        answer: 1,
        explanation: 'slice() returns a shallow copy of a portion of an array.'
      },
      {
        id: 'i34',
        question: 'How do you add an element to the beginning of an array?',
        options: ['push()', 'unshift()', 'addFirst()', 'prepend()'],
        answer: 1,
        explanation: 'unshift() adds elements to the start of an array.'
      },
      {
        id: 'i35',
        question: 'What is the purpose of "Array.prototype.join()"?',
        options: ['To merge arrays', 'To create a string from array elements', 'To add elements', 'None'],
        answer: 1,
        explanation: 'join() creates and returns a new string by concatenating all elements in an array.'
      }
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced JS',
    description: 'Prototypes, Event Loop, Memory, and Patterns.',
    questions: [
      {
        id: 'a1',
        question: 'What is the "Event Loop"?',
        options: ['A loop that handles events', 'The mechanism that manages async task execution', 'A type of recursion', 'None'],
        answer: 1,
        explanation: 'The Event Loop coordinates the execution of code, events, and sub-tasks.'
      },
      {
        id: 'a2',
        question: 'What is a "Prototype" in JavaScript?',
        options: ['A beta version of a script', 'An object from which other objects inherit properties', 'A blueprint for a class', 'None'],
        answer: 1,
        explanation: 'Every JS object has a prototype that it inherits methods and properties from.'
      },
      {
        id: 'a3',
        question: 'What is "Debouncing"?',
        options: ['Fixing bugs', 'Ensuring a function is only called once after a delay', 'Removing listeners', 'None'],
        answer: 1,
        explanation: 'Debouncing limits the rate at which a function gets invoked.'
      },
      {
        id: 'a4',
        question: 'What is the "Shadow DOM"?',
        options: ['A hidden part of the internet', 'A way to encapsulate styles and markup in Web Components', 'A backup of the DOM', 'None'],
        answer: 1,
        explanation: 'Shadow DOM provides encapsulation for web components.'
      },
      {
        id: 'a5',
        question: 'What is "Throttling"?',
        options: ['Stopping a script', 'Ensuring a function is called at most once every X milliseconds', 'Speeding up code', 'None'],
        answer: 1,
        explanation: 'Throttling limits the number of times a function can be called over time.'
      },
      {
        id: 'a6',
        question: 'What is "Memoization"?',
        options: ['Memorizing code', 'Caching the results of expensive function calls', 'A memory leak', 'None'],
        answer: 1,
        explanation: 'Memoization optimizes performance by storing results of previous calls.'
      },
      {
        id: 'a7',
        question: 'What does "Object.freeze()" do?',
        options: ['Stops a script', 'Prevents any changes to an object (read-only)', 'Clears an object', 'None'],
        answer: 1,
        explanation: 'freeze() makes an object immutable.'
      },
      {
        id: 'a8',
        question: 'What is the difference between a "Macrotask" and a "Microtask"?',
        options: ['No difference', 'Microtasks have higher priority in the event loop', 'Macrotasks are faster', 'None'],
        answer: 1,
        explanation: 'Microtasks (Promises) are processed before the next Macrotask (setTimeout).'
      },
      {
        id: 'a9',
        question: 'What is a "WeakMap" in JavaScript?',
        options: ['A map with fewer features', 'A map where keys must be objects and are weakly held', 'A broken map', 'None'],
        answer: 1,
        explanation: 'WeakMap allows garbage collection of keys if they are not referenced elsewhere.'
      },
      {
        id: 'a10',
        question: 'What is "Tail Call Optimization"?',
        options: ['Optimizing the end of a script', 'A way to prevent stack overflow in recursive functions', 'A loop optimization', 'None'],
        answer: 1,
        explanation: 'TCO allows recursive functions to run without increasing the call stack.'
      },
      {
        id: 'a11',
        question: 'What is the purpose of "Proxy" in ES6?',
        options: ['To handle network requests', 'To intercept and redefine operations on an object', 'To speed up loops', 'None'],
        answer: 1,
        explanation: 'Proxies allow custom behavior for fundamental operations (getting, setting, etc.).'
      },
      {
        id: 'a12',
        question: 'What does "Object.create(null)" do?',
        options: ['Creates an empty object', 'Creates an object with no prototype', 'Creates a null value', 'Error'],
        answer: 1,
        explanation: 'It creates a pure dictionary object that doesn\'t inherit from Object.prototype.'
      },
      {
        id: 'a13',
        question: 'What is "Currying" in functional programming?',
        options: ['Adding spice to code', 'Transforming a function with multiple arguments into a sequence of functions', 'A way to handle errors', 'None'],
        answer: 1,
        explanation: 'Currying allows partial application of function arguments.'
      },
      {
        id: 'a14',
        question: 'What is the "Call Stack"?',
        options: ['A place to store phone numbers', 'A mechanism to keep track of function execution', 'A type of database', 'None'],
        answer: 1,
        explanation: 'The Call Stack manages the order in which functions are called and executed.'
      },
      {
        id: 'a15',
        question: 'What is "Garbage Collection" in JS?',
        options: ['Deleting unused files', 'Automatic memory management reclaiming unused objects', 'Cleaning the console', 'None'],
        answer: 1,
        explanation: 'JS engines automatically free up memory that is no longer reachable.'
      },
      {
        id: 'a16',
        question: 'What is the purpose of "Reflect" API?',
        options: ['To mirror an object', 'To perform interceptable JS operations', 'To handle async code', 'None'],
        answer: 1,
        explanation: 'Reflect provides methods for interceptable operations, often used with Proxies.'
      },
      {
        id: 'a17',
        question: 'What is "Structural Cloning"?',
        options: ['Copying code structure', 'A way to deep clone objects for Web Workers', 'A CSS technique', 'None'],
        answer: 1,
        explanation: 'Structural cloning is used to pass data between threads without sharing memory.'
      },
      {
        id: 'a18',
        question: 'What is the "Temporal Dead Zone" (TDZ)?',
        options: ['A game level', 'The period between variable declaration and initialization with let/const', 'A memory leak period', 'None'],
        answer: 1,
        explanation: 'Variables declared with let/const cannot be accessed before their initialization.'
      },
      {
        id: 'a19',
        question: 'What is a "Pure Function"?',
        options: ['A function with no code', 'A function that always returns the same output for the same input with no side effects', 'A function that only uses numbers', 'None'],
        answer: 1,
        explanation: 'Pure functions are predictable and don\'t modify external state.'
      },
      {
        id: 'a20',
        question: 'What is "IIFE"?',
        options: ['An interface', 'Immediately Invoked Function Expression', 'A type of loop', 'None'],
        answer: 1,
        explanation: 'IIFE is a function that runs as soon as it is defined.'
      }
    ]
  },
  {
    id: 'tricky',
    title: 'Tricky JS',
    description: 'The "weird" parts of JS that confuse everyone.',
    questions: [
      {
        id: 't1',
        question: 'What is the result of [] == ![]?',
        options: ['true', 'false', 'Error', 'undefined'],
        answer: 0,
        explanation: 'Due to complex type coercion: ![] becomes false, then both are converted to 0.'
      },
      {
        id: 't2',
        question: 'What is the output of typeof NaN?',
        options: ['"NaN"', '"number"', '"undefined"', '"object"'],
        answer: 1,
        explanation: 'Ironically, "Not a Number" is technically a "number" type in JS.'
      },
      {
        id: 't3',
        question: 'What is 0.1 + 0.2 === 0.3?',
        options: ['true', 'false', 'undefined', 'NaN'],
        answer: 1,
        explanation: 'Floating point precision issues make 0.1 + 0.2 equal to 0.30000000000000004.'
      },
      {
        id: 't4',
        question: 'What is the result of "5" - 3?',
        options: ['2', '"53"', 'NaN', 'Error'],
        answer: 0,
        explanation: 'The minus operator always attempts to convert strings to numbers.'
      },
      {
        id: 't5',
        question: 'What is "1" + 2 + 3?',
        options: ['6', '"123"', '"15"', 'NaN'],
        answer: 1,
        explanation: 'Evaluates left-to-right: "1" + 2 becomes "12", then "12" + 3 becomes "123".'
      },
      {
        id: 't6',
        question: 'What is the output of [] + []?',
        options: ['[]', '""', '0', 'undefined'],
        answer: 1,
        explanation: 'Adding two arrays converts them to empty strings and concatenates them.'
      },
      {
        id: 't7',
        question: 'What is the result of typeof typeof 1?',
        options: ['"number"', '"string"', '"object"', '"undefined"'],
        answer: 1,
        explanation: 'typeof 1 is "number", and typeof "number" is "string".'
      },
      {
        id: 't8',
        question: 'What is the output of (function(){ return typeof arguments; })();?',
        options: ['"array"', '"object"', '"arguments"', '"undefined"'],
        answer: 1,
        explanation: 'The "arguments" object is an array-like object, but its type is "object".'
      },
      {
        id: 't9',
        question: 'What is the result of 1 < 2 < 3?',
        options: ['true', 'false', 'Error', 'NaN'],
        answer: 0,
        explanation: '1 < 2 is true, then true < 3 is coerced to 1 < 3, which is true.'
      },
      {
        id: 't10',
        question: 'What is the result of 3 > 2 > 1?',
        options: ['true', 'false', 'Error', 'NaN'],
        answer: 1,
        explanation: '3 > 2 is true, then true > 1 is coerced to 1 > 1, which is false.'
      },
      {
        id: 't11',
        question: 'What is the value of +!![]?',
        options: ['true', '1', '0', 'NaN'],
        answer: 1,
        explanation: '!![] is true, and the unary + converts true to 1.'
      },
      {
        id: 't12',
        question: 'What is the output of console.log(false == \'0\')?',
        options: ['true', 'false', 'Error', 'NaN'],
        answer: 0,
        explanation: 'Both sides are coerced to numbers (0) before comparison.'
      },
      {
        id: 't13',
        question: 'What is the output of console.log(false === \'0\')?',
        options: ['true', 'false', 'Error', 'NaN'],
        answer: 1,
        explanation: 'Strict equality checks type, and Boolean !== String.'
      },
      {
        id: 't14',
        question: 'What is the result of "b" + "a" + + "a" + "a"?',
        options: ['"baaa"', '"banana"', '"baNaN a"', '"ba NaNa"'],
        answer: 1,
        explanation: 'The extra + before "a" attempts to convert it to a number, resulting in NaN. Concatenated, it spells "baNaNa" (lowercase).'
      },
      {
        id: 't15',
        question: 'What is the result of [1, 2, 3] + [4, 5, 6]?',
        options: ['[1, 2, 3, 4, 5, 6]', '"1,2,34,5,6"', '"1,2,3,4,5,6"', 'NaN'],
        answer: 1,
        explanation: 'Arrays are converted to strings "1,2,3" and "4,5,6" and joined.'
      },
      {
        id: 't16',
        question: 'What is the output of typeof function(){ }?',
        options: ['"object"', '"function"', '"undefined"', '"method"'],
        answer: 1,
        explanation: 'Even though functions are objects, typeof returns "function" for them.'
      },
      {
        id: 't17',
        question: 'What is the result of 10 / 0?',
        options: ['0', 'Infinity', 'Error', 'NaN'],
        answer: 1,
        explanation: 'Division by zero in JS results in Infinity.'
      },
      {
        id: 't18',
        question: 'What is the output of !!""?',
        options: ['true', 'false', 'undefined', 'Error'],
        answer: 1,
        explanation: 'Double negation of an empty string results in false.'
      },
      {
        id: 't19',
        question: 'What is the result of null == undefined?',
        options: ['true', 'false', 'Error', 'undefined'],
        answer: 0,
        explanation: 'Loose equality considers null and undefined to be equal.'
      },
      {
        id: 't20',
        question: 'What is the result of null === undefined?',
        options: ['true', 'false', 'Error', 'undefined'],
        answer: 1,
        explanation: 'Strict equality considers them different because they are different types.'
      },
      {
        id: 't21',
        question: 'What is the output of typeof [ ]?',
        options: ['"array"', '"object"', '"list"', '"undefined"'],
        answer: 1,
        explanation: 'In JavaScript, arrays are technically objects.'
      },
      {
        id: 't22',
        question: 'What is the result of 1 + - + + + - + 1?',
        options: ['2', '0', '1', 'NaN'],
        answer: 0,
        explanation: 'The signs are treated as unary operators. 1 + (- (+ (+ (+ (- (+ 1)))))) becomes 1 + 1 = 2.'
      },
      {
        id: 't23',
        question: 'What is the output of 3.toString()?',
        options: ['"3"', '3', 'Error', 'undefined'],
        answer: 2,
        explanation: 'You cannot call a method directly on a literal number with a single dot because the dot is interpreted as a decimal point. (3).toString() or 3..toString() would work.'
      },
      {
        id: 't24',
        question: 'What is the result of true + true?',
        options: ['2', 'true', '"truetrue"', 'NaN'],
        answer: 0,
        explanation: 'Booleans are coerced to numbers (1) during addition.'
      },
      {
        id: 't25',
        question: 'What is the output of console.log(1 < 2 < 3)?',
        options: ['true', 'false', 'Error', 'NaN'],
        answer: 0,
        explanation: '1 < 2 is true. true < 3 is coerced to 1 < 3, which is true.'
      }
    ]
  },
  {
    id: 'es6-deep',
    title: 'ES6+ Deep Dive',
    description: 'Master the latest syntax and features.',
    questions: [
      {
        id: 'e1',
        question: 'Which of the following is a new primitive type introduced in ES6?',
        options: ['Symbol', 'BigInt', 'Map', 'Set'],
        answer: 0,
        explanation: 'Symbol was introduced in ES6. BigInt was added later (ES2020).'
      },
      {
        id: 'e2',
        question: 'What is the output of `[... "Hello"]`?',
        options: ['["Hello"]', '["H", "e", "l", "l", "o"]', '["H", "e", "ll", "o"]', 'Error'],
        answer: 1,
        explanation: 'The spread operator on a string spreads its characters into an array.'
      },
      {
        id: 'e3',
        question: 'How do you define a generator function?',
        options: ['function* myGen()', 'function myGen*()', 'generator myGen()', 'yield function myGen()'],
        answer: 0,
        explanation: 'The asterisk (*) denotes a generator function.'
      },
      {
        id: 'e4',
        question: 'What is the purpose of the "yield" keyword?',
        options: ['To stop a loop', 'To return a value and pause a generator', 'To wait for a promise', 'None'],
        answer: 1,
        explanation: 'yield pauses generator execution and returns a value.'
      },
      {
        id: 'e5',
        question: 'Which method is used to check if a string starts with a specific substring?',
        options: ['beginsWith()', 'startsWith()', 'hasPrefix()', 'matches()'],
        answer: 1,
        explanation: 'startsWith() is an ES6 string method.'
      },
      {
        id: 'e6',
        question: 'What is the output of `new Set([1, 1, 2, 2, 3]).size`?',
        options: ['5', '3', '2', 'undefined'],
        answer: 1,
        explanation: 'Set only stores unique values.'
      },
      {
        id: 'e7',
        question: 'Which of these is NOT a valid Map method?',
        options: ['set()', 'get()', 'has()', 'add()'],
        answer: 3,
        explanation: 'Maps use set() and get(), while Sets use add().'
      },
      {
        id: 'e8',
        question: 'What is the purpose of "Object.assign()"?',
        options: ['To create a new object', 'To copy properties from source to target object', 'To delete properties', 'None'],
        answer: 1,
        explanation: 'Object.assign() is used to copy values of all enumerable own properties.'
      },
      {
        id: 'e9',
        question: 'How do you export multiple values from a module?',
        options: ['export default {a, b}', 'export {a, b}', 'module.exports = {a, b}', 'Both A and B'],
        answer: 1,
        explanation: 'Named exports allow exporting multiple values.'
      },
      {
        id: 'e10',
        question: 'What is the result of `Array.from("123")`?',
        options: ['["1", "2", "3"]', '[1, 2, 3]', '["123"]', 'Error'],
        answer: 0,
        explanation: 'Array.from() creates a new array from an array-like or iterable object.'
      },
      {
        id: 'e11',
        question: 'What is the output of `[1, 2, 3].includes(2)`?',
        options: ['true', 'false', 'Error', 'undefined'],
        answer: 0,
        explanation: 'includes() checks if an array contains a specific value.'
      },
      {
        id: 'e12',
        question: 'Which method is used to find the first element in an array that satisfies a test?',
        options: ['find()', 'search()', 'filter()', 'some()'],
        answer: 0,
        explanation: 'find() returns the first element that passes the test.'
      },
      {
        id: 'e13',
        question: 'What is the purpose of "String.prototype.repeat()"?',
        options: ['To repeat a string X times', 'To check if a string repeats', 'To loop through a string', 'None'],
        answer: 0,
        explanation: 'repeat() returns a new string with a specified number of copies.'
      },
      {
        id: 'e14',
        question: 'How do you check if a number is an integer?',
        options: ['Number.isInt()', 'Number.isInteger()', 'Math.isInteger()', 'isInteger()'],
        answer: 1,
        explanation: 'Number.isInteger() checks if a value is an integer.'
      },
      {
        id: 'e15',
        question: 'What is the result of `Math.trunc(4.9)`?',
        options: ['4', '5', '4.9', '0'],
        answer: 0,
        explanation: 'Math.trunc() removes the fractional part of a number.'
      }
    ]
  },
  {
    id: 'web-apis',
    title: 'Web APIs & Browser',
    description: 'Storage, Fetch, DOM, and Browser environments.',
    questions: [
      {
        id: 'w1',
        question: 'Which API is used to store data in the browser with no expiration?',
        options: ['SessionStorage', 'LocalStorage', 'Cookies', 'IndexedDB'],
        answer: 1,
        explanation: 'LocalStorage persists even after the browser is closed.'
      },
      {
        id: 'w2',
        question: 'What does "DOM" stand for?',
        options: ['Data Object Model', 'Document Object Model', 'Digital Object Management', 'Document Order Model'],
        answer: 1,
        explanation: 'Document Object Model is the programming interface for HTML/XML.'
      },
      {
        id: 'w3',
        question: 'Which method is used to send an HTTP request?',
        options: ['request()', 'fetch()', 'http.get()', 'send()'],
        answer: 1,
        explanation: 'The Fetch API is the modern standard for network requests.'
      },
      {
        id: 'w4',
        question: 'What is the purpose of "window.onload"?',
        options: ['To start a timer', 'To execute code after the entire page has loaded', 'To close the window', 'None'],
        answer: 1,
        explanation: 'onload fires when all resources (images, etc.) have loaded.'
      },
      {
        id: 'w5',
        question: 'Which method is used to set a timer that executes once?',
        options: ['setInterval()', 'setTimeout()', 'setTimer()', 'wait()'],
        answer: 1,
        explanation: 'setTimeout() runs a function after a delay.'
      },
      {
        id: 'w6',
        question: 'How do you access the current URL in JavaScript?',
        options: ['window.url', 'document.url', 'window.location.href', 'location.get()'],
        answer: 2,
        explanation: 'window.location.href returns the full URL of the current page.'
      },
      {
        id: 'w7',
        question: 'What is the purpose of "document.cookie"?',
        options: ['To eat cookies', 'To get/set cookies associated with the document', 'To handle storage', 'None'],
        answer: 1,
        explanation: 'document.cookie is the interface for browser cookies.'
      },
      {
        id: 'w8',
        question: 'Which API allows running scripts in background threads?',
        options: ['Service Workers', 'Web Workers', 'Web Sockets', 'Background Fetch'],
        answer: 1,
        explanation: 'Web Workers enable multi-threading in JavaScript.'
      },
      {
        id: 'w9',
        question: 'What is "CORS"?',
        options: ['Core Object Resource System', 'Cross-Origin Resource Sharing', 'Cross-Origin Response Security', 'None'],
        answer: 1,
        explanation: 'CORS is a security mechanism for cross-domain requests.'
      },
      {
        id: 'w10',
        question: 'Which method is used to add an event listener?',
        options: ['addListener()', 'attachEvent()', 'addEventListener()', 'on()'],
        answer: 2,
        explanation: 'addEventListener() is the standard method for event handling.'
      },
      {
        id: 'w11',
        question: 'What does "event.target" refer to?',
        options: ['The element that triggered the event', 'The element the listener is attached to', 'The parent element', 'None'],
        answer: 0,
        explanation: 'target is the actual element where the event originated.'
      },
      {
        id: 'w12',
        question: 'How do you navigate to a new page in JS?',
        options: ['window.navigate()', 'window.location.assign()', 'location.set()', 'document.goto()'],
        answer: 1,
        explanation: 'location.assign() or location.href = "url" navigates the browser.'
      },
      {
        id: 'w13',
        question: 'What is the purpose of "History API"?',
        options: ['To see old versions of a site', 'To manipulate the browser session history', 'To track user stats', 'None'],
        answer: 1,
        explanation: 'History API allows moving back/forward and changing the URL without reload.'
      },
      {
        id: 'w14',
        question: 'Which method is used to convert an object to a JSON string?',
        options: ['JSON.parse()', 'JSON.stringify()', 'JSON.toText()', 'JSON.convert()'],
        answer: 1,
        explanation: 'JSON.stringify() serializes an object into a JSON string.'
      },
      {
        id: 'w15',
        question: 'What is the purpose of "Intersection Observer"?',
        options: ['To detect overlapping elements', 'To track when an element enters the viewport', 'To handle clicks', 'None'],
        answer: 1,
        explanation: 'It\'s used for lazy loading, infinite scroll, and tracking visibility.'
      }
    ]
  }
];
