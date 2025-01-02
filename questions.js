const questions = [
  {
    category: "javascript",
    questions: [
      {
        question:
          "What is the output of the following code: `console.log(2 + '2')`?",
        options: ["22", "4", "Error", "NaN"],
        correctOption: 0,
      },
      {
        question: "Which of the following is not a JavaScript data type?",
        options: ["String", "Boolean", "Undefined", "Character"],
        correctOption: 3,
      },
      {
        question:
          "What is the value of `x` after the following code executes: `var x = 10; function foo() { var x = 20; } foo();`?",
        options: ["10", "20", "undefined", "ReferenceError"],
        correctOption: 0,
      },
      {
        question:
          "Which of the following is a correct way to declare a function in JavaScript?",
        options: [
          "function myFunction {}",
          "function: myFunction()",
          "function = myFunction()",
          "function myFunction() {}",
        ],
        correctOption: 3,
      },
      {
        question: "What does the `this` keyword refer to in a method?",
        options: [
          "The function itself",
          "The global object",
          "The object the method is called on",
          "None of the above",
        ],
        correctOption: 2,
      },
      {
        question: "What is the purpose of the `bind()` method?",
        options: [
          "To bind a function to an object",
          "To create a copy of a function",
          "To call a function immediately",
          "To bind a function to an event",
        ],
        correctOption: 0,
      },
      {
        question: "Which of the following is not a valid JavaScript loop?",
        options: ["for", "while", "repeat", "for...in"],
        correctOption: 2,
      },
      {
        question: "What will `typeof NaN` return?",
        options: ["'number'", "'NaN'", "'undefined'", "'object'"],
        correctOption: 0,
      },
      {
        question: "How do you add an event listener to a button in JavaScript?",
        options: [
          "button.addEventListener('click', function() {})",
          "addEventListener(button, 'click', function() {})",
          "button.add('click', function() {})",
          "None of the above",
        ],
        correctOption: 0,
      },
      {
        question:
          "Which of the following methods can be used to parse a JSON string into an object?",
        options: [
          "JSON.parse()",
          "JSON.stringify()",
          "JSON.object()",
          "parse.JSON()",
        ],
        correctOption: 0,
      },
      {
        question: "What does the `Array.isArray()` method do?",
        options: [
          "Checks if an array is empty",
          "Checks if a variable is an array",
          "Converts an array into a string",
          "Returns the length of an array",
        ],
        correctOption: 1,
      },
      {
        question:
          "Which operator is used for strict equality comparison in JavaScript?",
        options: ["==", "===", "=", "!=="],
        correctOption: 1,
      },
      {
        question: "What is the result of `'2' + 2` in JavaScript?",
        options: ["4", "'22'", "'2'", "Error"],
        correctOption: 1,
      },
      {
        question:
          "Which method is used to remove the last element of an array?",
        options: ["pop()", "shift()", "slice()", "push()"],
        correctOption: 0,
      },
      {
        question: "What will the following code return: `typeof null`?",
        options: ["'null'", "'object'", "'undefined'", "Error"],
        correctOption: 1,
      },
      {
        question:
          "Which of the following statements is true about JavaScript functions?",
        options: [
          "Functions can be assigned to variables",
          "Functions are objects",
          "Functions can be passed as arguments",
          "All of the above",
        ],
        correctOption: 3,
      },
      {
        question:
          "Which method is used to find the index of a value in an array?",
        options: [
          "indexOf()",
          "findIndex()",
          "getIndex()",
          "None of the above",
        ],
        correctOption: 0,
      },
      {
        question:
          "What will the following code log to the console: `console.log(!!'false')`?",
        options: ["true", "false", "'false'", "undefined"],
        correctOption: 0,
      },
      {
        question:
          "Which of the following is the correct syntax for using `setTimeout()`?",
        options: [
          "setTimeout(function, time)",
          "setTimeout(time, function)",
          "setTimeout(time, function, args)",
          "setTimeout(function, args)",
        ],
        correctOption: 0,
      },
      {
        question:
          "Which of the following is not a JavaScript method to convert a string to a number?",
        options: ["parseInt()", "parseFloat()", "Number()", "toNumber()"],
        correctOption: 3,
      },
      {
        question: "What does the `push()` method do in JavaScript?",
        options: [
          "Removes the last element of an array",
          "Adds a new element to the end of an array",
          "Adds a new element to the beginning of an array",
          "None of the above",
        ],
        correctOption: 1,
      },
      {
        question:
          "Which of the following is used to check if a property exists in an object?",
        options: [
          "property in object",
          "object.hasOwnProperty('property')",
          "object.property exists",
          "All of the above",
        ],
        correctOption: 3,
      },
      {
        question: "What does the `filter()` method do in JavaScript?",
        options: [
          "Filters out specific values from an array",
          "Returns a new array with elements that pass a test",
          "Changes the original array",
          "None of the above",
        ],
        correctOption: 1,
      },
      {
        question: "What will `console.log(0 == '0')` return?",
        options: ["true", "false", "'0'", "Error"],
        correctOption: 0,
      },
      {
        question:
          "Which of the following is a JavaScript object for storing key-value pairs?",
        options: ["Array", "Set", "Object", "Function"],
        correctOption: 2,
      },
      {
        question: "What will the following code return: `Boolean('')`?",
        options: ["false", "true", "undefined", "Error"],
        correctOption: 0,
      },
      {
        question: "Which of the following is a feature of JavaScript closures?",
        options: [
          "A function has access to its own scope",
          "A function has access to the outer function's scope",
          "A function has access to global scope",
          "All of the above",
        ],
        correctOption: 3,
      },
    ],
  },
  {
    category: "reactjs",
    questions: [
      {
        question: "What is React?",
        options: [
          "A JavaScript framework for building user interfaces",
          "A JavaScript library for building user interfaces",
          "A programming language",
          "A CSS preprocessor",
        ],
        correctOption: 1,
      },
      {
        question: "What does JSX stand for?",
        options: [
          "JavaScript Syntax Extension",
          "JavaScript XML",
          "JavaScript Extra",
          "None of the above",
        ],
        correctOption: 0,
      },
      {
        question: "Which method is used to update the state in React?",
        options: ["setState()", "updateState()", "changeState()", "setData()"],
        correctOption: 0,
      },
      {
        question:
          "Which of the following is true about a class component in React?",
        options: [
          "It cannot hold state",
          "It must extend the React.Component class",
          "It uses hooks for managing state",
          "None of the above",
        ],
        correctOption: 1,
      },
      {
        question: "What is the default value of `key` in React components?",
        options: ["string", "integer", "boolean", "undefined"],
        correctOption: 3,
      },
      {
        question: "How do you pass data to a child component in React?",
        options: [
          "Via props",
          "Via state",
          "Via event handlers",
          "None of the above",
        ],
        correctOption: 0,
      },
      {
        question:
          "Which of the following is used for component rendering lifecycle methods?",
        options: [
          "componentDidMount()",
          "componentWillUnmount()",
          "render()",
          "All of the above",
        ],
        correctOption: 3,
      },
      {
        question: "What is a pure component in React?",
        options: [
          "A component that does not re-render when props or state change",
          "A component that only renders based on state",
          "A component that renders based on props only",
          "A component that is stateless",
        ],
        correctOption: 0,
      },
      {
        question: "What is the purpose of `useEffect()` in React?",
        options: [
          "To manage component state",
          "To handle side effects in function components",
          "To update the component's DOM",
          "To create reusable components",
        ],
        correctOption: 1,
      },
      {
        question: "What is a component in React?",
        options: [
          "A function or class that returns a UI element",
          "A HTML tag",
          "A JavaScript function only",
          "A CSS class",
        ],
        correctOption: 0,
      },
      {
        question: "What is a controlled component in React?",
        options: [
          "A component whose state is controlled by the parent component",
          "A component whose state is controlled by the DOM",
          "A component that does not have any state",
          "A component whose data is fetched from an API",
        ],
        correctOption: 0,
      },
      {
        question: "What does `ReactDOM.render()` do?",
        options: [
          "It renders the component on the screen",
          "It creates a virtual DOM",
          "It is used to trigger state changes",
          "It updates the `state` of the component",
        ],
        correctOption: 0,
      },
      {
        question:
          "Which of the following is the correct way to define a functional component in React?",
        options: [
          "function MyComponent() {}",
          "class MyComponent() {}",
          "const MyComponent = () => {}",
          "All of the above",
        ],
        correctOption: 3,
      },
      {
        question: "What are React Hooks?",
        options: [
          "Functions that allow functional components to manage state and side effects",
          "Functions that are used to modify the component tree",
          "Methods used in class components only",
          "None of the above",
        ],
        correctOption: 0,
      },
      {
        question: "What is the `useState()` hook used for?",
        options: [
          "To manage component's state in functional components",
          "To handle side effects",
          "To update the DOM directly",
          "To create a class component",
        ],
        correctOption: 0,
      },
      {
        question: "What is a higher-order component (HOC) in React?",
        options: [
          "A component that wraps other components to add additional functionality",
          "A component that manages the state of other components",
          "A component that is passed as a prop",
          "None of the above",
        ],
        correctOption: 0,
      },
      {
        question: "What is the purpose of `useContext()` hook?",
        options: [
          "To manage global state",
          "To share data between components without passing props",
          "To fetch data from an API",
          "To update the DOM",
        ],
        correctOption: 1,
      },
      {
        question:
          "Which of the following methods is used to handle events in React?",
        options: [
          "addEventListener()",
          "handleEvent()",
          "onClick, onSubmit, onChange etc.",
          "None of the above",
        ],
        correctOption: 2,
      },
      {
        question: "What does `React.Fragment` do?",
        options: [
          "It is used to group multiple elements without adding extra nodes to the DOM",
          "It is used to create a form",
          "It is used to create a stateful component",
          "It is used to store key-value pairs",
        ],
        correctOption: 0,
      },
      {
        question: "What is the correct way to use props in a React component?",
        options: ["this.props", "props.value", "this.value", "useProps()"],
        correctOption: 0,
      },
      {
        question:
          "What is the difference between `componentDidMount()` and `useEffect()`?",
        options: [
          "componentDidMount() is used in class components, and useEffect() is used in function components",
          "componentDidMount() is used to update state, and useEffect() is used to handle events",
          "Both are the same and can be used interchangeably",
          "None of the above",
        ],
        correctOption: 0,
      },
      {
        question:
          "What is the output of `console.log([1] == [1])` in JavaScript (used in React context)?",
        options: ["true", "false", "ReferenceError", "undefined"],
        correctOption: 1,
      },
      {
        question:
          "Which React lifecycle method is used to fetch data after the component is rendered?",
        options: [
          "componentDidMount()",
          "componentWillUpdate()",
          "componentDidUpdate()",
          "shouldComponentUpdate()",
        ],
        correctOption: 0,
      },
      {
        question: "Which of the following is true about `React.StrictMode`?",
        options: [
          "It helps identify potential problems in the application during development",
          "It automatically updates the state of the components",
          "It runs only in production mode",
          "None of the above",
        ],
        correctOption: 0,
      },
      {
        question:
          "Which hook allows you to perform side effects in React function components?",
        options: ["useEffect()", "useState()", "useContext()", "useReducer()"],
        correctOption: 0,
      },
      {
        question: "What is the difference between `key` and `ref` in React?",
        options: [
          "`key` is used to identify elements in a list, and `ref` is used to access DOM elements directly",
          "`key` is used to store component state, and `ref` is used to identify elements",
          "`key` and `ref` are used interchangeably",
          "None of the above",
        ],
        correctOption: 0,
      },
    ],
  },
  {
    category: "apptitude",
    questions: [
      {
        question: "What is the value of 9 + 6 × 2?",
        options: ["21", "24", "15", "12"],
        correctOption: 0,
      },
      {
        question:
          "If the sum of two numbers is 30 and their difference is 10, what are the numbers?",
        options: ["20 and 10", "25 and 5", "15 and 15", "20 and 20"],
        correctOption: 0,
      },
      {
        question: "What is the next number in the sequence 2, 5, 10, 17, ___?",
        options: ["24", "26", "30", "34"],
        correctOption: 1,
      },
      {
        question:
          "A train travels 60 km in 1 hour 30 minutes. What is its speed in km/h?",
        options: ["40 km/h", "45 km/h", "50 km/h", "60 km/h"],
        correctOption: 2,
      },
      {
        question:
          "If a car travels 60 miles in 1 hour, how far will it travel in 5 hours at the same speed?",
        options: ["240 miles", "300 miles", "350 miles", "400 miles"],
        correctOption: 1,
      },
      {
        question:
          "A person is standing 30 meters from a flagpole. The angle of elevation from the person’s eyes to the top of the flagpole is 30 degrees. What is the height of the flagpole?",
        options: ["15 meters", "30 meters", "45 meters", "60 meters"],
        correctOption: 1,
      },
      {
        question:
          "If a rectangle has a length of 10 cm and a width of 5 cm, what is the area of the rectangle?",
        options: ["50 cm²", "40 cm²", "55 cm²", "60 cm²"],
        correctOption: 0,
      },
      {
        question: "What is the perimeter of a square with side length 4 cm?",
        options: ["16 cm", "12 cm", "20 cm", "24 cm"],
        correctOption: 0,
      },
      {
        question:
          "If a person has 4 coins, one of each of 5, 10, 25, and 50 cents, what is the total value of the coins?",
        options: ["90 cents", "85 cents", "75 cents", "80 cents"],
        correctOption: 0,
      },
      {
        question:
          "A book was sold for $80 at a 20% profit. What was the cost price of the book?",
        options: ["$60", "$64", "$50", "$55"],
        correctOption: 0,
      },
      {
        question:
          "If a person buys 5 pencils for $2 each, how much does he pay in total?",
        options: ["$5", "$6", "$7", "$8"],
        correctOption: 1,
      },
      {
        question:
          "The sum of two consecutive numbers is 39. What are the numbers?",
        options: ["19 and 20", "18 and 19", "20 and 21", "21 and 22"],
        correctOption: 0,
      },
      {
        question:
          "If 12 men can do a job in 15 days, how many men are required to complete the job in 10 days?",
        options: ["15 men", "18 men", "20 men", "25 men"],
        correctOption: 1,
      },
      {
        question:
          "A person can paint a wall in 5 hours. How many walls can the person paint in 25 hours?",
        options: ["3 walls", "4 walls", "5 walls", "6 walls"],
        correctOption: 1,
      },
      {
        question: "What is the smallest prime number?",
        options: ["1", "2", "3", "5"],
        correctOption: 1,
      },
      {
        question: "What is the value of x if 3x + 5 = 20?",
        options: ["x = 5", "x = 3", "x = 2", "x = 10"],
        correctOption: 0,
      },
      {
        question: "How much is 15% of 200?",
        options: ["30", "25", "20", "35"],
        correctOption: 0,
      },
      {
        question:
          "A bag contains 4 red balls, 3 blue balls, and 5 green balls. What is the probability of drawing a red ball?",
        options: ["4/12", "1/3", "1/2", "2/3"],
        correctOption: 0,
      },
      {
        question: "What is the square root of 144?",
        options: ["10", "12", "14", "16"],
        correctOption: 1,
      },
      {
        question:
          "In a class of 30 students, 12 are boys. What is the percentage of boys in the class?",
        options: ["40%", "35%", "45%", "50%"],
        correctOption: 0,
      },
      {
        question: "What is the median of the numbers 3, 5, 7, 10, 15?",
        options: ["5", "7", "10", "15"],
        correctOption: 1,
      },
      {
        question:
          "A man walks 4 km north, 3 km east, 2 km south, and 1 km west. What is his distance from the starting point?",
        options: ["1 km", "2 km", "3 km", "4 km"],
        correctOption: 1,
      },
      {
        question:
          "A sum of money amounts to $1500 in 3 years at 5% simple interest per annum. What is the principal amount?",
        options: ["$1200", "$1300", "$1400", "$1100"],
        correctOption: 0,
      },
      {
        question:
          "A train travels 120 km in 2 hours. What is the speed of the train?",
        options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
        correctOption: 1,
      },
      {
        question:
          "If the area of a circle is 154 cm², what is the radius of the circle?",
        options: ["7 cm", "14 cm", "10 cm", "5 cm"],
        correctOption: 0,
      },
      {
        question: "A person buys 3 books for $45. How much will 7 books cost?",
        options: ["$90", "$100", "$105", "$110"],
        correctOption: 0,
      },
      {
        question: "What is the next number in the sequence 3, 6, 9, 12, ___?",
        options: ["14", "15", "18", "21"],
        correctOption: 2,
      },
      {
        question:
          "If 5 apples cost $10, how many apples can be bought for $50?",
        options: ["10", "20", "25", "30"],
        correctOption: 2,
      },
      {
        question:
          "A person saves $50 every month. How much will he save in 6 months?",
        options: ["$250", "$300", "$350", "$400"],
        correctOption: 0,
      },
      {
        question:
          "If a person spends 30% of his income on rent, what percentage of his income remains?",
        options: ["70%", "60%", "80%", "50%"],
        correctOption: 0,
      },
    ],
  },
  {
    category: "nodejs",
    questions: [
      {
        question: "What is Node.js?",
        options: [
          "A web server",
          "A programming language",
          "A runtime environment",
          "A framework",
        ],
        correctOption: 2,
      },
      {
        question: "Which of the following is a feature of Node.js?",
        options: [
          "Single-threaded",
          "Multi-threaded",
          "Non-blocking I/O",
          "Synchronous I/O",
        ],
        correctOption: 2,
      },
      {
        question:
          "Which of the following is used for package management in Node.js?",
        options: ["npm", "pip", "composer", "apt"],
        correctOption: 0,
      },
      {
        question: "Which module is used to work with files in Node.js?",
        options: ["fs", "http", "url", "path"],
        correctOption: 0,
      },
      {
        question:
          "Which of the following is used for asynchronous programming in Node.js?",
        options: ["Promises", "Callbacks", "Async/Await", "All of the above"],
        correctOption: 3,
      },
      {
        question: "What is the default port number for a Node.js HTTP server?",
        options: ["8080", "3000", "5000", "80"],
        correctOption: 1,
      },
      {
        question: "What does the 'require()' function do in Node.js?",
        options: [
          "Import a module",
          "Start the server",
          "Create a new thread",
          "Fetch data from a database",
        ],
        correctOption: 0,
      },
      {
        question: "Which function is used to create a server in Node.js?",
        options: [
          "http.createServer()",
          "server.create()",
          "createServer()",
          "server.listen()",
        ],
        correctOption: 0,
      },
      {
        question: "Which of the following is NOT a core module in Node.js?",
        options: ["fs", "http", "mysql", "path"],
        correctOption: 2,
      },
      {
        question: "What is the purpose of the 'EventEmitter' class in Node.js?",
        options: [
          "Handling HTTP requests",
          "Creating server responses",
          "Handling events and listeners",
          "Managing data streams",
        ],
        correctOption: 2,
      },
      {
        question: "What is the function of the 'process' module in Node.js?",
        options: [
          "Handling HTTP requests",
          "Managing child processes",
          "Working with file system",
          "Exiting the application",
        ],
        correctOption: 1,
      },
      {
        question: "What is the 'global' object in Node.js?",
        options: [
          "A built-in HTTP server",
          "A built-in file system",
          "An object that contains global variables",
          "A module for creating servers",
        ],
        correctOption: 2,
      },
      {
        question: "Which of the following is true about Node.js?",
        options: [
          "It is a single-threaded runtime",
          "It is a multi-threaded runtime",
          "It uses synchronous I/O",
          "It supports blocking I/O",
        ],
        correctOption: 0,
      },
      {
        question: "How can you export a module in Node.js?",
        options: [
          "module.export = myModule",
          "exports.myModule = myModule",
          "export myModule",
          "export default myModule",
        ],
        correctOption: 1,
      },
      {
        question:
          "Which of the following is used to read and write streams in Node.js?",
        options: ["Stream", "Buffer", "fs", "path"],
        correctOption: 0,
      },
      {
        question: "Which module in Node.js is used to parse URL strings?",
        options: ["url", "http", "path", "query"],
        correctOption: 0,
      },
      {
        question: "Which method is used to start the server in Node.js?",
        options: [
          "server.listen()",
          "app.listen()",
          "startServer()",
          "http.start()",
        ],
        correctOption: 1,
      },
      {
        question: "What is 'npm' in Node.js?",
        options: [
          "A package manager",
          "A programming language",
          "A framework",
          "A runtime environment",
        ],
        correctOption: 0,
      },
      {
        question: "What is the purpose of the 'Buffer' class in Node.js?",
        options: [
          "It stores binary data",
          "It manages memory",
          "It helps with streams",
          "It is used for encryption",
        ],
        correctOption: 0,
      },
      {
        question: "How can you handle errors in Node.js?",
        options: [
          "try/catch",
          "Promise.catch",
          "EventEmitter",
          "All of the above",
        ],
        correctOption: 3,
      },
      {
        question:
          "What is the output of 'console.log(typeof null)' in Node.js?",
        options: ["'null'", "'undefined'", "'object'", "'boolean'"],
        correctOption: 2,
      },
      {
        question:
          "Which of the following is used to handle HTTP requests in Node.js?",
        options: ["http module", "fs module", "url module", "path module"],
        correctOption: 0,
      },
      {
        question: "What does the 'npm init' command do in Node.js?",
        options: [
          "Installs all dependencies",
          "Creates a new Node.js project",
          "Starts the server",
          "Creates a new package.json file",
        ],
        correctOption: 3,
      },
      {
        question: "Which command installs a Node.js package globally?",
        options: [
          "npm install -g",
          "npm install --global",
          "npm install",
          "npm global install",
        ],
        correctOption: 0,
      },
      {
        question: "Which method is used to get data from a stream in Node.js?",
        options: ["read()", "on('data')", "stream.get()", "getData()"],
        correctOption: 1,
      },
      {
        question: "What is the purpose of the 'callback' function in Node.js?",
        options: [
          "To perform asynchronous operations",
          "To handle HTTP requests",
          "To manage database connections",
          "To process files",
        ],
        correctOption: 0,
      },
      {
        question: "What is the purpose of the 'cluster' module in Node.js?",
        options: [
          "It creates child processes to handle load",
          "It handles HTTP requests",
          "It reads and writes files",
          "It is used for working with databases",
        ],
        correctOption: 0,
      },
      {
        question: "What does the 'event-driven' model mean in Node.js?",
        options: [
          "The server runs in multiple threads",
          "The server listens to events and handles them asynchronously",
          "The server handles synchronous I/O",
          "The server handles each request with separate threads",
        ],
        correctOption: 1,
      },
    ],
  },
];
