# Lifting up state

## Prompt

> In React, if I have created a React controlled variable, say const [recipes, setRecipes] = useState([]) and I want to create a new function to delete a recipe. What is the best practice. Create the handleDelete function that calls the setRecipes(recipes.filter(...)) and pass the handleDelete func down through the components to where it is envoked, or pass the setRecipe() down through the components to where it can be envoked in a handleDelete func at the lowest possible component?

## Response

Okay, let's break down the best practice for handling state updates and deleting data in a React controlled component.

**The Best Practice: Lifting State Up (with a Helper Function)**

The generally recommended approach is to "lift state up" and use a helper function to encapsulate the `setRecipes` call. Here's why, and how to do it:

**Why "Lift State Up" is Good:**

- **Maintainability:** It creates a single source of truth for the recipe data. This makes it easier to understand how the data is being modified and reduces the risk of inconsistencies.
- **Reusability:** The `handleDelete` function can be easily reused across your components.
- **React Best Practices:** React encourages a unidirectional data flow, and lifting state up is a cornerstone of this.

* **Explanation:**
  - `handleDeleteRecipe(id)`: This function takes the `id` of the recipe to delete as an argument.
  - `setRecipes(recipes.filter(...))`: Inside `handleDeleteRecipe`, we use `setRecipes` to update the `recipes` state. The `filter` method creates a new array containing all the recipes _except_ the one with the given `id`.
  - `onClick={() => handleDeleteRecipe(recipe.id)}`: This is the crucial part. In the `onClick` handler for the "Delete" button, we pass `handleDeleteRecipe(recipe.id)` to invoke the function. The `() => ...` is needed to create a new function on each click, which then calls the `handleDeleteRecipe` function with the appropriate ID.

**Why Passing `setRecipes` Down Directly Isn't Recommended**

- **Increased Coupling:** It tightly couples your components. Every component that needs to delete a recipe will need to receive the `setRecipes` function.
- **Potential Errors:** It's easy to make mistakes when manually calling `setRecipes` and ensuring the correct data is passed in.
- **Difficult to Reason About:** The flow of data becomes less clear when `setRecipes` is spread around.

**In summary:** Lifting state up and using a helper function to handle the `setRecipes` call is the most robust, maintainable, and React-idiomatic approach for managing state updates like deleting items.

**How It Reduces Coupling**

1. **Single Source of Truth:** The `App.jsx` component now becomes the central place to manage the entire recipe list. This means that the logic for deleting a recipe is contained in one location, rather than spread across three components.

2. **Reduced Dependencies:** The `Recipe.jsx` component no longer needs to know _how_ the recipes are deleted. It simply needs to know _that_ a deletion should occur when the user clicks the "Delete" button. This reduces the amount of information that needs to be passed between components.

3. **Simplified `Recipe.jsx`:** The `Recipe.jsx` component can focus purely on rendering the individual recipe details. It’s cleanly separated from the state management and deletion logic.

**How It Reduces Errors**

1. **Less Code to Maintain:** When a bug related to deletion occurs, you only have to debug and fix it in one place, instead of potentially tracing it across multiple components.

2. **Reduced Risk of Mis-use:** If there were a mistake in how the `setRecipes` function was being called (e.g., incorrect data format), it would be much easier to spot and correct in `App.jsx` rather than potentially propagating the error through the component tree.

3. **Testability:** Because the deletion logic is concentrated in the `App.jsx` component, it’s easier to write unit tests specifically for that logic.

**Here's how the flow would look with this structure:**

1. **`App.jsx`:**

   - Holds the `recipes` state and the `setRecipes` function.
   - Has a `handleDelete` function that calls `setRecipes` with the filtered array.
   - Passes `handleDelete` down to `List.jsx`.

2. **`List.jsx`:**

   - Uses `recipes.map()` to render each recipe.
   - Passes the `handleDelete` down to `Recipe.jsx`.

3. **`Recipe.jsx`:**
   - Renders the recipe details.
   - Contains a button that calls the `handleDelete` function (passed as a prop) when clicked, passing the recipe's ID back up to `App.jsx`.

**Key Takeaway:** By centralizing the state management and deletion logic in the `App.jsx` component, you create a cleaner, more maintainable, and less error-prone React application. This aligns perfectly with React's principles of component composition and single responsibility.
