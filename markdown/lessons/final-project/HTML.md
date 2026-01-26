# CIS Fullstack Web Development Capstone Project – HTML Focus

## Overall Goal

Through out the course you will gradually work on your capstone project. You Will have 4 days of in class, and out of class time to work on this project. It is due before class ends on the last day of the week even if you have not finished all requirements. If you have not finished all requirements you are strongly encouraged to continue working on your project during the weekend/break. It may not effect your grade but you will continue to build on this project in later sections (adding CSS), in section 2 (adding JavaScript Functionality), in section 3 (add persistency of data and hosting of pages), and section 4 (adding a REACT frontend).

**Project Choices:**

- **Recipe Application (Similar to All Recipes):** Allows users to search recipes, view recipes, add recipes, edit recipes, and make comments on recipes. Must include a register page, with the ability to login.

- **Social Media Application (Similar to Reddit):** A simplified version where users can search post, submit posts, upvote/downvote, and comment on post. Must include a register page, with the ability to login.

## Objective:

This assignment tests your understanding of HTML fundamentals, semantic structure, and best practices. You will design and build the basic HTML structure for a website, demonstrating your ability to organize content, incorporate essential elements, and adhere to accessibility standards.

**YOU DO NOT NEED TO MATCH THE LOOK, STYLE OR CONTENT ON THE SCREENSHOTS. THEY ARE THERE TO HELP YOU PLAN YOUR HTML ONLY AT THIS STAGE**

## Pages (Minimum Requirements):

Each page should have the same Header with nav bar, and the same footer.

Above all have fun with this. Your finished site doesn't have to look exactly like the screenshots provided they are their to guide you.

### Home:

A landing page that introduces the application and guides users to key sections. (Must include a brief description and a clear navigation to other pages)

[All Recipe Homepage Desktop](/images/all-recipes/homepage-desktop.png) and [All Recipe Homepage Mobile](/images/all-recipes/homepage-mobile.png) - **Note:** All Recipes uses a Single Page Application (SPA) That means you would scroll down to see the full page.

[Reddit Homepage Desktop](/images/reddit/homepage-desktop.png) and [Reddit Homepage Mobile](/images/reddit/homepage-mobile.png) - **Note:** Reddit uses a Single Page Application (SPA) That means you would scroll down to see the full page. This is a cropped version of their homepage.

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

### Create Item

Allows users to add new recipes or posts. No screenshots as it requires you to log in so do your best. Ask if you need help

### Comment on Item

Allows users to leave comments on a selected item. No screenshots as it requires you to log in so do your best. Ask if you need help

#### Additional Screenshots

[Reddit ... Menu Mobile](/images/reddit/dot-mobile.png) and [Hamburger Menu Mobile](/images/reddit/hamburger-mobile.png)

- **HTML Specifics & Instructions:**
  - **Semantic HTML is Mandatory:** Students _must_ utilize the following semantic elements appropriately:
    - `<a>` (Links) – Properly nested and used to link to different pages.
    - `<ol>` or `<ul>` (Lists) – For presenting structured data (recipe ingredients, Reddit post hierarchy, etc.).
    - `<header>` – For the main heading of a page.
    - `<nav>` – For the main navigation menu.
    - `<main>` – The primary content area of the page.
    - `<article>` – For distinct content blocks (e.g., a single recipe).
    - `<section>` – To group related content logically within an article.
    - `<aside>` – For sidebars (e.g., a menu, related content).
    - `<footer>` – For the footer of the page (Copyright, contact info).
    - `<form>` – For user input (Login, Register, Create Item).
  - **`div` Usage:** Use `div` elements _only_ when absolutely necessary for layout or grouping content that doesn't have a semantic element to represent. Overuse of `div` will detract from final grade.
