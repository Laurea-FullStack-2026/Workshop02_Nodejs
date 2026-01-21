// Task 5: Working with NPM Packages - SOLUTION
// This file demonstrates the solution for Task 5

// Make sure you have installed chalk:
// npm install chalk@4.1.2

const chalk = require('chalk');

console.log('\n--- Task 5: Colored Console Messages ---\n');

// Green success message
console.log(chalk.green('✓ Success: Operation completed successfully!'));

// Red error message
console.log(chalk.red('✗ Error: Something went wrong!'));

// Blue information message
console.log(chalk.blue('ℹ Info: This is an informational message'));

// Yellow warning message
console.log(chalk.yellow('⚠ Warning: Please proceed with caution'));

// Custom message with multiple colors
console.log('\n' + chalk.bold('Custom Message:'));
console.log(chalk.bgBlue.white(' Node.js ') + ' ' + chalk.green('Workshop') + ' ' + chalk.yellow('2026'));

// Additional styling examples
console.log('\n' + chalk.underline('More Examples:'));
console.log(chalk.bold.cyan('Bold and Cyan text'));
console.log(chalk.italic.magenta('Italic and Magenta text'));
console.log(chalk.bgRed.white(' Background Red with White Text '));

console.log('\n' + chalk.green('✓ Task 5 completed successfully!'));
