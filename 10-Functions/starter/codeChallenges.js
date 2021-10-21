'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['Javascript', 'Python', 'Rust', 'C++'],
  count: new Array(4).fill(0),
  registerNewAnswer() {
    let userInput;
    let messageToPoll = `${this.question}\n `;

    this.options.forEach((option, index) => {
      messageToPoll += `${index}: ${option}\n`;
    });

    messageToPoll += `(Write the number of your choice)`;

    userInput = Number(window.prompt(messageToPoll));
    console.log(userInput === NaN);

    if (Number.isNaN(userInput) || userInput < 0 || userInput > 3) {
      window.alert('Please enter a valid number');
    } else {
      this.count[userInput]++;
    }

    const displayChoice = window.prompt(
      `Select the way in which you want to display the results of the poll\n (Write array or string)`
    );

    this.displayResults(displayChoice);
  },
  displayResults(type = 'array') {
    if (type === 'string') {
      let displayStr = `Poll Results: \n`;

      this.options.forEach((option, index) => {
        displayStr += `${option}: ${this.count[index]}\n`;
      });

      console.log(displayStr);
    } else if (type === 'array') {
      console.log(this.count);
    } else {
      window.alert('Please select a valid display type');
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

const testData1 = {
  options: ['Javascript', 'Python', 'Rust'],
  count: [5, 2, 3],
};
const printInfo = poll.displayResults.bind(testData1);
printInfo('string');
