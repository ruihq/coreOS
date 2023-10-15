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

  addToConsole('$ ' + command);
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
      addToConsole('Available commands:');
      addToConsole('ping, help, ?, back, about-os');
      break;
    case '?':
      addToConsole('Available commands:');
      addToConsole('ping, help, ?, back, about-os');
      break;
    case 'ping':
      addToConsole('Pong!');
      break;
    case 'about-os':
      addToConsole('CoreOS Legacy');
        break;
    case 'back':
      addToConsole('Going back...')
      setTimeout(function back() {
          window.location.href = '../index.html';
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