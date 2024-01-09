# 0x03. ES6 data manipulation


Brief description of the project.

## Resources

### Read or watch:

- [Array](link_to_resource)
- [Typed Array](link_to_resource)
- [Set Data Structure](link_to_resource)
- [Map Data Structure](link_to_resource)
- [WeakMap](link_to_resource)

## Learning Objectives

By the end of this project, you should be able to explain, without the help of Google:

- How to use `map`, `filter`, and `reduce` on arrays
- Typed arrays
- The Set, Map, and WeakMap data structures

## Requirements

- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- Your code will be tested using Jest and the command `npm run test`
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`
- All functions must be exported

## Setup

### Install NodeJS 12.11.x

In your home directory, run the following commands:

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

Verify the installation:

```bash
nodejs -v
# Output should be v12.11.1

npm -v
# Output should be 6.11.3
```

### Install Jest, Babel, and ESLint

In your project directory, install Jest, Babel, and ESLint using the supplied `package.json`:

```bash
npm install
```

## Configuration files

Add the following files to your project directory:

- `package.json`
  [Click to show/hide file contents](link_to_file)
- `babel.config.js`
  [Click to show/hide file contents](link_to_file)
- `.eslintrc.js`
  [Click to show/hide file contents](link_to_file)

Don’t forget to run `$ npm install` when you have the `package.json`.
