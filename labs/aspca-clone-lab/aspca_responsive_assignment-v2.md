# ASPCA Website - Responsive Design Assignment

## Assignment 1: Building a Responsive ASPCA Website

**Estimated Time:** 4-6 hours  
**Difficulty Level:** Beginner to Intermediate

---

### Learning Objectives

By completing this assignment, you will:
- Practice fundamental HTML5 semantic tags
- Learn three methods of applying CSS (inline, internal, and external)
- Understand responsive design principles using mobile-first approach
- Work with CSS Flexbox and Grid for responsive layouts
- Use media queries and breakpoints for different screen sizes
- Learn to validate HTML and debug syntax errors
- Create a professional, accessible website that works on all devices

---

### Important Notes Before You Begin

⚠️ **Grading Criteria:**
- Your website will be graded based on how it **appears on screen** across different devices (mobile, tablet, desktop)
- Your pages must closely match the reference screenshots provided
- Responsive behavior at different breakpoints is required
- Clean, validated HTML code is mandatory
- Proper use of CSS styling techniques is expected

🔍 **Testing Requirements:**
- Test your website on multiple screen sizes (use browser DevTools)
- Validate ALL HTML files using the [W3C HTML Validator](https://validator.w3.org/)
- Fix all validation errors before submission
- Note: This assignment **intentionally contains HTML syntax errors** that you must find and fix!

---

## Part 1: Project Setup

### Folder Structure

Create the following folder structure:

```
Full Stack Web Dev/
└── Assignments/
    └── assignment1/
        ├── index.html
        ├── css/
        │   └── styles.css
        ├── html/
        │   ├── key_issues.html
        │   ├── our_response.html
        │   └── how_you_can_help.html
        └── images/
            └── (save all images here)
```

**Instructions:**
1. Create a folder named `Assignments` under your `Full Stack Web Dev` folder
2. Inside `Assignments`, create `assignment1` folder
3. Inside `assignment1`, create:
   - `index.html` file (in the root)
   - `css` folder with `styles.css` file
   - `html` folder with three HTML files
   - `images` folder for all images

---

## Part 2: Understanding CSS Styling Methods

Before we begin coding, let's understand the three ways to add CSS to HTML:

### 1. **Inline CSS** (Not Recommended for This Project)
CSS is written directly in the HTML element using the `style` attribute.

```html
<p style="color: blue; font-size: 16px;">This is inline CSS</p>
```

**Pros:** Quick for testing  
**Cons:** Hard to maintain, not reusable, mixes content with presentation

---

### 2. **Internal CSS** (Also Called Embedded CSS)
CSS is written inside a `<style>` tag in the HTML document's `<head>` section.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        p {
            color: blue;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <p>This uses internal CSS</p>
</body>
</html>
```

**Pros:** Keeps styles in one place within the document  
**Cons:** Only affects that one HTML file, not reusable across pages

---

### 3. **External CSS** (RECOMMENDED - We'll Use This!)
CSS is written in a separate `.css` file and linked to the HTML document.

**HTML file:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <p>This uses external CSS</p>
</body>
</html>
```

**CSS file (styles.css):**
```css
p {
    color: blue;
    font-size: 16px;
}
```

**Pros:** Reusable across multiple pages, easier to maintain, separates content from presentation  
**Cons:** Requires an additional HTTP request (minor issue)

**For this project, we will use EXTERNAL CSS exclusively.**

---

## Part 3: Understanding Responsive Design

### Mobile-First Approach

We'll build this website using a **mobile-first strategy**, which means:
1. Start by designing for small screens (smartphones)
2. Add styles for larger screens using media queries
3. Progressively enhance the layout as screen size increases

### Breakpoints We'll Use

```css
/* Mobile First: Base styles are for mobile (320px - 767px) */

/* Tablet: 768px and up */
@media (min-width: 768px) {
    /* Styles for tablets */
}

/* Desktop: 1024px and up */
@media (min-width: 1024px) {
    /* Styles for laptops/desktops */
}

/* Large Desktop: 1440px and up */
@media (min-width: 1440px) {
    /* Styles for large screens */
}
```

---

## Part 4: HTML Structure (index.html)

Create your `index.html` file with the following structure. **Remember: This code contains intentional errors you must find and fix!**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Student Name: [YOUR NAME HERE] -->
    <!-- Date: [TODAY'S DATE] -->
    <!-- Assignment: ASPCA Responsive Website -->
    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="ASPCA - Help animals in need">
    <title>ASPCA - Home</title>
    
    <!-- Link to external CSS file -->
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    
    <!-- NAVIGATION SECTION -->
    <!-- Navigation should be consistent across all pages -->
    <nav class="main-nav">
        <!-- Logo/Home Link -->
        <div class="nav-logo">
            <a href="index.html">
                <img src="images/aspca-logo.png" alt="ASPCA Logo" class="logo-img">
            </a>
        </div>
        
        <!-- Navigation Links -->
        <ul class="nav-links">
            <li><a href="html/key_issues.html">Key Issues</a></li>
            <li><a href="html/our_response.html">Our Response</a></li>
            <li><a href="html/how_you_can_help.html">How You Can Help</a>
        </ul>
        
        <!-- Donate Button -->
        <div class="nav-donate">
            <img src="images/donate-button.png" alt="Donate" class="donate-img">
        </div>
    </nav>
    
    <!-- MAIN CONTENT -->
    <main>
        <!-- Hero Section -->
        <section class="hero">
            <h1>We Are Their Voice</h1>
        </section>
        
        <!-- Sign-Up Form Section -->
        <section class="signup-section">
            <h2>Sign Up to Help Animals</h2>
            
            <form class="signup-form" action="#" method="post">
                <!-- First Name Field -->
                <div class="form-group">
                    <label for="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" 
                           placeholder="Enter your first name" required>
                </div>
                
                <!-- Last Name Field -->
                <div class="form-group">
                    <label for="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" 
                           placeholder="Enter your last name" required>
                </div>
                
                <!-- Interest Dropdown -->
                <div class="form-group">
                    <label for="interest">I am interested in:</label>
                    <select id="interest" name="interest" required>
                        <option value="">-- Please Select --</option>
                        <option value="foster">Foster</option>
                        <option value="adopt">Adopt</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                
                <!-- Comments Text Area -->
                <div class="form-group"
                    <label for="comments">Comments:</label>
                    <textarea id="comments" name="comments" rows="5" 
                              placeholder="Tell us how you'd like to help..."></textarea>
                </div>
                
                <!-- Submit Button -->
                <button type="submit" class="submit-btn">Submit</button>
            </form>
        </section>
    </main>
    
    <!-- FOOTER SECTION -->
    <!-- Footer should be consistent across all pages -->
    <footer class="main-footer">
        <div class="footer-content">
            <p class="footer-info">
                The ASPCA is a national leader in animal rescue and protection, 
                working tirelessly to put an end to animal abuse and neglect.
            </p>
            
            <hr>
            
            <h3>Our Partners</h3>
            
            <div class="partnerships">
                <img src="images/partner1.png" alt="Partner Organization 1">
                <img src="images/partner2.png" alt="Partner Organization 2">
            </div>
            
            <p class="copyright">
                &copy; 2025 ASPCA. All rights reserved.
            </p>
        </div>
    </footer>
    
</body>
</html>
```

---

## Part 5: Additional HTML Pages

### key_issues.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Student Name: [YOUR NAME HERE] -->
    <!-- Date: [TODAY'S DATE] -->
    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ASPCA - Key Issues</title>
    <link rel="stylesheet" href="../css/styles.css">
</head>
<body>
    
    <!-- NAVIGATION (Same as index.html) -->
    <nav class="main-nav">
        <div class="nav-logo">
            <a href="../index.html">
                <img src="../images/aspca-logo.png" alt="ASPCA Logo" class="logo-img">
            </a>
        </div>
        
        <ul class="nav-links">
            <li><a href="key_issues.html">Key Issues</a></li>
            <li><a href="our_response.html">Our Response</a></li>
            <li><a href="how_you_can_help.html">How You Can Help</a></li>
        </ul>
        
        <div class="nav-donate">
            <img src="../images/donate-button.png" alt="Donate" class="donate-img">
        </div>
    </nav>
    
    <!-- MAIN CONTENT -->
    <main>
        <section class="page-header">
            <h1>Key Issues Affecting Animals</h1>
            <h3>Learn about the challenges animals face today</h3>
        </section>
        
        <!-- Issues Table/Grid -->
        <section class="issues-grid">
            <div class="issue-card">
                <img src="../images/issue1.jpg" alt="Animal Cruelty">
                <h4>Animal Cruelty</h4>
                <p>Every year, thousands of animals suffer from abuse and neglect. 
                   We work to investigate and prosecute cases of animal cruelty.</p>
            </div>
            
            <div class="issue-card">
                <img src="../images/issue2.jpg" alt="Puppy Mills"
                <h4>Puppy Mills</h4>
                <p>Puppy mills prioritize profit over animal welfare, keeping dogs 
                   in terrible conditions. We fight to shut down these operations.</p>
            </div>
            
            <div class="issue-card">
                <img src="../images/issue3.jpg" alt="Farm Animal Welfare">
                <h4>Farm Animal Welfare</h4>
                <p>Millions of farm animals live in inhumane conditions. We advocate 
                   for better treatment and living standards.</p>
            </div>
            
            <div class="issue-card">
                <img src="../images/issue4.jpg" alt="Disaster Relief">
                <h4>Disaster Relief</h4>
                <p>When disasters strike, animals need help too. Our teams respond 
                   to rescue and care for animals in emergency situations.</p>
            </div>
        </section>
    </main>
    
    <!-- FOOTER (Same as index.html) -->
    <footer class="main-footer">
        <div class="footer-content">
            <p class="footer-info">
                The ASPCA is a national leader in animal rescue and protection, 
                working tirelessly to put an end to animal abuse and neglect.
            </p>
            
            <hr>
            
            <h3>Our Partners</h3>
            
            <div class="partnerships">
                <img src="../images/partner1.png" alt="Partner Organization 1">
                <img src="../images/partner2.png" alt="Partner Organization 2">
            </div>
            
            <p class="copyright">
                &copy; 2025 ASPCA. All rights reserved.
            </p>
        </div>
    </footer>
    
</body>
</html>
```

### our_response.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Student Name: [YOUR NAME HERE] -->
    <!-- Date: [TODAY'S DATE] -->
    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ASPCA - Our Response</title>
    <link rel="stylesheet" href="../css/styles.css">
</head>
<body>
    
    <!-- NAVIGATION -->
    <nav class="main-nav">
        <div class="nav-logo">
            <a href="../index.html">
                <img src="../images/aspca-logo.png" alt="ASPCA Logo" class="logo-img">
            </a>
        </div>
        
        <ul class="nav-links">
            <li><a href="key_issues.html">Key Issues</a></li>
            <li><a href="our_response.html">Our Response</a></li>
            <li><a href="how_you_can_help.html">How You Can Help</a></li>
        </ul>
        
        <div class="nav-donate">
            <img src="../images/donate-button.png" alt="Donate" class="donate-img">
        </div>
    </nav>
    
    <!-- MAIN CONTENT -->
    <main>
        <section class="page-header">
            <h1>Our Response to Animal Cruelty</h1>
            <h3>How we're making a difference</h3>
        </section>
        
        <section class="response-content">
            <p>
                The ASPCA has been at the forefront of animal welfare for over 150 years. 
                Through our rescue operations, legislative advocacy, and educational programs, 
                we work every day to create a more humane world for animals. Our dedicated 
                teams respond to emergencies, investigate cruelty cases, and provide critical 
                care to animals in need. We believe that every animal deserves a life free 
                from suffering, and we won't stop until that vision becomes reality.
            </p>
            
            <figure class="response-figure">
                <img src="../images/rescue-team.jpg" alt="ASPCA Rescue Team in Action">
                <figcaption>Our rescue teams work around the clock to save animals in distress</figcaption>
            </figure>
            
            <p>
                Last year alone, we helped over 100,000 animals through our various programs. 
                From spay/neuter initiatives to adoption services, from cruelty investigations 
                to disaster response, the ASPCA is there when animals need us most.
            </p>
        </section>
    </main>
    
    <!-- FOOTER -->
    <footer class="main-footer">
        <div class="footer-content">
            <p class="footer-info">
                The ASPCA is a national leader in animal rescue and protection, 
                working tirelessly to put an end to animal abuse and neglect.
            </p>
            
            <hr>
            
            <h3>Our Partners</h3>
            
            <div class="partnerships">
                <img src="../images/partner1.png" alt="Partner Organization 1">
                <img src="../images/partner2.png" alt="Partner Organization 2">
            </div>
            
            <p class="copyright">
                &copy; 2025 ASPCA. All rights reserved.
            </p>
        </div>
    </footer>
    
</body>
</html>
```

### how_you_can_help.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Student Name: [YOUR NAME HERE] -->
    <!-- Date: [TODAY'S DATE] -->
    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ASPCA - How You Can Help</title>
    <link rel="stylesheet" href="../css/styles.css">
</head>
<body>
    
    <!-- NAVIGATION -->
    <nav class="main-nav">
        <div class="nav-logo">
            <a href="../index.html">
                <img src="../images/aspca-logo.png" alt="ASPCA Logo" class="logo-img">
            </a>
        </div>
        
        <ul class="nav-links">
            <li><a href="key_issues.html">Key Issues</a></li>
            <li><a href="our_response.html">Our Response</a></li>
            <li><a href="how_you_can_help.html">How You Can Help</a></li>
        </ul>
        
        <div class="nav-donate">
            <img src="../images/donate-button.png" alt="Donate" class="donate-img">
        </div>
    </nav>
    
    <!-- MAIN CONTENT -->
    <main>
        <section class="page-header">
            <h1>How You Can Help Animals</h1>
            <h3>Make a difference today<h3>
        </section>
        
        <section class="help-options">
            <div class="help-card">
                <h4>Adopt</h4>
                <p>Give a homeless animal a loving forever home. Visit your local shelter today!</p>
                <a href="#" class="help-link">Learn More</a>
            </div>
            
            <div class="help-card">
                <h4>Foster</h4>
                <p>Provide temporary care for animals in need. Fostering saves lives!</p>
                <a href="#" class="help-link">Learn More</a>
            </div>
            
            <div class="help-card">
                <h4>Donate</h4>
                <p>Your financial support helps us rescue and care for animals every day.</p>
                <a href="#" class="help-link">Learn More</a>
            </div>
            
            <div class="help-card">
                <h4>Volunteer</h4>
                <p>Join our team and make a hands-on difference in animals' lives.</p>
                <a href="#" class="help-link">Learn More</a>
            </div>
            
            <div class="help-card">
                <h4>Spread Awareness</h4>
                <p>Share our message on social media and help educate others about animal welfare.</p>
                <a href="#" class="help-link">Learn More</a>
            </div>
            
            <div class="help-card">
                <h4>Report Cruelty</h4>
                <p>If you witness animal abuse or neglect, report it immediately.</p>
                <a href="#" class="help-link">Learn More</a>
            </div>
        </section>
    </main>
    
    <!-- FOOTER -->
    <footer class="main-footer">
        <div class="footer-content">
            <p class="footer-info">
                The ASPCA is a national leader in animal rescue and protection, 
                working tirelessly to put an end to animal abuse and neglect.
            </p>
            
            <hr>
            
            <h3>Our Partners</h3>
            
            <div class="partnerships">
                <img src="../images/partner1.png" alt="Partner Organization 1">
                <img src="../images/partner2.png" alt="Partner Organization 2">
            </div>
            
            <p class="copyright">
                &copy; 2025 ASPCA. All rights reserved.
            </p>
        </div>
    </footer>
    
</body>
</html>
```

---

## Part 6: Responsive CSS (styles.css)

Now create your `styles.css` file in the `css` folder:

```css
/*
 * ASPCA Responsive Website - External Stylesheet
 * Student Name: [YOUR NAME]
 * Date: [TODAY'S DATE]
 * 
 * This stylesheet uses a MOBILE-FIRST approach
 * Base styles are for mobile devices (320px+)
 * Media queries add styles for larger screens
 */

/* ============================================
   RESET & BASE STYLES
   ============================================ */

/* Reset default browser styles for consistency */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* Makes width/height calculations easier */
}

/* Base body styles - MOBILE FIRST */
body {
    font-family: Calibri, Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #ffffff;
}

/* Make all images responsive by default */
img {
    max-width: 100%;
    height: auto;
    display: block;
}

/* Remove default list styles */
ul {
    list-style: none;
}

/* Remove default link underlines */
a {
    text-decoration: none;
    color: inherit;
}

/* ============================================
   NAVIGATION - MOBILE FIRST
   ============================================ */

.main-nav {
    background-color: #f8f8f8;
    padding: 1rem;
    text-align: center;
    border-bottom: 2px solid #ddd;
}

/* Logo styling */
.nav-logo {
    margin-bottom: 1rem;
}

.logo-img {
    max-width: 150px;
    margin: 0 auto; /* Center the logo */
}

/* Navigation links - stacked vertically on mobile */
.nav-links {
    margin-bottom: 1rem;
}

.nav-links li {
    margin: 0.5rem 0;
}

.nav-links a {
    color: #ff6600; /* Orange color */
    font-weight: bold;
    padding: 0.5rem;
    display: block;
    transition: background-color 0.3s ease;
}

.nav-links a:hover {
    background-color: #ffe6d5;
    border-radius: 5px;
}

/* Donate button */
.donate-img {
    max-width: 120px;
    margin: 0 auto;
    cursor: pointer;
}

/* ============================================
   MAIN CONTENT AREAS
   ============================================ */

main {
    padding: 1rem;
    max-width: 1200px;
    margin: 0 auto;
}

/* Hero section */
.hero {
    text-align: center;
    padding: 2rem 1rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 10px;
    margin-bottom: 2rem;
}

.hero h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

/* Page headers */
.page-header {
    text-align: center;
    margin-bottom: 2rem;
}

.page-header h1 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 0.5rem;
}

.page-header h3 {
    font-size: 1.2rem;
    color: #666;
    font-weight: normal;
}

/* ============================================
   SIGN-UP FORM - MOBILE FIRST
   ============================================ */

.signup-section {
    background-color: #f2f2f2;
    padding: 2rem 1rem;
    border-radius: 10px;
    margin-bottom: 2rem;
}

.signup-section h2 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: #333;
}

.signup-form {
    max-width: 500px;
    margin: 0 auto;
}

/* Form group - contains label and input */
.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #333;
}

/* Style all form inputs */
.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    font-family: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #ff6600;
    box-shadow: 0 0 5px rgba(255, 102, 0, 0.3);
}

/* Submit button */
.submit-btn {
    width: 100%;
    padding: 1rem;
    background-color: #ff6600;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.submit-btn:hover {
    background-color: #e55a00;
}

/* ============================================
   ISSUES GRID - KEY ISSUES PAGE
   ============================================ */

.issues-grid {
    display: grid;
    grid-template-columns: 1fr; /* One column on mobile */
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.issue-card {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 1.5rem;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.issue-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.issue-card img {
    border-radius: 8px;
    margin-bottom: 1rem;
}

.issue-card h4 {
    color: #ff6600;
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
}

.issue-card p {
    color: #666;
    line-height: 1.6;
}

/* ============================================
   RESPONSE CONTENT - OUR RESPONSE PAGE
   ============================================ */

.response-content {
    max-width: 800px;
    margin: 0 auto;
}

.response-content p {
    margin-bottom: 1.5rem;
    text-align: justify;
    color: #444;
}

.response-figure {
    margin: 2rem 0;
    text-align: center;
}

.response-figure img {
    border-radius: 10px;
    margin-bottom: 0.5rem;
}

.response-figure figcaption {
    font-style: italic;
    color: #666;
    font-size: 0.9rem;
}

/* ============================================
   HELP OPTIONS - HOW YOU CAN HELP PAGE
   ============================================ */

.help-options {
    display: grid;
    grid-template-columns: 1fr; /* One column on mobile */
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.help-card {
    background-color: #fff;
    border: 2px solid #ff6600;
    border-radius: 10px;
    padding: 1.5rem;
    text-align: center;
    transition: all 0.3s ease;
}

.help-card:hover {
    background-color: #fff5ed;
    transform: scale(1.05);
}

.help-card h4 {
    color: #ff6600;
    margin-bottom: 0.75rem;
    font-size: 1.4rem;
}

.help-card p {
    color: #666;
    margin-bottom: 1rem;
}

.help-link {
    display: inline-block;
    padding: 0.5rem 1.5rem;
    background-color: #ff6600;
    color: white;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s ease;
}

.help-link:hover {
    background-color: #e55a00;
}

/* ============================================
   FOOTER - MOBILE FIRST
   ============================================ */

.main-footer {
    background-color: #333;
    color: white;
    padding: 2rem 1rem;
    text-align: center;
    margin-top: 3rem;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
}

.footer-info {
    margin-bottom: 1.5rem;
    line-height: 1.8;
}

.main-footer hr {
    border: none;
    border-top: 1px solid #666;
    margin: 1.5rem 0;
}

.main-footer h3 {
    color: #ff6600;
    margin-bottom: 1rem;
}

/* Partnerships section */
.partnerships {
    background-color: #ff6600;
    padding: 1.5rem;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
}

.partnerships img {
    max-width: 120px;
    filter: brightness(0) invert(1); /* Makes images white */
}

.copyright {
    font-size: 0.9rem;
    color: #aaa;
}

/* ============================================
   TABLET STYLES - 768px and up
   ============================================ */

@media (min-width: 768px) {
    
    /* Navigation becomes horizontal on tablets */
    .main-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
    }
    
    .nav-logo {
        margin-bottom: 0;
    }
    
    .nav-links {
        display: flex;
        gap: 2rem;
        margin-bottom: 0;
    }
    
    .nav-links li {
        margin: 0;
    }
    
    .nav-links a {
        display: inline-block;
    }
    
    /* Issues grid - 2 columns on tablets */
    .issues-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    /* Help options - 2 columns on tablets */
    .help-options {
        grid-template-columns: repeat(2, 1fr);
    }
    
    /* Larger hero text on tablets */
    .hero h1 {
        font-size: 2.5rem;
    }
    
    /* Page header text larger on tablets */
    .page-header h1 {
        font-size: 2.2rem;
    }
    
    .page-header h3 {
        font-size: 1.4rem;
    }
    
    /* Form becomes wider with better spacing */
    .signup-section {
        padding: 3rem 2rem;
    }
    
    /* Footer partnerships with better spacing */
    .partnerships {
        gap: 3rem;
    }
}

/* ============================================
   DESKTOP STYLES - 1024px and up
   ============================================ */

@media (min-width: 1024px) {
    
    /* More padding for larger screens */
    main {
        padding: 2rem;
    }
    
    /* Hero section gets even larger */
    .hero {
        padding: 4rem 2rem;
    }
    
    .hero h1 {
        font-size: 3rem;
    }
    
    /* Issues grid - 2 columns for better layout */
    .issues-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }
    
    /* Help options - 3 columns on desktop */
    .help-options {
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }
    
    /* Navigation with more spacing */
    .main-nav {
        padding: 1.5rem 3rem;
    }
    
    .logo-img {
        max-width: 180px;
    }
    
    /* Form with better proportions */
    .signup-form {
        max-width: 600px;
    }
    
    /* Footer content spreads out more */
    .footer-content {
        padding: 0 2rem;
    }
}

/* ============================================
   LARGE DESKTOP STYLES - 1440px and up
   ============================================ */

@media (min-width: 1440px) {
    
    /* Maximum content width for very large screens */
    main {
        max-width: 1400px;
        padding: 3rem;
    }
    
    .hero h1 {
        font-size: 3.5rem;
    }
    
    /* Issues grid can show all 4 items in one row */
    .issues-grid {
        grid-template-columns: repeat(4, 1fr);
    }
    
    /* Navigation with maximum spacing */
    .main-nav {
        padding: 2rem 4rem;
    }
    
    .nav-links {
        gap: 3rem;
    }
    
    .logo-img {
        max-width: 200px;
    }
}

/* ============================================
   ACCESSIBILITY & PRINT STYLES
   ============================================ */

/* Ensure focus states are visible for keyboard navigation */
a:focus,
button:focus,
input:focus,
select:focus,
textarea:focus {
    outline: 3px solid #ff6600;
    outline-offset: 2px;
}

/* Print styles - simplify for printing */
@media print {
    .main-nav,
    .main-footer {
        display: none;
    }
    
    body {
        font-size: 12pt;
        color: black;
    }
    
    a {
        text-decoration: underline;
    }
}
```

---

## Part 7: Finding and Fixing HTML Errors

Your HTML files contain **intentional syntax errors** that you must find and fix. Use the [W3C HTML Validator](https://validator.w3.org/) to validate each page.

### Common Errors to Look For:

1. **Missing closing tags** (Look carefully!)
2. **Missing angle brackets** in tags
3. **Missing quotes** around attribute values
4. **Unclosed elements**
5. **Incorrect nesting** of elements

### How to Validate:

1. Go to https://validator.w3.org/
2. Choose "Validate by File Upload" or "Validate by Direct Input"
3. Upload or paste your HTML code
4. Review all errors and warnings
5. Fix each error in your code
6. Validate again until you get "Document checking completed. No errors or warnings to show."

### Errors in the Provided Code:

Here are the errors intentionally included (don't just fix these - use the validator!):

- **index.html**: Missing closing `>` on line with `<div class="form-group"`
- **index.html**: Missing closing `</li>` tag in navigation
- **key_issues.html**: Missing closing `>` in one of the image tags
- **how_you_can_help.html**: Incorrect closing tag - `<h3>` opened but different tag closes it

**Challenge:** Find ALL errors using the validator before looking at this list!

---

## Part 8: Testing Your Responsive Website

### Testing Checklist:

1. **Mobile Testing (320px - 767px)**
   - [ ] Navigation stacks vertically
   - [ ] Form is easy to fill out
   - [ ] All images scale properly
   - [ ] Text is readable without zooming
   - [ ] No horizontal scrolling

2. **Tablet Testing (768px - 1023px)**
   - [ ] Navigation becomes horizontal
   - [ ] Grid layouts show 2 columns
   - [ ] Content is well-spaced
   - [ ] Images are appropriately sized

3. **Desktop Testing (1024px+)**
   - [ ] Full navigation with proper spacing
   - [ ] Grid layouts show 3-4 columns
   - [ ] Content centered with max-width
   - [ ] All interactive elements work

### How to Test:

**Using Browser DevTools:**
1. Open your website in Chrome or Firefox
2. Press `F12` or right-click → "Inspect"
3. Click the device toolbar icon (phone/tablet icon)
4. Test these preset devices:
   - iPhone SE (375px)
   - iPad (768px)
   - Desktop (1920px)
5. Also test custom widths by dragging the viewport

**Real Device Testing:**
- Test on your actual phone if possible
- Ask friends/family to view on their devices

---

## Part 9: Submission Requirements

Before submitting, ensure you have:

✅ **All HTML files with:**
- Your name and date in comments at the top
- All HTML validation errors fixed
- Proper semantic HTML5 tags used
- All images linked correctly with alt text

✅ **CSS file with:**
- Mobile-first responsive design
- All four breakpoints implemented
- Clear, organized code with comments
- No inline or internal CSS in HTML files

✅ **Folder structure:**
```
assignment1/
├── index.html
├── css/
│   └── styles.css
├── html/
│   ├── key_issues.html
│   ├── our_response.html
│   └── how_you_can_help.html
└── images/
    └── (all images)
```

✅ **Testing completed:**
- Validated all HTML files (0 errors)
- Tested on mobile, tablet, and desktop sizes
- All links work correctly
- Form is functional

✅ **Screenshots taken:**
- Mobile view of each page
- Tablet view of each page
- Desktop view of each page
- Include these in a "screenshots" folder

---

## Part 10: Challenges for Advanced Students

Once you've completed the basic requirements, try these challenges:

### Challenge 1: CSS Animations (Intermediate)
Add smooth animations to enhance user experience:

```css
/* Add to your CSS file */

/* Fade in hero section */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.hero {
    animation: fadeIn 1s ease-in;
}

/* Bounce effect on form submission */
@keyframes bounce {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

.submit-btn:active {
    animation: bounce 0.3s;
}
```

### Challenge 2: CSS Grid Advanced Layout (Advanced)
Create a more complex grid layout for the key issues page:

```css
/* Advanced grid layout */
@media (min-width: 1024px) {
    .issues-grid {
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }
    
    /* Make first item span 2 columns */
    .issue-card:first-child {
        grid-column: span 2;
    }
}
```

### Challenge 3: Hamburger Menu (Advanced)
Create a mobile hamburger menu using only CSS (no JavaScript):

**Hint:** Use the checkbox hack with `:checked` pseudo-class

### Challenge 4: Form Validation Styling (Intermediate)
Add visual feedback for form validation:

```css
/* Valid input */
input:valid {
    border-color: #4CAF50;
}

/* Invalid input */
input:invalid:not(:placeholder-shown) {
    border-color: #f44336;
}

/* Add icons using ::after pseudo-element */
```

### Challenge 5: Dark Mode (Advanced)
Add a dark mode toggle using CSS custom properties:

```css
:root {
    --bg-color: #ffffff;
    --text-color: #333333;
    --accent-color: #ff6600;
}

[data-theme="dark"] {
    --bg-color: #1a1a1a;
    --text-color: #f0f0f0;
    --accent-color: #ff8833;
}

body {
    background-color: var(--bg-color);
    color: var(--text-color);
}
```

### Challenge 6: Accessibility Enhancements (Advanced)
Improve accessibility beyond the basics:

- Add skip navigation link
- Ensure all interactive elements are keyboard accessible
- Add ARIA labels where appropriate
- Test with a screen reader
- Ensure color contrast meets WCAG AA standards

### Challenge 7: CSS Custom Properties (Intermediate)
Refactor your CSS to use CSS variables for easier theming:

```css
:root {
    --primary-color: #ff6600;
    --secondary-color: #333;
    --spacing-unit: 1rem;
    --border-radius: 10px;
    --transition-speed: 0.3s;
}

/* Use throughout your CSS */
.submit-btn {
    background-color: var(--primary-color);
    padding: var(--spacing-unit);
    border-radius: var(--border-radius);
    transition: all var(--transition-speed);
}
```

### Challenge 8: Performance Optimization (Advanced)
Optimize your website for better performance:

- Use responsive images with `<picture>` element and `srcset`
- Minify your CSS
- Lazy load images below the fold
- Add preloading for critical assets

```html
<!-- Example responsive image -->
<picture>
    <source media="(min-width: 1024px)" srcset="image-large.jpg">
    <source media="(min-width: 768px)" srcset="image-medium.jpg">
    <img src="image-small.jpg" alt="Description" loading="lazy">
</picture>
```

### Challenge 9: CSS Flexbox Alternative (Intermediate)
Rebuild one of your grid layouts using Flexbox instead of CSS Grid. Compare the code and decide which you prefer for different layouts.

### Challenge 10: Multi-Page Form (Advanced)
Convert the single-page form into a multi-step form with progress indicator:

- Step 1: Personal information
- Step 2: Interest selection
- Step 3: Comments
- Step 4: Review and submit

Use CSS to show/hide different steps.

---

## Part 11: Common Mistakes to Avoid

### HTML Mistakes:
❌ Forgetting to close tags  
❌ Using incorrect relative paths for images/links  
❌ Missing alt text on images  
❌ Using deprecated HTML tags  
❌ Incorrect nesting (e.g., `<p>` inside `<p>`)  

### CSS Mistakes:
❌ Using fixed widths instead of percentages/max-width  
❌ Not testing on different screen sizes  
❌ Overusing `!important`  
❌ Not organizing CSS with comments  
❌ Using inline styles instead of external CSS  
❌ Forgetting to use mobile-first approach  

### Responsive Design Mistakes:
❌ Not including viewport meta tag  
❌ Using pixel values when rem/em are better  
❌ Not testing breakpoints  
❌ Making text too small on mobile  
❌ Creating horizontal scrolling on mobile  

---

## Part 12: Helpful Resources

### HTML Resources:
- [MDN HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [W3C HTML Validator](https://validator.w3.org/)
- [HTML5 Doctor](http://html5doctor.com/)

### CSS Resources:
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS-Tricks](https://css-tricks.com/)
- [Can I Use](https://caniuse.com/) - Browser compatibility
- [Flexbox Froggy](https://flexboxfroggy.com/) - Learn Flexbox
- [Grid Garden](https://cssgridgarden.com/) - Learn CSS Grid

### Responsive Design:
- [Responsive Design Patterns](https://responsivedesign.is/patterns/)
- [Media Queries Cheat Sheet](https://www.freecodecamp.org/news/css-media-queries-breakpoints-media-types-standard-resolutions-and-more/)

### Tools:
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [Color Picker](https://htmlcolorcodes.com/)
- [Google Fonts](https://fonts.google.com/)

---

## Grading Rubric

| Category | Points | Criteria |
|----------|--------|----------|
| **HTML Structure** | 20 | All required HTML elements present, properly nested, semantic tags used |
| **HTML Validation** | 15 | All files pass W3C validation with 0 errors |
| **CSS Styling** | 20 | External CSS file, proper selectors, well-organized code |
| **Responsive Design** | 25 | Mobile-first approach, all breakpoints work correctly, no horizontal scrolling |
| **Visual Accuracy** | 10 | Pages match reference screenshots across all device sizes |
| **Code Quality** | 5 | Clean, commented code, follows style guide, proper indentation |
| **File Structure** | 5 | Correct folder organization, proper file naming |
| **Total** | **100** | |

### Bonus Points (up to 10):
- Completing 2+ advanced challenges: +5 points
- Exceptional design improvements: +3 points
- Perfect accessibility implementation: +2 points

---

## Final Notes

**Remember:**
- Start with HTML structure first
- Validate your HTML before adding CSS
- Test on multiple screen sizes frequently
- Use browser DevTools to debug
- Ask for help if you get stuck!
- Have fun and be creative!

**Mobile-First Mindset:**
Think small screen first, then enhance for larger screens. This is the modern way to build responsive websites!

**Good Luck!** 🎉

You're building real-world skills that professional web developers use every day. Take your time, test thoroughly, and be proud of what you create!

---

**Assignment Created:** October 2025  
**Last Modified:** October 11, 2025  
**Version:** 2.0 - Responsive Edition