import inquirer from 'inquirer';

export default {
  getChatInput: () => {
    const questions = [
      {
        name: 'content',
        type: 'input',
        message: '',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'You dont wanna talk with me? :(';
          }
        }
      }
    ];
    return inquirer.prompt(questions)
  },
};