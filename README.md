# Workshop 02 – Node.js Basics

## Overview
In this workshop, you will learn the fundamentals of **Node.js** and apply them by building small, hands-on applications that demonstrate core Node.js concepts.

This workshop focuses on **practical understanding**, not theory.

---

## Learning Objectives
By the end of this workshop, you should be able to:
- Understand the Node.js runtime and its execution model
- Work with the file system using Node.js built-in modules
- Create simple HTTP servers using the `http` module
- Handle command-line arguments and user input
- Use npm to manage packages and dependencies
- Organize code into reusable modules

---

## Topics Covered
- Node.js REPL and script execution
- File system operations (read, write, append)
- Creating HTTP servers
- Working with modules (require/exports)
- Command-line arguments (process.argv)
- NPM package management
- Asynchronous programming basics (callbacks and promises)

---

## Prerequisites
Before starting this workshop, make sure you have:
- Basic knowledge of JavaScript (variables, functions, arrays, objects)
- Installed:
  - Node.js (LTS version 18+ recommended)
  - npm (comes with Node.js)
  - Git
  - A code editor (VS Code recommended)

To verify your installation:
```bash
node --version
npm --version
```

---

## Project Description
You will build:
> **Five progressive Node.js applications** that demonstrate core concepts, starting from simple console output to creating an HTTP server with file operations.

---

## Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Laurea-FullStack-2026/Workshop02_Nodejs.git
cd Workshop02_Nodejs/starter
```

### 2️⃣ Initialize the project
```bash
npm install
```

### 3️⃣ Review the tasks
Open and read the [requirement.md](requirement.md) file to see all tasks.

---

## Workshop Structure

The workshop is divided into 5 progressive tasks:

1. **Task 1** – Hello Node.js (Basic script execution)
2. **Task 2** – File System Operations (Read/Write files)
3. **Task 3** – HTTP Server (Create a basic web server)
4. **Task 4** – Command-Line Tool (Process arguments)
5. **Task 5** – NPM Packages (Use external dependencies)

Each task builds upon concepts from previous tasks.

---

## Running Your Code

To run any Node.js file:
```bash
node filename.js
```

Example:
```bash
node task1.js
```

---

## Tips for Success

- **Read error messages carefully** – Node.js provides helpful error information
- **Use `console.log()` liberally** – Debug by printing values
- **Test frequently** – Run your code after each change
- **Consult documentation** – [Node.js Docs](https://nodejs.org/docs/latest/api/) are your friend
- **Ask for help** – If stuck, reach out to instructors or peers

---

## Resources

- [Node.js Official Documentation](https://nodejs.org/docs/latest/api/)
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [NPM Documentation](https://docs.npmjs.com/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

---

## Need Help?

If you encounter issues:
1. Check the error message carefully
2. Review the task requirements in `requirement.md`
3. Consult the Node.js documentation
4. Ask your instructor or teaching assistant

---

## Completion

Once you complete all tasks:
- Ensure all code runs without errors
- Commit your changes with meaningful messages
- Push to your GitHub repository
- Verify `node_modules` is not committed

---

Good luck and have fun learning Node.js! 🚀
