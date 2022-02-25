# Veryfi demo

Alejandro Cano

## Installation

After cloning the repository, go to the project folder and run the following command, it will install packages and all its dependencies

```bash
npm install
```

Rename .env.example file to .env.local and fill the values

## Usage

In the project folder run de following command

```bash
npm run dev
```

By default it will be open on port localhost:3000

## Tests

Fill cypress.json missing fields.
Note: Remember to open a new terminal to run the tests, project must be running on localhost:3000

### Interactive

```bash
npm run cypress
```

### Terminal

```bash
npm run cypress:run
```

### Code coverage

After running the tests

```bash
npm run cypress:run
```

Run

```bash
open coverage/lcov-report/index.html
```

You'll see a new window with the code coverage
