# Contributing to Workshop 02 - Node.js Basics

Thank you for your interest in improving this workshop! This document provides guidelines for instructors and contributors.

## Workshop Structure

This workshop is designed for university students learning Node.js basics. It consists of:

- **Documentation**: README.md, requirement.md, QUICKSTART.md
- **Starter Files**: Template files to help students get started
- **Solutions**: Reference implementations (should be kept in a separate branch in production)

## Making Changes

### For Instructors

If you want to adapt this workshop for your course:

1. Fork the repository
2. Update the content to match your course needs
3. Adjust task difficulty based on student level
4. Add or remove tasks as needed
5. Update the README and requirements accordingly

### For Contributors

If you want to improve the workshop:

1. Create a new branch for your changes
2. Make your improvements
3. Test all changes thoroughly
4. Submit a pull request with a clear description

## Guidelines

### Adding New Tasks

When adding a new task:
- Provide clear requirements
- Include expected output
- Create both template and solution files
- Update the README and requirement.md
- Test the task thoroughly

### Modifying Existing Tasks

When modifying tasks:
- Ensure backward compatibility when possible
- Update all related documentation
- Test that solutions still work
- Update templates if needed

### Documentation Standards

- Use clear, simple language
- Provide examples for complex concepts
- Include code snippets where helpful
- Keep formatting consistent
- Check for typos and grammar

## Testing

Before submitting changes:

1. **Test all solutions**:
   ```bash
   cd solutions
   node task1.js
   node task2.js
   node task3.js
   node task4.js greet Test
   node task5.js
   ```

2. **Verify templates are helpful but not complete**:
   - Templates should guide, not solve
   - Leave room for student learning

3. **Check documentation**:
   - All links work
   - Instructions are clear
   - No typos or formatting issues

4. **Test with fresh environment**:
   ```bash
   # Remove node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

## Code Style

### JavaScript
- Use modern ES6+ syntax where appropriate
- Include comments for complex logic
- Use meaningful variable names
- Follow consistent indentation (2 spaces)

### Documentation
- Use Markdown formatting
- Include code blocks with syntax highlighting
- Use headers for organization
- Keep line length reasonable (80-100 chars)

## Version Management

### Dependencies
- Always specify exact versions for reproducibility
- Test with the specified Node.js LTS version
- Document any version requirements

### Node.js Compatibility
This workshop targets:
- Node.js 18+ (LTS)
- npm 8+

## Solutions Visibility

**Important**: In a production course environment:
- Keep solutions in a separate, private branch
- Only share with teaching assistants
- Provide to students after deadline or for review

For this template repository:
- Solutions are included for instructor reference
- Instructors should remove or relocate before student access

## Feedback and Issues

### Reporting Issues
- Use the GitHub issue tracker
- Provide clear reproduction steps
- Include Node.js version and OS information
- Suggest fixes if possible

### Requesting Features
- Describe the feature clearly
- Explain the educational benefit
- Consider backward compatibility

## Task Difficulty Levels

Current tasks are designed for:
- **Beginner Level**: Tasks 1-2
- **Intermediate Level**: Tasks 3-4
- **Advanced Level**: Task 5

Maintain this progression when adding or modifying tasks.

## Educational Best Practices

- **Hands-on learning**: Tasks should require active coding
- **Progressive difficulty**: Each task builds on previous concepts
- **Real-world relevance**: Use practical examples
- **Error handling**: Teach students to handle errors properly
- **Best practices**: Demonstrate good coding habits

## Questions?

If you have questions about contributing:
- Open an issue for discussion
- Contact the course instructor
- Check existing documentation

---

## License

This workshop is provided for educational purposes. When adapting for your course, please:
- Give appropriate credit
- Share improvements back to the community
- Follow your institution's policies

---

Thank you for helping make this workshop better! 🎓
