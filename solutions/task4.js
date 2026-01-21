// Task 4: Command-Line Tool - SOLUTION
// This file demonstrates the solution for Task 4

// Get command-line arguments (excluding node and script name)
const args = process.argv.slice(2);
const command = args[0];

// Handle different commands
if (command === 'greet') {
  const name = args[1];
  if (name) {
    console.log(`Hello, ${name}!`);
  } else {
    console.log('Error: Please provide a name');
    console.log('Usage: node task4.js greet <name>');
  }
} else if (command === 'add') {
  const num1 = parseFloat(args[1]);
  const num2 = parseFloat(args[2]);
  
  if (isNaN(num1) || isNaN(num2)) {
    console.log('Error: Please provide two valid numbers');
    console.log('Usage: node task4.js add <num1> <num2>');
  } else {
    const sum = num1 + num2;
    console.log(`${num1} + ${num2} = ${sum}`);
  }
} else if (command === 'info') {
  console.log(`Node.js version: ${process.version}`);
  console.log(`Platform: ${process.platform}`);
  console.log(`Architecture: ${process.arch}`);
} else {
  // No command or unknown command - show usage
  console.log('Node.js Command-Line Tool');
  console.log('\nUsage:');
  console.log('  node task4.js greet <name>     - Greet someone');
  console.log('  node task4.js add <n1> <n2>    - Add two numbers');
  console.log('  node task4.js info             - Show system info');
  console.log('\nExamples:');
  console.log('  node task4.js greet Alice');
  console.log('  node task4.js add 5 10');
  console.log('  node task4.js info');
}
