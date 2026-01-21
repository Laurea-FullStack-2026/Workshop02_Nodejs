
# Workshop 02 – Node.js Basics Requirements

## Overview
This document describes the **tasks and requirements** for this workshop.

Complete all **mandatory tasks**.  
Optional tasks are provided for additional practice.

---

## General Rules
- Work only inside the `starter/` folder
- Do not change the repository structure unless instructed
- Commit your work regularly with meaningful commit messages
- Do **not** commit `node_modules`
- Test each task before moving to the next one

---

## Mandatory Tasks

### Task 1 – Hello Node.js
**Description**  
Create your first Node.js script that demonstrates basic console output and variable usage.

**Requirements**
- Create a file named `task1.js` in the `starter/` folder
- Print "Hello, Node.js!" to the console
- Create a variable `studentName` with your name and print a greeting message
- Create a variable `currentYear` with the current year
- Print a message: "Learning Node.js in [currentYear]"
- Add comments to explain your code

**Expected Output**
```
Hello, Node.js!
Hello, [Your Name]!
Learning Node.js in 2026
```

**Run your code**
```bash
node task1.js
```

---

### Task 2 – File System Operations
**Description**  
Learn to work with files using Node.js built-in `fs` module.

**Requirements**
- Create a file named `task2.js` in the `starter/` folder
- Use the `fs` module (require it at the top)
- Create a text file called `data.txt` with some initial content using `fs.writeFileSync()`
- Read the content of `data.txt` using `fs.readFileSync()` and print it
- Append a new line to `data.txt` using `fs.appendFileSync()`
- Read and print the updated content
- Add proper error handling

**Expected Behavior**
- Creates `data.txt` with initial content
- Reads and displays the content
- Appends new content
- Displays updated content

**Run your code**
```bash
node task2.js
```

---

### Task 3 – Simple HTTP Server
**Description**  
Create a basic HTTP server that responds to different routes.

**Requirements**
- Create a file named `task3.js` in the `starter/` folder
- Use the `http` module to create a server
- The server should listen on port 3000
- Implement the following routes:
  - `/` – Respond with "Welcome to Node.js Workshop!"
  - `/about` – Respond with "This is a Node.js basics workshop"
  - `/time` – Respond with the current time
  - Any other route – Respond with "404 - Page Not Found"
- Print a message when the server starts: "Server running at http://localhost:3000/"

**Run your code**
```bash
node task3.js
```

**Test your server**
Open your browser and visit:
- http://localhost:3000/
- http://localhost:3000/about
- http://localhost:3000/time
- http://localhost:3000/random (should show 404)

---

### Task 4 – Command-Line Tool
**Description**  
Create a command-line tool that processes user arguments.

**Requirements**
- Create a file named `task4.js` in the `starter/` folder
- Use `process.argv` to read command-line arguments
- The tool should support the following commands:
  - `node task4.js greet <name>` – Prints "Hello, <name>!"
  - `node task4.js add <num1> <num2>` – Prints the sum of two numbers
  - `node task4.js info` – Prints Node.js version and platform information
  - `node task4.js` (no arguments) – Prints usage instructions
- Add proper validation (check if arguments are provided)

**Expected Behavior**
```bash
node task4.js greet Alice
# Output: Hello, Alice!

node task4.js add 5 10
# Output: 5 + 10 = 15

node task4.js info
# Output: Node.js version: v18.x.x, Platform: linux

node task4.js
# Output: Usage instructions
```

---

### Task 5 – Working with NPM Packages
**Description**  
Initialize a Node.js project and use an external npm package.

**Requirements**
- Create a `package.json` file using `npm init -y`
- Install the `chalk` package: `npm install chalk@4.1.2` (version 4 for CommonJS compatibility)
- Create a file named `task5.js` in the `starter/` folder
- Use `chalk` to print colored console messages:
  - A green success message
  - A red error message
  - A blue information message
  - A yellow warning message
- Create a custom message that uses multiple colors
- Ensure `node_modules` is in `.gitignore`

**Expected Output**
Colored text in the terminal demonstrating different message types.

**Run your code**
```bash
node task5.js
```

---

## Validation / Acceptance Criteria
Your solution will be considered complete if:
- All 5 task files are created and run without errors
- Each task meets its specific requirements
- Code is readable and includes comments where needed
- `package.json` and `package-lock.json` exist
- `node_modules` is NOT committed (check `.gitignore`)
- The HTTP server (Task 3) responds correctly to all routes
- The command-line tool (Task 4) handles all specified commands

---

## Optional Tasks (Bonus)
These tasks are **optional** and not required for completion.

### Bonus 1 – Asynchronous File Operations
- Modify Task 2 to use asynchronous methods: `fs.readFile()`, `fs.writeFile()`, `fs.appendFile()`
- Use callbacks or promises to handle asynchronous operations
- Create a new file `task2-async.js`

### Bonus 2 – Enhanced HTTP Server
- Modify Task 3 to serve an HTML file for the home route
- Add a `/api/data` route that returns JSON data
- Create a new file `task3-enhanced.js`

### Bonus 3 – File-based Todo List
- Create a command-line todo list application
- Commands: `add <task>`, `list`, `remove <index>`
- Store todos in a JSON file
- Create a new file `task-bonus-todo.js`

### Bonus 4 – Use ES Modules
- Convert one of your tasks to use ES modules (`import`/`export`)
- Update `package.json` to set `"type": "module"`
- Create a new file demonstrating the conversion

---

## Submission Checklist
Before submitting, make sure that:
- [ ] All mandatory tasks (1-5) are completed
- [ ] Each task runs successfully without errors
- [ ] Code is pushed to GitHub
- [ ] Repository does not contain `node_modules`
- [ ] `package.json` and `package-lock.json` are committed
- [ ] README instructions were followed

---

## Evaluation Criteria (If Graded)
Your submission may be evaluated based on:
- **Correctness** (40%) – All tasks work as specified
- **Code Quality** (30%) – Clean, readable, and well-commented code
- **Error Handling** (15%) – Proper handling of edge cases
- **Git Usage** (15%) – Meaningful commits and proper repository management

---

## Common Issues and Tips

### Issue: "Cannot find module"
**Solution**: Make sure you've required the module correctly and installed dependencies with `npm install`.

### Issue: "Port already in use"
**Solution**: Stop the previous server or use a different port. Press Ctrl+C to stop a running server.

### Issue: "ENOENT: no such file or directory"
**Solution**: Check file paths. Use `__dirname` for absolute paths if needed.

### Tip: Debugging
Use `console.log()` to print variable values and understand code flow.

### Tip: Node.js Documentation
The official docs are comprehensive: https://nodejs.org/docs/latest/api/

---

## Notes
- Ask questions if requirements are unclear
- Partial solutions may receive partial credit
- Late submissions follow course policy
- Learning is more important than perfect code

---

Good luck! 💪
