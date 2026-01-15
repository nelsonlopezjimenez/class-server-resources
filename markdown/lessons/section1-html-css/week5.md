---
publishDate: 2026-01-07
title: "HTML Midterm"
description: "HTML Midterm Assignment and Exam"
week: 6
section: 1
prerequisites: ["Semantic Elements"]
objectives: "Finish the midterm Assignment and Exam"
---

## Day 4: Midterm Exam

### Mandatory Reading

- [HTML Basics Review](http://localhost:8001/learn/responsive-web-design-v9/review-basic-html/basic-html-review)
- [HTML Semantics](http://localhost:8001/learn/responsive-web-design-v9/review-semantic-html/review-semantic-html)
- [Forms and Tables Review](http://localhost:8001/learn/responsive-web-design-v9/review-html-tables-and-forms/review-html-tables-and-forms)

### Optional Reading

- Anything from MDN or w3 that you have previous gone over.

### Exam:

- Log into Canvas and navigate to this section's class page
- Click on Quizzes
  - Take the HTML Midterm Exam
- **Note**: This is a timed exam and you can only take it once.

# HTML Midterm Project – Website Blueprint

**Note:** This assignment is not due today. It is due Monday (or the first day) of next week.

**Objective:** This assignment tests your understanding of HTML fundamentals, semantic structure, and best practices. You will design and build the basic HTML structure for a website, demonstrating your ability to organize content, incorporate essential elements, and adhere to accessibility standards.

**Project Choice:** Choose one of these options. In Later assignments you will build on this structure.

1.  Recipe Storage Site (Like Allrecipes.com)
2.  Library Check-Out System
3.  eCommerce Site (Like Amazon.com – simplified)
4.  Movie Database System (Like IMDB.com – simplified)

**Assignment Requirements:**

1.  **Website Structure:** You must create HTML for the following 6 pages, reflecting the chosen project.

    - **Home/Main Page:** (Core content and navigation)
      - Header Section:
        - Navigation Bar: Include at least 5 internal links to other pages within the site. Use proper `<a>` tags and descriptive link text.
      - Main Section:
        - h1: Main Page Title
        - Aside Menu: A section for filtering content (e.g., movie genres, recipe categories). This should be functional in a mock-up.
        - Article Section: Display a minimum of 3 “articles” (e.g., recipe previews, movie listings) using `<div>` or `<article>` elements. Each article should include:
          - A heading (`<h2>`, `<h3>`, etc.)
          - Paragraph text (`<p>`)
          - Image element (`<img>`) with `alt` text.
          - Span elements for highlighting key information.
      - Footer Section: Include copyright information, site creator details (name, year, contact), and ideally a link to your project's GitHub repository.
    - **Login Page:** (Placeholder – focus on form structure)
      - Login Form: Use a `form` element with appropriate input types (`text`, `password`, `submit`). Include the following input elements:
        - `label` elements for all inputs.
        - `input type="text"` (username) – `placeholder` attribute.
        - `input type="password"` (password) – `required` attribute.
        - `input type="submit"`
      - **Important:** Do _not_ implement actual login functionality. This is a structure-only exercise.
    - **Search Page:** (Placeholder – structure only)
      - Search Text Bar: `input type="text"` with `placeholder="Search..."`.
      - “Results” Section (Mock Data): Display 2-3 “results” (mock data) – this can be simple HTML or a structured data table.
    - **Contact Page:** (Placeholder – focus on form structure)
      - Contact Form: A `form` element with the following input elements:
        - `label` for each field.
        - `input type="email"` (User Email) – `type="email"` and `required` attributes.
        - `input type="text"` (User Name) – `placeholder` attribute.
        - `textarea` (Question/Concern) – `rows` and `cols` attributes.
        - `input type="tel"` (Phone Number) – `required` attribute.
    - **Product Page:** (Template Page) – This page should use a consistent layout that can be reused for multiple products.

2.  **HTML Boilerplate:** Every page _must_ include a standard HTML boilerplate:

    - `<!DOCTYPE html>` declaration
    - `<html>` element
    - `<head>` element:
      - `<title>` element (with the page’s title)
      - `<meta charset="UTF-8">`
      - `<meta name="viewport" content="width=device-width, initial-scale=1.0">` (Crucial for responsive design)
    - `<body>` element

3.  **Favicon:** Include a favicon (a small image) in the `<head>` section: `<link rel="icon" href="favicon.ico" type="image/x-icon">`

4.  **Semantic HTML:** Use semantic HTML5 elements wherever appropriate (e.g., `<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`, `<form>`, `<label>`, `<input>`, `<textarea>`, `<table>`, etc.). Don't just use `<div>` elements for everything.

5.  **Text and Time:** Implement `time` elements to display dates/times where appropriate.

6.  **Images:** Use `<img>` tags with the `alt` attribute for accessibility.

**Grading Criteria (100 points total):**

- **HTML Structure & Boilerplate (5 points):** Correct HTML5 structure, proper boilerplate, correct doctype declaration.
- **Semantic HTML Usage (30 points):** Appropriate use of semantic HTML5 elements.
- **Form Elements and Validation (30 points):** Proper use of form elements, labels, input types, and `required` attributes.
- **Code Quality & Formatting (30 points):** Clean, well-formatted code, proper indentation, comments.
- **Accessibility (5 Points):** Correct use of `alt` attributes, labels, and consideration for accessibility.
