```css
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
    
    /* Issues grid - 4 columns for better layout */
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

- **index.html**: Missing closing tag on line with `<div class="form-group"`
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