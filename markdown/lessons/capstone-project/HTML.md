# CIS Fullstack Web Development Capstone Project

**Project Choices:**

You can choose to build one of the following web applications:

**Recipe Application (Similar to All Recipes):** A web application allowing users to search, view, add, edit, and comment on recipes. This application _must_ include a register page with login functionality.

**Social Media Application (Similar to Reddit):** A simplified version where users can search, submit posts, upvote/downvote, and comment on posts. This application _must_ include a register page with login functionality.

**Your Choice:** If you don't like either of these choices you may talk with the instructor about creating another website, eCommerce, Library page etc, that will still meet all requirements of not just the HTML portion of your capstone project but all other requirements as well.

## Objective:

This project is designed to test your understanding of HTML fundamentals, semantic structure, and best practices. You will design and build the basic HTML structure for a website, demonstrating your ability to organize content, incorporate essential elements, and adhere to accessibility standards. Your focus will be on applying these concepts to create a well-structured and maintainable HTML foundation.

**IMPORTANT:** The screenshots provided are for _reference only_. They are intended to guide your initial planning, but you are **not** expected to replicate their styling or content. Focus on building a solid, semantically correct HTML structure.

## Pages & Structure (Minimum Requirements)

Each page will share a consistent Header (with a navigation bar) and Footer.

### Home:

A landing page that introduces the application and guides users to key sections. (Must include a brief description and a clear navigation to other pages)

[All Recipe Homepage Desktop](/images/all-recipes/homepage-desktop.png) and [All Recipe Homepage Mobile](/images/all-recipes/homepage-mobile.png) - **Note:** All Recipes uses a Single Page Application (SPA) That means you would scroll down to see the full page.

[Reddit Homepage Desktop](/images/reddit/homepage-desktop.png) and [Reddit Homepage Mobile](/images/reddit/homepage-mobile.png) - **Note:** Reddit uses a Single Page Application (SPA) That means you would scroll down to see the full page.

### Single Item View:

Displays detailed information for a single recipe or post.

[Reddit Desktop Viewing a single "Joke" Thread](/images/reddit/single-desktop-joke.png) and [Reddit Desktop Viewing a single "How to learn..." Thread](/images/reddit/single-desktop-learn.png)

[Reddit Mobile Viewing a single "Joke" Thread](/images/reddit/single-mobile-joke.png) and [Reddit Mobile Viewing a single "How to learn..." Thread](/images/reddit/single-mobile-learn.png)

**NEED SINGLE ITEM DESKTOP AND MOBILE FOR ALL RECIPE**

### Create/Add Item View

Create a form to add a post or recipe to the website. (Form does not have to work). No screenshots as it requires you to log in so do your best. Ask if you need help

### Edit Item View

Create a form to edit a post or recipe on the website. (Form does not have to work). No screenshots as it requires you to log in so do your best. Ask if you need help

### Search Bar and Result

Displays a list of items matching a user's search query.

[Reddit Search Bar Desktop](/images/reddit/search-desktop.png) and [Reddit Search Bar Mobile](/images/reddit/search-mobile.png)

[Reddit Search Result Desktop](/images/reddit/search-result-desktop.png) and [Reddit Search Result Mobile](/images/reddit/search-result-mobile.png)

### Login

Allows users to access a personalized experience.

[All Recipes Login Desktop](/images/all-recipes/login-desktop.png) and [All Recipes Login Mobile](/images/all-recipes/login-mobile.png)

[Reddit Login Desktop](/images/reddit/login-desktop.png) and [Reddit Login Mobile](/images/reddit/login-mobile.png)

### Register

Enables new users to create accounts.

[Reddit Register Desktop](/images/reddit/register-desktop.png) and [Reddit Register Mobile](/images/reddit/register-mobile.png)

[All Recipes Register Desktop](/images/All-Recipes/register-desktop.png) and [All Recipes Register Mobile](/images/All-Recipes/register-mobile.png)

#### Additional Screenshots

[Reddit ... Menu Mobile](/images/reddit/dot-mobile.png) and [Hamburger Menu Mobile](/images/reddit/hamburger-mobile.png)

## HTML Specifics & Instructions

**Mandatory Semantics:**

- **Semantic HTML is Essential:** You _must_ utilize the following semantic elements appropriately. Incorrect use will significantly impact your grade.
  - `<a href="...">` (Links) – Properly nested and used to link to different pages.
  - `<ol>` or `<ul>` (Lists) – For presenting structured data (recipe ingredients, Reddit post hierarchy, etc.). Choose the appropriate list type based on the data.
  - `<header>` – For the main heading of a page.
  - `<nav>` – For the main navigation menu.
  - `<main>` – The primary content area of the page.
  - `<article>` – For distinct content blocks (e.g., a single recipe).
  - `<section>` – To group related content logically within an article.
  - `<aside>` – For sidebars (e.g., a menu, related content).
  - `<footer>` – For the footer of the page (Copyright, contact info).
  - `<form>` – For user input (Login, Register, Create Item).
- **`div` Usage:** Use `div` elements _only_ when absolutely necessary for layout or grouping content that doesn’t have a semantic element to represent. Overuse of `div` will detract from your final grade. Prioritize semantic HTML elements whenever possible.

- **Validation:** Validate your HTML using an online validator (e.g., [https://validator.w3.org/](https://validator.w3.org/)) to ensure it meets web standards.
