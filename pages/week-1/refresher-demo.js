// App.js
const HTML = `<!DOCTYPE html>
<html>
<head>
    <title>Interactive Quiz</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to the Interactive Quiz</h1>
    </header>
    
    <main>
        <div id="question"></div>
        <div id="feedback"></div>
        <button id="answer1" class="answer"></button>
        <button id="answer2" class="answer"></button>
        <button id="answer3" class="answer"></button>
        <button id="answer4" class="answer"></button>
    </main>

    <footer>
        <p>&copy; 2023 Your Name. All rights reserved.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
`;

const CSS = `body {
  font-family: Arial, sans-serif;
}

#question {
  font-size: 1.5em;
  color: blue;
  margin-bottom: 20px;
}

.answer {
  display: block;
  margin: 10px 0;
  background-color: lightgray;
  padding: 10px;
  width: 200px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
}

#feedback {
  font-size: 1.2em;
  margin-top: 20px;
}
`;

const JS = `
var questionDiv = document.getElementById('question');
var feedbackDiv = document.getElementById('feedback');
var buttons = document.getElementsByClassName('answer');

questionDiv.innerHTML = "What is the capital of France?";
buttons[0].innerHTML = "London";
buttons[1].innerHTML = "Paris";
buttons[2].innerHTML = "Berlin";
buttons[3].innerHTML = "Madrid";

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        if (this.innerHTML === "Paris") {
            feedbackDiv.innerHTML = "Correct!";
            feedbackDiv.style.color = "green";
        } else {
            feedbackDiv.innerHTML = "Incorrect, try again.";
            feedbackDiv.style.color = "red";
        }
    });
}
`;

// Location of file as key (always starts with /)
export const files = {
  "/index.html": {
    code: HTML,
  },
  "/styles.css": {
    code: CSS,
  },
  "/script.js": {
    code: JS,
  },
};

/* Foo is used to solve the bug: Build optimization failed:
  found page without a React Component as default export in pages/week-1/samples-demo
*/
export default function Foo() {
  return <div>Foo</div>;
}
