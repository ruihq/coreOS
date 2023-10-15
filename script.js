// Author : Rui
// All rights reserved.

const consoleElement = document.getElementById('console');
const inputElement = document.getElementById('command-input');
const runButton = document.getElementById('run-command');

runButton.addEventListener('click', runCommand);

function runCommand() {
  const command = inputElement.value.trim();
  inputElement.value = '';

  if (command === '') return;

  addToConsole('* ' + command);
  executeCommand(command);
}

function executeCommand(command) {
  try {
    const result = eval(command);
    if (result !== undefined) {
      addToConsole(result);
    }
  } catch (error) {
    addToConsole('Error: ' + error.message);
  }
}

function addToConsole(text) {
  const line = document.createElement('div');
  line.textContent = text;
  consoleElement.appendChild(line);
  consoleElement.scrollTop = consoleElement.scrollHeight;
}

function executeCommand(command) {
  switch (command) {
    case 'help':
      addToConsole('Available commands: 10');
      addToConsole('pwd, ping, help, ?, matrix, code, calcu, snake, coreos-legacy, about-os');
      break;
    case '?':
      addToConsole('Available commands: 10');
      addToConsole('pwd, ping, help, ?, matrix, code, calcu, snake, coreos-legacy, about-os');
      break;
    case 'pwd':
      addToConsole('~/console');
      break;
    case 'ping':
      addToConsole('Pong!');
      break;
    case 'matrix':
      window.location.href = 'side/matrix.html';
      break;
    case 'calcu':
      addToConsole('Booting calcu...');
      setTimeout(function calcu() {
        window.location.href = 'side/calc.html';
      }, 3000)
      break;
    case 'code':
      addToConsole('Redirecting to ~/script.js in 3s');
      setTimeout(function code() {
        window.location.href = 'script.js';
      }, 3000);
      break;
    case 'about-os':
      addToConsole('CoreOS v1.0');
      addToConsole('created using js');
        break;
    case 'coreos-legacy':
      addToConsole('Booting coreos-legacy...')
      setTimeout(function legacy() {
          window.location.href = 'legacy/index.html';
      }, 3000);
      break;
    case 'snake':
      addToConsole('Booting snake game...');
      setTimeout(function snake() {
          window.location.href = 'side/snake.html';
      }, 3000);
      break;
    default:
      try {
        const result = eval(command);
        if (result !== undefined) {
          addToConsole(result);
        }
      } catch (error) {
        addToConsole('Error: ' + error.message);
      }
    break;
  }
}

// Anti leech:
// case 'example':
//   code
//   break;