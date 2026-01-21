// Task 2: File System Operations - SOLUTION
// This file demonstrates the solution for Task 2

const fs = require('fs');

console.log('--- Task 2: File System Operations ---\n');

// Write initial content to data.txt
try {
  fs.writeFileSync('data.txt', 'Initial content: This is the first line.\n');
  console.log('✓ Created data.txt with initial content');
} catch (err) {
  console.error('Error writing file:', err);
  process.exit(1);
}

// Read the content of data.txt
try {
  const initialContent = fs.readFileSync('data.txt', 'utf8');
  console.log('\nInitial content:');
  console.log(initialContent);
} catch (err) {
  console.error('Error reading file:', err);
  process.exit(1);
}

// Append new content to data.txt
try {
  fs.appendFileSync('data.txt', 'Appended content: This is an additional line.\n');
  console.log('✓ Appended new content to data.txt');
} catch (err) {
  console.error('Error appending to file:', err);
  process.exit(1);
}

// Read and display updated content
try {
  const updatedContent = fs.readFileSync('data.txt', 'utf8');
  console.log('\nUpdated content:');
  console.log(updatedContent);
} catch (err) {
  console.error('Error reading file:', err);
  process.exit(1);
}

console.log('✓ Task 2 completed successfully!');
