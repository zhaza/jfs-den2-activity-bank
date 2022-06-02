const colors = require("colors");
const inquirer = require("inquirer"); 

const welcome = () => {
    console.log("Welcome to my example for this activity!".brightMagenta);

    checkIfRead();
}

const checkIfRead = () => {
    inquirer.prompt([
        // this is an example of a 'confirm' type of question. The answer given is a yes or no and the value it returns is either true for yes, or false for no. The value given to the "name" attribute is what will be used to access the answer from the user.
        {
            type: "confirm",
            name: "didTheyRead",
            message: "Have you read through the code to get an idea of what is happening?"
        }
    ]).then(answers => {
        // notice how we access the "didTheyRead" property from our answer variable. Each question that we ask stores a key/value pair on the 'answer' variable. Where the key is the "name" attribute from the question, and the value is the answer given by the user.
        if(answers.didTheyRead === true){
            console.log("Awesome! Let's get started.".trap);
            startApplication();
        } else {
            console.log("Please read through the code first to get an idea of what is happening.".brightRed)
            return;
        }

    })
}

const startApplication = () => {
    inquirer
  .prompt([
    {
      type: 'list',
      name: 'theme',
      message: 'What do you want to do?',
      choices: [
        'Order a pizza',
        'Make a reservation',
        new inquirer.Separator(),
        'Ask for opening hours',
        {
          name: 'Contact support',
          disabled: 'Unavailable at this time',
        },
        'Talk to the receptionist',
      ],
    },
    {
      type: 'list',
      name: 'size',
      message: 'What size do you need?',
      choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],
      filter(val) {
        return val.toLowerCase();
      },
    },
  ])
  .then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
  });
}

welcome();

