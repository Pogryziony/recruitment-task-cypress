# E-commerce Website Testing with Cypress and Playwright

This project is designed to validate the functionality of key features on an e-commerce website using Cypress with TypeScript. The tests cover user registration and login, product search and filter, and adding items to the cart.

## Objective

To automate testing for an e-commerce platform ensuring that:
- User registration and login processes are functioning correctly.
- Product search and filtering capabilities are working as expected.
- The shopping cart updates correctly when items are added.

## Scenarios to Test

### 1. User Registration and Login
- Navigate to the signup page.
- Create a new user account with a unique username, email, and password.
- Handle user input validations.
- Verify successful registration and redirection to the login page.
- Login with the newly created credentials.
- Confirm successful login and redirection to the homepage.

### 2. Product Search and Filter
- Use the search bar to find products related to "electronics."
- Apply filters for price range or other specifications.
- Verify the products displayed match the search and filter criteria.

### 3. Adding Items to Cart
- Select a product and navigate to its detail page.
- Add the product to the cart.
- Ensure the cart reflects the addition correctly.

## Getting Started

Clone this repository and install dependencies.

```bash
git clone https://github.com/Pogryziony/recruitment-task.git
cd recruitment-task
npm install
```

## Running Tests
To run Cypress tests:

```bash
npm run test:cypress
```

```
Note: 
This project is just a showcase. It is not connected to a real e-commerce website, so running tests won't be possible.
```

## Project Structure
```perl
Project structure including both cypress and playwright tests and their respective configurations:

recruitment-task/
│
├── cypress/                          # Cypress-specific files
│   ├── e2e/                          # Test cases (spec.ts file extension)
│   ├── fixtures/                     # Test data for tests          
│   └── support/                      # General support code   
│       ├── pages/                    # Page objects           
│       ├── selectors/                # Selectors for elements on the website          
│       ├── utils/                    # Utility functions           
│       ├── commands.js               # Custom commands          
│       ├── e2e.js                    # Test runner for Cypress tests           
│       └── index.ts                  # General support code
├── node_modules/                     # Node.js modules (not tracked in version control)
├── cypress.config.js                 # Cypress configuration file
├── package.json                      # Project metadata and dependencies
├── package-lock.json                 # Locked versions of the dependencies
│
├── README.md                         # Project documentation
└── tsconfig.json                     # TypeScript configuration
