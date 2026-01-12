Brooks TODO - Jan. 7th, 2026

Things to do in Canvas

1. Update GFC: links on week zero

1. Create quizzes

   - week 13: Functions

1. Create Uploads for:

   - Labs 1.1.B, 1.1.B, 1.2.A, 1.2.B, 1.3.A, 1.3.B
   - Labs 2.1, 2.2, 2.3 (grade only)
   - labs 3.1, 3.2
   - Labs 11.1, 11.2, and 11.3
   - Labs 12.1, 12.2, 12.3.A and 12.3.B
   - Labs 13.1.A, 13.1.B, 13.1.C, 13.2.A, 13.2.B, 13.2.C, 13.3.A, 13.3.B, 13.3.C,
   - Assignment 0
   - Assignment 1
   - Assignment 2
   - Assignment 3
   - Assignment 11
   - Assignment 12
   - Assignment 13

1. Create Weeks

   - 4
   - 5
   - 6
   - 7
   - 8
   - 9
   - 10
   - 14
   - 15
   - 16
   - 10
   - 17
   - 18
   - 19
   - 10
   - 20

1. Upload to Git Repo

   - 0
   - 1
   - 2
   - 3
   - 11
   - 12
   - 13

1. Upload quizzes to Canvas

   - Week 1: HTML Fundamentals
   - Week 2: HTML Basic
   - Week 3: Semantic Elements
   - week 12: Math
   - week 12: Comparisons and Conditionals

1. Verify Quizzes
   - Week 1: HTML Fundamentals
   - Week 2: HTML Basic
   - Week 3: Semantic Elements
   - week 12: Math
   - week 12: Comparisons and Conditionals

**Assignment Title:** "Simple Recipe Organizer"

**Overall Goal:** Students will create a basic JavaScript application that allows a user to input and display information about a simple recipe.

**Requirements/Steps:**

1. **HTML Structure (Provided):** You'll provide the students with a basic HTML file containing:

   - A heading (`<h1>`) labeled "My Recipes".
   - A section for entering recipe details. This section should include:
     - A label for "Recipe Name:"
     - A text input field for the recipe name.
     - A label for “Ingredients:”
     - A text input field for a comma-separated list of ingredients.
     - A label for “Instructions:”
     - A text area (a larger text input field) for the recipe instructions.
     - A button labeled “Add Recipe”.
   - A section where recipe details will be displayed. This should initially be empty, but will be populated after the “Add Recipe” button is clicked.

2. **JavaScript Logic:** Students will write JavaScript code to handle the following:
   - **Event Listener:** Attach an event listener to the “Add Recipe” button. This listener will trigger the code to run when the button is clicked.
   - **Data Capture:** When the “Add Recipe” button is clicked, the JavaScript code should:
     - Retrieve the values entered in the text input fields (Recipe Name, Ingredients, Instructions).
     - Store this information in a JavaScript object. The object should have the following structure:
       ```javascript
       const recipe = {
         name: "", // Recipe name (string)
         ingredients: "", // A comma-separated string of ingredients (string)
         instructions: "", // Recipe instructions (string)
       };
       ```
     - **Displaying the Recipe:** After the recipe object is created, the JavaScript code should dynamically update the HTML to display the recipe details. It should create HTML elements to display:
       - The recipe name (e.g., `<h1>` tag)
       - The list of ingredients (e.g., `<p>` tag with a bulleted list)
       - The recipe instructions (e.g., `<pre>` tag for formatting)
   - **Variable Use:** Students will be expected to use variables to store and manipulate the data.
   - **Function (Optional):** They can, but aren’t _required_ to, create a function to encapsulate the entire data capture and display logic.

**Grading Criteria (Total 100 Points)**

| Category                            | Points | Description                                                                           |
| ----------------------------------- | ------ | ------------------------------------------------------------------------------------- |
| **HTML Structure**                  | 10     | Correct HTML structure with all required elements and labels.                         |
| **JavaScript Logic – Data Capture** | 30     | Correctly retrieves values from input fields and stores them in the recipe object.    |
| **JavaScript Logic – Display**      | 30     | Correctly generates and appends HTML elements to display the recipe information.      |
| **Code Clarity & Comments**         | 10     | Code is well-formatted, readable, and includes comments to explain key steps.         |
| **Functionality & Accuracy**        | 10     | The application functions as expected – adding recipes and displaying them correctly. |
