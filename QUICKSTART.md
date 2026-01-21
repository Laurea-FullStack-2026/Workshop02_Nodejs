# Quick Start Guide

## Workshop 02 - Node.js Basics

This guide will help you get started with the workshop in 5 minutes.

### Prerequisites Check

```bash
# Verify Node.js installation
node --version
# Should show v18.x.x or higher

# Verify npm installation
npm --version
# Should show 8.x.x or higher
```

If not installed, download from: https://nodejs.org/

---

## Step 1: Get the Repository

```bash
# Clone the repository
git clone https://github.com/Laurea-FullStack-2026/Workshop02_Nodejs.git

# Navigate to the starter folder
cd Workshop02_Nodejs/starter
```

---

## Step 2: Read the Requirements

Open and read these files:
1. **README.md** (in root) - Overview and learning objectives
2. **requirement.md** (in root) - Detailed task requirements

---

## Step 3: Start with Task 1

Create your first file:

```bash
# Create task1.js
touch task1.js

# Open in your editor (VS Code example)
code task1.js
```

Write your code following the requirements, then test:

```bash
node task1.js
```

---

## Step 4: Progress Through Tasks

Follow this order:
1. ✅ Task 1 - Hello Node.js
2. ✅ Task 2 - File System Operations
3. ✅ Task 3 - HTTP Server
4. ✅ Task 4 - Command-Line Tool
5. ✅ Task 5 - NPM Packages

---

## Step 5: Initialize NPM (for Task 5)

When you reach Task 5:

```bash
npm init -y
npm install chalk@4.1.2
```

---

## Helpful Commands

```bash
# Run any task
node taskX.js

# For Task 3 (HTTP server)
node task3.js
# Then open http://localhost:3000 in browser

# For Task 4 (CLI tool)
node task4.js greet YourName
node task4.js add 5 10
node task4.js info
```

---

## Tips for Success

✅ **DO:**
- Read requirements carefully
- Test your code frequently
- Use console.log() for debugging
- Commit your work regularly
- Ask for help when stuck

❌ **DON'T:**
- Look at solutions before trying
- Skip testing your code
- Commit node_modules
- Copy-paste without understanding

---

## Need Help?

1. **Error Messages**: Read them carefully - they usually tell you what's wrong
2. **Documentation**: https://nodejs.org/docs/latest/api/
3. **Templates**: Check `task*-template.js` files in the starter folder
4. **Instructor**: Ask your TA or instructor
5. **Solutions**: Only as a last resort - try solving first!

---

## File Structure

```
Workshop02_Nodejs/
├── README.md              # Main overview
├── requirement.md         # Task requirements
├── QUICKSTART.md          # This guide
├── starter/               # Your workspace
│   ├── README.md
│   ├── task1-template.js  # Template files for guidance
│   ├── task2-template.js
│   ├── task3-template.js
│   ├── task4-template.js
│   └── task5-template.js
└── solutions/             # Reference solutions (use wisely!)
    ├── README.md
    ├── package.json
    └── task*.js
```

---

## Completion Checklist

Before submitting, ensure:
- [ ] All 5 tasks are completed
- [ ] Each task runs without errors
- [ ] Code is clean and commented
- [ ] package.json exists
- [ ] node_modules is NOT committed
- [ ] Work is pushed to GitHub

---

## Ready to Start?

```bash
cd starter
touch task1.js
# Start coding! 🚀
```

Good luck! You've got this! 💪
