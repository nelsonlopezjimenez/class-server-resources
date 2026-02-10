# CIS Fullstack Web Development Capstone Project (JavaScript)

## Overall Goal

This portion of your capstone project challenges you to leverage your JavaScript skills to create a fully functional web application, building upon the HTML and CSS structures we've established. You will implement CRUD (Create, Read, Update, Delete) operations, data management, and interactive features. The project will require strong JavaScript fundamentals, DOM manipulation, event handling, and potentially asynchronous operations.

**Important:** You will be provided with a data object structure to work with. This will reduce the scope and focus your effort on JavaScript logic.

## Objective

This assignment tests your understanding of JavaScript fundamentals, DOM manipulation, event handling, and basic data management. You’ll build a fully interactive web application that allows users to interact with the data object. The application will demonstrate your ability to create a well-structured, functional, and user-friendly web experience.

## Core Features (Minimum Requirements)

- **Data Display:** Dynamically display the chosen data object (recipes or posts) within the appropriate HTML elements.
- **CRUD Operations:** Implement the following JavaScript functions:
  - **Create (Add):** Allow users to add new items to the data object via a form.
  - **Read (Display):** Display the data object in a user-friendly format.
  - **Update (Edit):** Allow users to edit existing items.
  - **Delete:** Allow users to delete items.
- **Form Handling:** Use `preventDefault()` on form submissions to prevent page reloads and handle data submission correctly. Include clear success and error messages for each form interaction.
- **Event Handling:** Use JavaScript event listeners (e.g., `addEventListener`) to respond to user actions (e.g., button clicks, form submissions).
- **Data Validation (Basic):** Implement basic data validation on form inputs to ensure data integrity (e.g., required fields, valid email format, numeric ranges).
- **Clear UI Feedback:** Provide clear visual feedback to the user about the status of their actions (e.g., success messages, error messages, loading indicators).
- **Code Organization:** Organize your JavaScript code into functions to improve readability and maintainability.
- **Best Practices:** Follow JavaScript best practices – use consistent naming conventions, avoid inline styles, and comment your code thoroughly.

## Page Structure & JS Interaction (Assumptions)

- **Home/Index Page:** This page will display the main data list. Include pagination or infinite scrolling for large datasets.
- **Item View (Single Item):** This page will allow users to view the details of a single item and potentially edit it.
- **Create/Add Item View:** Form for adding new items. Creating a new item will add a new object to the data array. Only allow when a user is logged in.
- **Edit Item View:** Form for editing existing items. Editing an item will update that objects data in the data array. Only allow when a user is logged in.
- **Register:** Form to register a new account. Creating a new user will add a new object to the user array.
- **Login:** Form to login. When a user logs in it stores this information (e.g., a session token or local storage) and authorizes them to create and edit items. Consider implementing a session timeout.

## Helpful Information

- **Pseudo Code:** Use pseudo code to plan and troubleshoot. If you are having trouble understanding a task, or implementing a requirement, write pseudo code. If you can write the steps in plain english you can code it in JavaScript.
- **Start Small:** Breakdown complicated tasks into smaller, manageable tasks. Build the code to complete one task, then build another. Before you know it you will have a functional application.
- **Testing:** Test your code frequently to ensure that it is working correctly.
- **Debugging:** Use the browser’s developer tools to debug your code.
- **Ask for Help:** Don't hesitate to ask for help if you get stuck.
