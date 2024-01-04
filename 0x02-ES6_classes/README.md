# 0x02. ES6 Classes

## Overview

This project dives into the concepts of ES6 classes, exploring how to define, extend, and utilize classes in JavaScript. Additionally, it covers metaprogramming and symbols, offering insights into advanced features and techniques.

## Learning Objectives

Upon completing this project, you should be able to explain the following concepts:

1. **Defining a Class:**
   - Understand the syntax and process of defining a class in ES6 JavaScript.

2. **Adding Methods to a Class:**
   - Learn how to add methods (functions) to a class to encapsulate behavior.

3. **Static Methods in a Class:**
   - Explore the significance of static methods in a class and learn how to add and utilize them.

4. **Extending a Class:**
   - Understand the concept of class inheritance and how to extend a class from another.

5. **Metaprogramming and Symbols:**
   - Gain knowledge about metaprogramming in JavaScript, focusing on symbols as a powerful tool for creating and using unique identifiers.

## Requirements

- All files executed on Ubuntu 18.04 LTS using NodeJS 12.11.x.
- Allowed editors: vi, vim, emacs, Visual Studio Code.
- Files should end with a new line.
- A README.md file at the root of the project folder is mandatory.
- Code should use the `.js` extension.
- Code will be tested using Jest with the command `npm run test`.
- Code will be verified against lint using ESLint.
- The entire project can be verified by running `npm run full-test`.

## Setup

1. Install NodeJS 12.11.x:

   ```bash
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y
   ```

2. Verify Node.js and npm versions:

   ```bash
   nodejs -v
   npm -v
   ```

3. Install Jest, Babel, and ESLint:

   In your project directory, use the provided `package.json` file and run:

   ```bash
   npm install
   ```

4. Configuration Files:

   Add the following configuration files to your project directory:

   - `package.json`
   - `babel.config.js`
   - `.eslintrc.js`

   Ensure to run `npm install` after adding the `package.json` file.

## Testing and Linting

- Run Jest tests with `npm run test`.
- Verify linting with ESLint using `npm run full-test`.

Feel free to explore the world of ES6 classes and metaprogramming while working on this project. Happy coding!
