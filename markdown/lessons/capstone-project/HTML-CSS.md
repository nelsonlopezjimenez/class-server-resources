# CIS Fullstack Web Development Capstone Project

## Overall Goal

Through out the course you will gradually work on your capstone project It is due before class ends on the last day of the week even if you have not finished all requirements. If you have not finished all requirements you are strongly encouraged to continue working on your project during the break. It may not effect your grade but you will continue to build on this project in later adding JavaScript Functionality, persistency of data, and adding a REACT frontend.

## Project Choices

- **Recipe Application (Similar to All Recipes):** Allows users to search recipes, view recipes, add recipes, edit recipes, and make comments on recipes. Must include a register page, with the ability to login.

- **Social Media Application (Similar to Reddit):** A simplified version where users can search post, submit posts, upvote/downvote, and comment on post. Must include a register page, with the ability to login.

## Your Choice

If you don't like either of these choices you may talk with the instructor about creating another website, eCommerce, Library page etc, that will still meet all requirements of not just the HTML/CSS portion of your capstone project but all other requirements as well.

## Objective

This assignment tests your understanding of HTM fundamentals; semantic structure, and best practices. As well as your understanding of CSS Rules; selectors, media query, responsive design. You will design and build the HTML/CSS structure for a website, demonstrating your ability to organize content, incorporate essential elements, and adhere to accessibility standards. You’ll demonstrate an understanding of responsive design principles and best practices for creating visually appealing and adaptable stylesheets.

Each page should have a consistent look and feel and be aesthetically pleasing. Design for mobile first (less than 460px), then use media queries to add styles for tablets (460px - 1079px) and desktop (1080px and larger).

Pay attention to the differences between the mobile and desktop versions. The content is the same on both, but the mobile site uses a single column, the menu is collapsed, and text sizes are appropriate for the smaller screen.

**IMPORTANT:** The screenshots provided are there to _guide_ your design, not to be perfectly replicated.

## Pages (Minimum Requirements)

Each page should have the same Header with nav bar, and the same footer.

### Home

A landing page that introduces the application and guides users to key sections. (Must include a brief description and a clear navigation to other pages)

[All Recipe Homepage Desktop](/images/all-recipes/homepage-desktop.png) and [All Recipe Homepage Mobile](/images/all-recipes/homepage-mobile.png)

[Reddit Homepage Desktop](/images/reddit/homepage-desktop.png) and [Reddit Homepage Mobile](/images/reddit/homepage-mobile.png)

### Single Item View

Displays detailed information for a single recipe or post.

[Reddit Desktop Viewing a single "Joke" Thread](/images/reddit/single-desktop-joke.png) and [Reddit Desktop Viewing a single "How to learn..." Thread](/images/reddit/single-desktop-learn.png)

[Reddit Mobile Viewing a single "Joke" Thread](/images/reddit/single-mobile-joke.png) and [Reddit Mobile Viewing a single "How to learn..." Thread](/images/reddit/single-mobile-learn.png)

### Create Item View

Create a form to add a post or recipe to the website. The form does not have to work, but all necessary fields to add an item must be present. Create a design that fits seamlessly with the overall theme of your site.

No screenshots are available as it requires you to log in. Do your best. Ask if you need help

### Edit Item View

Create a form to edit a post or recipe on the website. The form does not have to work, but all necessary fields to add an item must be present. Create a design that fits seamlessly with the overall theme of your site.

No screenshots are available as it requires you to log in. Do your best. Ask if you need help

### Comment Item View

Create a form to allow for posting a comment on a post or recipe. The form does not have to work, but all necessary fields to add an item must be present. Create a design that fits seamlessly with the overall theme of your site.

No screenshots are available as it requires you to log in. Do your best. Ask if you need help

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

[Reddit … Menu Mobile](/images/reddit/dot-mobile.png) and [Hamburger Menu Mobile](/images/reddit/hamburger-mobile.png)

## Project Requirements

### HTML

- **Semantic HTML is Mandatory:** You _must_ utilize semantic elements where appropriate:
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

## CSS

You _must_ adhere to a mobile-first design approach, ensuring your website adapts seamlessly to different screen sizes and devices.

- **CSS Selectors:** Utilize CSS selectors effectively, prioritizing `id` and `class` selectors for precise targeting and styling. Don't overuse `id` when `class` selectors would be more appropriate. This will detract from your final grade.
- **Media Queries:** Implement media queries to define responsive styles based on screen size. Focus on designing for mobile devices first – setting styles for smaller screens and then progressively enhancing them for larger screens.
- **Box Model:** Master the CSS box model (margin, padding, border, content) and use it effectively to control spacing and layout.
- **Flexbox:** Use Flexbox where needed to aid in responsive design elements.
- **Typography:** Apply CSS to control font families, sizes, weights, and line heights for optimal readability.
- **Color Theory:** Apply color theory principles to create a harmonious and visually appealing color palette.
- **Best Practices:** Follow CSS best practices – use consistent naming conventions, avoid inline styles, and utilize comments to document your code.
