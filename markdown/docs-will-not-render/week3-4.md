---

---

# Mobile-First Web Development Tutorial: Building a Recipe Card App

## Tutorial Overview
**Duration:** 4 days × 3 hours = 12 hours total  
**Project:** Recipe Card Web App  
**Approach:** Mobile-first responsive design  
**Topic:** Recipe cards (most popular for learning HTML/CSS due to real-world relevance and visual appeal)

---

## Why Recipe Cards?
Recipe cards are perfect for learning because they include:
- Text content (headings, paragraphs, lists)
- Images (learning responsive images)
- Clear visual hierarchy
- Real-world application
- Opportunities for creative styling

---

## Understanding Mobile-First & User Experience

**Mobile-First Philosophy:**
Start with the smallest screen design and progressively enhance for larger screens. Why?
- Majority of web traffic is mobile
- Forces you to prioritize essential content
- Easier to add features than remove them
- Better performance on mobile devices

**User Experience Across Devices:**
- **Mobile (320px+):** Single column, touch-friendly buttons, essential info only
- **Tablet (768px+):** Two-column layouts, more spacing, additional details
- **Desktop (1024px+):** Multi-column grids, hover effects, enhanced navigation
- **Large Desktop (1440px+):** Optimized spacing, larger images, maximum readability

---

# DAY 1: Foundation & Mobile Layout (3 hours)

## Hour 1: Project Setup & HTML Structure

### Step 1: Create Your Files
Create a folder called `recipe-app` with these files:
- `index.html`
- `styles.css`
- Create an `images` folder

### Step 2: Build the HTML Structure

**index.html:**
```html
<!-- Author: [YOUR NAME HERE] -->
<!-- Date: [TODAY'S DATE] -->
<!-- Project: Mobile-First Recipe Card App -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- The viewport meta tag is CRUCIAL for mobile-first design -->
    <!-- It tells the browser to match the screen's width and set initial zoom to 100% -->
    
    <title>Delicious Recipe App</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Main container for our app -->
    <div class="container">
        
        <!-- Header section -->
        <header class="header">
            <h1 class="header__title">My Recipe Collection</h1>
            <p class="header__subtitle">Delicious meals made simple</p>
        </header>

        <!-- Main content area -->
        <main class="main">
            
            <!-- Single recipe card - we'll start with one -->
            <article class="recipe-card">
                
                <!-- Recipe image with multiple resolutions for different devices -->
                <!-- The browser will choose the best image based on screen size -->
                <picture class="recipe-card__picture">
                    <source 
                        media="(min-width: 1024px)" 
                        srcset="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop">
                    <source 
                        media="(min-width: 768px)" 
                        srcset="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=450&fit=crop">
                    <img 
                        src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop" 
                        alt="Delicious vegetable salad bowl"
                        class="recipe-card__image">
                    <!-- Smallest image as default for mobile -->
                    <!-- Larger images load only on bigger screens = faster mobile performance -->
                </picture>

                <!-- Recipe content -->
                <div class="recipe-card__content">
                    
                    <!-- Title and quick info -->
                    <h2 class="recipe-card__title">Mediterranean Salad Bowl</h2>
                    
                    <div class="recipe-card__meta">
                        <span class="meta__item">⏱️ 15 min</span>
                        <span class="meta__item">👥 4 servings</span>
                        <span class="meta__item">🔥 Easy</span>
                    </div>

                    <!-- Short description -->
                    <p class="recipe-card__description">
                        Fresh and vibrant salad packed with Mediterranean flavors. 
                        Perfect for a quick lunch or light dinner.
                    </p>

                    <!-- Ingredients list -->
                    <div class="recipe-card__section">
                        <h3 class="section__title">Ingredients</h3>
                        <ul class="ingredients-list">
                            <li class="ingredients-list__item">2 cups mixed greens</li>
                            <li class="ingredients-list__item">1 cucumber, diced</li>
                            <li class="ingredients-list__item">1 cup cherry tomatoes</li>
                            <li class="ingredients-list__item">1/2 red onion, sliced</li>
                            <li class="ingredients-list__item">1/2 cup feta cheese</li>
                            <li class="ingredients-list__item">1/4 cup olives</li>
                            <li class="ingredients-list__item">3 tbsp olive oil</li>
                            <li class="ingredients-list__item">2 tbsp lemon juice</li>
                        </ul>
                    </div>

                    <!-- Instructions -->
                    <div class="recipe-card__section">
                        <h3 class="section__title">Instructions</h3>
                        <ol class="instructions-list">
                            <li class="instructions-list__item">Wash and chop all vegetables into bite-sized pieces.</li>
                            <li class="instructions-list__item">Combine greens, cucumber, tomatoes, and onion in a large bowl.</li>
                            <li class="instructions-list__item">Add feta cheese and olives on top.</li>
                            <li class="instructions-list__item">Drizzle with olive oil and lemon juice.</li>
                            <li class="instructions-list__item">Toss gently and serve immediately.</li>
                        </ol>
                    </div>

                    <!-- Action button -->
                    <button class="recipe-card__button">Save Recipe</button>
                </div>
            </article>

        </main>

        <!-- Footer -->
        <footer class="footer">
            <p class="footer__text">&copy; 2025 My Recipe Collection</p>
        </footer>

    </div>
</body>
</html>
```

## Hours 2-3: Mobile-First CSS Basics

**styles.css:**
```css
/* Author: [YOUR NAME HERE] */
/* Date: [TODAY'S DATE] */
/* Mobile-First Responsive Recipe App Styles */

/* ================================
   RESET & BASE STYLES
   ================================ */

/* Remove default margins and padding from all elements */
/* This gives us a clean slate to work with */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* Makes width calculations easier - padding/border included */
}

/* Base font size on root element */
/* Using 16px = 1rem makes math easier for responsive units */
html {
    font-size: 16px; /* 1rem = 16px */
}

/* Body styles - these are inherited by all elements */
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    /* System fonts load faster and look native on each device */
    line-height: 1.6; /* Improves readability, especially on mobile */
    color: #333; /* Dark gray instead of pure black for less eye strain */
    background-color: #f5f5f5; /* Light gray background */
}

/* ================================
   MOBILE STYLES (320px and up)
   Starting with the smallest screens first!
   ================================ */

/* Main container */
.container {
    /* Using relative units for flexibility */
    width: 100%; /* Full width on mobile */
    min-height: 100vh; /* Minimum full viewport height */
    display: flex;
    flex-direction: column; /* Stack items vertically - perfect for mobile */
}

/* ================================
   HEADER SECTION
   ================================ */

.header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* Gradients add visual interest without images */
    color: white;
    padding: 2rem 1rem; /* rem units scale with root font size */
    /* More padding top/bottom (2rem) than sides (1rem) for mobile */
    text-align: center;
}

.header__title {
    font-size: 1.75rem; /* 28px - large enough to read on small screens */
    font-weight: 700;
    margin-bottom: 0.5rem;
}

.header__subtitle {
    font-size: 1rem; /* 16px */
    opacity: 0.9; /* Slightly transparent for visual hierarchy */
}

/* ================================
   MAIN CONTENT AREA
   ================================ */

.main {
    flex: 1; /* Takes up remaining space, pushing footer down */
    padding: 1rem; /* Breathing room around content */
    /* On mobile, 1rem (16px) padding prevents content from touching edges */
}

/* ================================
   RECIPE CARD
   ================================ */

.recipe-card {
    background: white;
    border-radius: 0.75rem; /* 12px - rounded corners feel modern */
    overflow: hidden; /* Keeps child elements within rounded corners */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
    margin-bottom: 1.5rem;
    /* Cards "float" above the gray background */
}

/* Recipe image container */
.recipe-card__picture {
    display: block;
    width: 100%;
    /* Picture element is block-level to prevent spacing issues */
}

.recipe-card__image {
    width: 100%; /* Full width of card */
    height: auto; /* Maintains aspect ratio */
    display: block; /* Removes tiny gap below image */
    object-fit: cover; /* Ensures image covers area without distortion */
}

/* Card content area */
.recipe-card__content {
    padding: 1.5rem; /* Generous padding for readability */
}

/* Recipe title */
.recipe-card__title {
    font-size: 1.5rem; /* 24px */
    color: #2d3748; /* Darker color for emphasis */
    margin-bottom: 1rem;
    font-weight: 700;
}

/* Meta information (time, servings, difficulty) */
.recipe-card__meta {
    display: flex; /* Flexbox for horizontal layout */
    flex-wrap: wrap; /* Wraps to new line if needed on tiny screens */
    gap: 1rem; /* Space between items - cleaner than margins */
    margin-bottom: 1rem;
}

.meta__item {
    font-size: 0.875rem; /* 14px - slightly smaller for secondary info */
    color: #718096; /* Medium gray */
    /* Emojis provide visual cues without loading icon files */
}

/* Description text */
.recipe-card__description {
    font-size: 1rem;
    color: #4a5568;
    line-height: 1.7; /* Extra line height for comfortable reading */
    margin-bottom: 1.5rem;
}

/* Recipe sections (Ingredients, Instructions) */
.recipe-card__section {
    margin-bottom: 1.5rem;
}

.section__title {
    font-size: 1.25rem; /* 20px */
    color: #2d3748;
    margin-bottom: 0.75rem;
    font-weight: 600;
}

/* Ingredients list */
.ingredients-list {
    list-style: none; /* Remove default bullets */
    /* We'll add custom styling instead */
}

.ingredients-list__item {
    padding: 0.5rem 0; /* Vertical spacing between items */
    padding-left: 1.5rem; /* Space for custom bullet */
    position: relative; /* For positioning custom bullet */
    color: #4a5568;
}

/* Custom bullet point */
.ingredients-list__item::before {
    content: "•"; /* Bullet character */
    color: #667eea; /* Brand color */
    font-weight: bold;
    font-size: 1.2rem;
    position: absolute;
    left: 0;
}

/* Instructions list */
.instructions-list {
    counter-reset: step-counter; /* Reset counter for each list */
    list-style: none;
}

.instructions-list__item {
    padding: 0.75rem 0;
    padding-left: 2rem; /* Space for number */
    position: relative;
    color: #4a5568;
    counter-increment: step-counter; /* Increment for each item */
}

/* Custom numbered steps */
.instructions-list__item::before {
    content: counter(step-counter); /* Display number */
    position: absolute;
    left: 0;
    top: 0.75rem;
    background: #667eea;
    color: white;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%; /* Circle */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
}

/* Save Recipe button */
.recipe-card__button {
    width: 100%; /* Full width on mobile for easy tapping */
    padding: 1rem; /* Large touch target (min 44px recommended) */
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    /* Smooth animations for interaction feedback */
}

/* Button hover effect (works on desktop, ignored on touch devices) */
.recipe-card__button:hover {
    transform: translateY(-2px); /* Lift effect */
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

/* Button active/pressed state */
.recipe-card__button:active {
    transform: translateY(0); /* Return to normal position */
}

/* ================================
   FOOTER
   ================================ */

.footer {
    background: #2d3748;
    color: white;
    text-align: center;
    padding: 1.5rem 1rem;
    margin-top: auto; /* Pushes to bottom */
}

.footer__text {
    font-size: 0.875rem;
    opacity: 0.8;
}
```

### Day 1 Checkpoint:
✅ You now have a fully functional mobile recipe card  
✅ Content is readable and touch-friendly  
✅ Images load efficiently for mobile  
✅ Understanding of mobile-first base styles

---

# DAY 2: Tablet Optimization (3 hours)

## Adding Tablet Breakpoint (768px+)

Today we enhance the layout for tablets where we have more screen real estate.

**Add to styles.css (at the bottom):**

```css
/* ================================
   TABLET STYLES (768px and up)
   Medium-sized screens like iPads
   ================================ */

@media screen and (min-width: 768px) {
    /* Media query triggers when screen is 768px or wider */
    /* Only these styles apply - mobile styles are inherited */
    
    /* Increase base font size for better readability on larger screens */
    html {
        font-size: 18px; /* 1rem now = 18px */
        /* All rem-based sizes scale automatically! */
    }
    
    /* Container gets max width to prevent overly long lines */
    .container {
        max-width: 1400px; /* Content won't stretch beyond this */
        margin: 0 auto; /* Centers the container */
    }
    
    /* Header gets more padding on larger screens */
    .header {
        padding: 3rem 2rem;
    }
    
    .header__title {
        font-size: 2.5rem; /* Larger heading */
    }
    
    /* Main content area gets more padding */
    .main {
        padding: 2rem;
    }
    
    /* Recipe card now shows as a TWO-COLUMN layout */
    .recipe-card__content {
        display: flex;
        flex-wrap: wrap; /* Allows wrapping to new rows */
        gap: 2rem; /* Space between columns */
    }
    
    /* Title spans full width */
    .recipe-card__title {
        width: 100%;
        font-size: 2rem;
    }
    
    /* Meta info spans full width */
    .recipe-card__meta {
        width: 100%;
        gap: 1.5rem;
    }
    
    /* Description spans full width */
    .recipe-card__description {
        width: 100%;
    }
    
    /* Ingredients take LEFT half */
    .recipe-card__section:nth-of-type(1) {
        flex: 1; /* Grow to fill available space */
        min-width: 300px; /* Don't get too narrow */
    }
    
    /* Instructions take RIGHT half */
    .recipe-card__section:nth-of-type(2) {
        flex: 1;
        min-width: 300px;
    }
    
    /* Button stays full width but gets max-width */
    .recipe-card__button {
        width: 100%;
        max-width: 400px; /* Not too wide */
        margin: 0 auto; /* Center it */
    }
    
    /* Increase spacing in lists */
    .ingredients-list__item,
    .instructions-list__item {
        padding: 0.6rem 0;
        padding-left: 2rem;
    }
}
```

### Day 2 Activity (remaining time):
1. Test your page at 768px width (use browser DevTools)
2. Add a second recipe card to see the layout with multiple cards
3. Experiment with the two-column layout

**Add this second card in index.html inside `<main>` after the first card:**

```html
<!-- Second recipe card -->
<article class="recipe-card">
    <picture class="recipe-card__picture">
        <source 
            media="(min-width: 1024px)" 
            srcset="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop">
        <source 
            media="(min-width: 768px)" 
            srcset="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=450&fit=crop">
        <img 
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop" 
            alt="Healthy vegetable salad"
            class="recipe-card__image">
    </picture>

    <div class="recipe-card__content">
        <h2 class="recipe-card__title">Grilled Veggie Pasta</h2>
        
        <div class="recipe-card__meta">
            <span class="meta__item">⏱️ 25 min</span>
            <span class="meta__item">👥 3 servings</span>
            <span class="meta__item">🔥 Medium</span>
        </div>

        <p class="recipe-card__description">
            Colorful grilled vegetables tossed with pasta in a light garlic olive oil sauce.
        </p>

        <div class="recipe-card__section">
            <h3 class="section__title">Ingredients</h3>
            <ul class="ingredients-list">
                <li class="ingredients-list__item">300g pasta</li>
                <li class="ingredients-list__item">1 zucchini</li>
                <li class="ingredients-list__item">1 bell pepper</li>
                <li class="ingredients-list__item">1 eggplant</li>
                <li class="ingredients-list__item">3 cloves garlic</li>
                <li class="ingredients-list__item">4 tbsp olive oil</li>
            </ul>
        </div>

        <div class="recipe-card__section">
            <h3 class="section__title">Instructions</h3>
            <ol class="instructions-list">
                <li class="instructions-list__item">Cook pasta according to package directions.</li>
                <li class="instructions-list__item">Slice vegetables and grill until tender.</li>
                <li class="instructions-list__item">Sauté garlic in olive oil.</li>
                <li class="instructions-list__item">Toss pasta with vegetables and garlic oil.</li>
            </ol>
        </div>

        <button class="recipe-card__button">Save Recipe</button>
    </div>
</article>
```

---

# DAY 3: Desktop Layout & Grid (3 hours)

## Hour 1: Desktop Breakpoint (1024px+)

**Add to styles.css:**

```css
/* ================================
   DESKTOP STYLES (1024px and up)
   Standard laptop/desktop screens
   ================================ */

@media screen and (min-width: 1024px) {
    /* Now we have space for side-by-side cards! */
    
    html {
        font-size: 18px; /* Keep tablet size */
    }
    
    .header {
        padding: 4rem 3rem;
    }
    
    .header__title {
        font-size: 3rem; /* Even larger */
    }
    
    .header__subtitle {
        font-size: 1.25rem;
    }
    
    /* Main area becomes a GRID for recipe cards */
    .main {
        padding: 3rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
        /* Auto-fit: Creates as many columns as can fit */
        /* minmax(500px, 1fr): Each column is min 500px, max equal fraction */
        gap: 2rem; /* Space between grid items */
    }
    
    /* Individual cards adjust for grid layout */
    .recipe-card {
        display: flex;
        flex-direction: column; /* Vertical card layout */
        height: 100%; /* Fill grid cell */
    }
    
    /* Image section gets fixed height for consistency */
    .recipe-card__picture {
        height: 300px;
        overflow: hidden;
    }
    
    .recipe-card__image {
        height: 100%;
        object-fit: cover; /* Cover the area */
        transition: transform 0.3s ease;
        /* Smooth zoom effect on hover */
    }
    
    /* Hover effect on image - desktop only */
    .recipe-card:hover .recipe-card__image {
        transform: scale(1.05); /* Slight zoom */
    }
    
    /* Content takes remaining space */
    .recipe-card__content {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    
    /* Sections stay side-by-side but with better spacing */
    .recipe-card__section:nth-of-type(1),
    .recipe-card__section:nth-of-type(2) {
        flex: 1;
        min-width: 200px;
    }
    
    /* Button positioning for consistent cards */
    .recipe-card__button {
        margin-top: auto; /* Pushes to bottom of card */
        width: 100%;
        max-width: none; /* Remove tablet max-width */
    }
    
    /* Enhanced hover effects for desktop */
    .recipe-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .recipe-card:hover {
        transform: translateY(-8px); /* Lift entire card */
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    }
}
```

## Hours 2-3: Large Desktop & Polish (1440px+)

**Add to styles.css:**

```css
/* ================================
   LARGE DESKTOP STYLES (1440px and up)
   Large monitors and high-res displays
   ================================ */

@media screen and (min-width: 1440px) {
    /* Optimize for maximum space and readability */
    
    html {
        font-size: 20px; /* Larger base size for big screens */
        /* Everything scales proportionally! */
    }
    
    .container {
        max-width: 1600px; /* Prevent excessive width */
    }
    
    .header {
        padding: 5rem 4rem;
    }
    
    /* Grid can fit THREE columns on large screens */
    .main {
        grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
        /* Slightly smaller min-width allows for 3 columns */
        gap: 3rem;
        padding: 4rem;
    }
    
    /* Larger image height for better impact */
    .recipe-card__picture {
        height: 350px;
    }
    
    /* More generous padding in cards */
    .recipe-card__content {
        padding: 2rem;
    }
    
    /* Larger title on big screens */
    .recipe-card__title {
        font-size: 2.25rem;
    }
    
    /* More spacing in meta items */
    .recipe-card__meta {
        gap: 2rem;
    }
    
    .meta__item {
        font-size: 1rem; /* Slightly larger */
    }
}
```

### Day 3 Activity:
1. Test all four breakpoints (320px, 768px, 1024px, 1440px)
2. Add a third recipe card
3. Watch how the grid adapts

**Third recipe card template:**

```html
<!-- Third recipe card -->
<article class="recipe-card">
    <picture class="recipe-card__picture">
        <source 
            media="(min-width: 1024px)" 
            srcset="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop">
        <source 
            media="(min-width: 768px)" 
            srcset="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=450&fit=crop">
        <img 
            src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop" 
            alt="Delicious pancakes"
            class="recipe-card__image">
    </picture>

    <div class="recipe-card__content">
        <h2 class="recipe-card__title">Fluffy Pancakes</h2>
        
        <div class="recipe-card__meta">
            <span class="meta__item">⏱️ 20 min</span>
            <span class="meta__item">👥 4 servings</span>
            <span class="meta__item">🔥 Easy</span>
        </div>

        <p class="recipe-card__description">
            Light, fluffy pancakes perfect for weekend breakfast. Serve with maple syrup!
        </p>

        <div class="recipe-card__section">
            <h3 class="section__title">Ingredients</h3>
            <ul class="ingredients-list">
                <li class="ingredients-list__item">2 cups flour</li>
                <li class="ingredients-list__item">2 eggs</li>
                <li class="ingredients-list__item">1.5 cups milk</li>
                <li class="ingredients-list__item">2 tbsp sugar</li>
                <li class="ingredients-list__item">2 tsp baking powder</li>
                <li class="ingredients-list__item">1/2 tsp salt</li>
            </ul>
        </div>

        <div class="recipe-card__section">
            <h3 class="section__title">Instructions</h3>
            <ol class="instructions-list">
                <li class="instructions-list__item">Mix dry ingredients in a bowl.</li>
                <li class="instructions-list__item">Whisk eggs and milk together.</li>
                <li class="instructions-list__item">Combine wet and dry ingredients.</li>
                <li class="instructions-list__item">Cook on medium heat until bubbles form.</li>
                <li class="instructions-list__item">Flip and cook until golden.</li>
            </ol>
        </div>

        <button class="recipe-card__button">Save Recipe</button>
    </div>
</article>
```

---

# DAY 4: Finishing Touches & Testing (3 hours)

## Hour 1: Advanced CSS Enhancements

**Add these exciting features to styles.css:**

```css
/* ================================
   ADVANCED FEATURES & POLISH
   Adding the "wow" factor!
   ================================ */

/* Smooth scrolling for better UX */
html {
    scroll-behavior: smooth;
}

/* Loading animation for images */
.recipe-card__image {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
    /* Skeleton loading effect while image loads */
}

@keyframes loading {
    0% {
        background-position: 200% 0;
    }
    100% {
        background-position: -200% 0;
    }
}

/* Fade-in animation for cards */
.recipe-card {
    animation: fadeIn 0.6s ease-out;
}

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

/* Stagger animation for multiple cards */
.recipe-card:nth-child(1) {
    animation-delay: 0.1s;
}

.recipe-card:nth-child(2) {
    animation-delay: 0.2s;
}

.recipe-card:nth-child(3) {
    animation-delay: 0.3s;
}

/* Focus styles for accessibility */
.recipe-card__button:focus {
    outline: 3px solid #667eea;
    outline-offset: 2px;
}

/* Print styles - bonus! */
@media print {
    .header,
    .footer,
    .recipe-card__button {
        display: none; /* Hide non-essential elements */
    }
    
    .recipe-card {
        page-break-inside: avoid; /* Keep card on one page */
        box-shadow: none;
        border: 1px solid #ddd;
    }
}

/* Dark mode support - extra credit! */
@media (prefers-color-scheme: dark) {
    /* Only applies if user has dark mode enabled */
    
    body {
        background-color: #1a202c;
        color: #e2e8f0;
    }
    
    .recipe-card {
        background: #2d3748;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }
    
    .recipe-card__title {
        color: #f7fafc;
    }
    
    .section__title {
        color: #e2e8f0;
    }
    
    .

recipe-card__description,
    .ingredients-list__item,
    .instructions-list__item,
    .meta__item {
        color: #cbd5e0;
    }
    
    .footer {
        background: #2d3748;
    }
}

/* Reduced motion for accessibility */
/* Some users get motion sickness from animations */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
```

## Hour 2: Responsive Navigation & Search Bar

Let's add a search feature that adapts to screen size.

**Add to index.html (inside `<header>`, after the subtitle):**

```html
<!-- Search bar - adapts to all screen sizes -->
<div class="search-container">
    <input 
        type="search" 
        class="search-input" 
        placeholder="Search recipes..."
        aria-label="Search recipes">
    <button class="search-button" aria-label="Search">
        🔍
    </button>
</div>
```

**Add to styles.css (in the header section):**

```css
/* ================================
   SEARCH BAR - Mobile First
   ================================ */

.search-container {
    margin-top: 1.5rem;
    display: flex;
    max-width: 100%; /* Full width on mobile */
    gap: 0.5rem;
}

.search-input {
    flex: 1; /* Takes remaining space */
    padding: 0.75rem 1rem;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 0.5rem;
    background: rgba(255, 255, 255, 0.2);
    color: white;
    font-size: 1rem;
    transition: all 0.3s ease;
    /* Semi-transparent input looks modern on gradient background */
}

.search-input::placeholder {
    color: rgba(255, 255, 255, 0.7);
}

.search-input:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.6);
    /* Highlight on focus for better UX */
}

.search-button {
    padding: 0.75rem 1.5rem;
    background: rgba(255, 255, 255, 0.3);
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 0.5rem;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s ease;
    min-width: 3rem; /* Ensure touch-friendly size */
}

.search-button:hover {
    background: rgba(255, 255, 255, 0.4);
}

/* Tablet: Center and limit width */
@media screen and (min-width: 768px) {
    .search-container {
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
    }
}

/* Desktop: Slightly larger */
@media screen and (min-width: 1024px) {
    .search-container {
        max-width: 600px;
    }
    
    .search-input {
        font-size: 1.1rem;
        padding: 1rem 1.25rem;
    }
}
```

## Hour 3: Testing, Debugging & Documentation

### Complete Testing Checklist

**Create a new file: `TESTING-GUIDE.md`**

```markdown
<!-- Author: [YOUR NAME HERE] -->

# Recipe App Testing Guide

## Breakpoint Testing

Test your app at these exact widths:

### 1. Mobile (320px - 767px)
- [ ] Single column layout
- [ ] Full-width cards
- [ ] Touch-friendly buttons (min 44px height)
- [ ] Readable text without zooming
- [ ] Images load smallest version
- [ ] Search bar spans full width

### 2. Tablet (768px - 1023px)
- [ ] Two-column card content
- [ ] Ingredients and instructions side-by-side
- [ ] Increased font sizes
- [ ] Medium-resolution images load
- [ ] Centered search bar

### 3. Desktop (1024px - 1439px)
- [ ] Grid layout (2 columns)
- [ ] Card hover effects work
- [ ] Image zoom on hover
- [ ] Large images load
- [ ] Proper spacing between cards

### 4. Large Desktop (1440px+)
- [ ] Grid layout (up to 3 columns)
- [ ] Maximum width constraint (1600px)
- [ ] Optimal spacing
- [ ] All animations smooth
- [ ] Content doesn't stretch too wide

## Browser Testing
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (if available)
- [ ] Mobile browsers (Chrome/Safari on phone)

## Accessibility Testing
- [ ] Tab through all interactive elements
- [ ] Focus indicators visible
- [ ] Screen reader can read all content
- [ ] Color contrast is sufficient
- [ ] Reduced motion setting respected

## Performance Testing
- [ ] Images load progressively (small first)
- [ ] No layout shift during load
- [ ] Smooth scrolling
- [ ] Animations don't lag
```

### Final Polish - Add Utility Classes

**Add to styles.css (at the end):**

```css
/* ================================
   UTILITY CLASSES
   Reusable helpers for common patterns
   ================================ */

/* Spacing utilities using relative units */
.mt-1 { margin-top: 1rem; }
.mt-2 { margin-top: 2rem; }
.mb-1 { margin-bottom: 1rem; }
.mb-2 { margin-bottom: 2rem; }

/* Text alignment */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

/* Display utilities */
.hidden { display: none; }
.block { display: block; }
.flex { display: flex; }

/* Responsive visibility */
.mobile-only { display: block; }
.tablet-up { display: none; }
.desktop-up { display: none; }

@media screen and (min-width: 768px) {
    .mobile-only { display: none; }
    .tablet-up { display: block; }
}

@media screen and (min-width: 1024px) {
    .desktop-up { display: block; }
}

/* Container width utilities */
.container-sm { max-width: 640px; margin: 0 auto; }
.container-md { max-width: 768px; margin: 0 auto; }
.container-lg { max-width: 1024px; margin: 0 auto; }
```

### Create a README for Your Project

**Create file: `README.md`**

```markdown
<!-- Author: [YOUR NAME HERE] -->

# Mobile-First Recipe Card App

A fully responsive recipe card application built with HTML5 and CSS3, demonstrating mobile-first design principles.

## 🎯 Learning Objectives

- ✅ Mobile-first responsive design
- ✅ CSS Flexbox and Grid layouts
- ✅ Relative units (rem, %, vh)
- ✅ Media queries (4 breakpoints)
- ✅ Responsive images (<picture> element)
- ✅ Modern CSS features (gradients, animations, transitions)
- ✅ Accessibility best practices

## 📱 Breakpoints

| Size | Width | Layout |
|------|-------|--------|
| Mobile | 320px - 767px | Single column, stacked cards |
| Tablet | 768px - 1023px | Two-column card content |
| Desktop | 1024px - 1439px | Grid with 2 card columns |
| Large Desktop | 1440px+ | Grid with up to 3 columns |

## 🖼️ Responsive Images

The app uses the `<picture>` element to serve different image resolutions:
- **Mobile**: 400x300px (smaller file size, faster loading)
- **Tablet**: 600x450px (medium quality)
- **Desktop**: 800x600px (full quality)

This ensures optimal performance on every device!

## 🎨 Features

- Gradient header with search functionality
- Animated recipe cards with hover effects
- Custom-styled ingredient bullets
- Numbered instruction steps
- Dark mode support (respects system preference)
- Print-friendly styles
- Accessibility features (keyboard navigation, screen reader support)
- Smooth animations (with reduced-motion support)

## 🚀 How to Use

1. Open `index.html` in your browser
2. Resize the browser window to see responsive design in action
3. Use DevTools to test specific device sizes
4. Try the search bar (visual only - no JavaScript needed for this tutorial)

## 📚 Key Concepts Learned

### Mobile-First Approach
Start with mobile styles, then use `@media (min-width)` to enhance for larger screens.

### Flexbox for Components
Used for header, card content, meta info, and button layouts.

### Grid for Page Layout
Desktop+ uses CSS Grid to create responsive card columns.

### Relative Units
- `rem` for most sizing (scales with root font size)
- `%` for fluid widths
- `vh` for full-height layouts
- No fixed `px` values except for borders and shadows

## 🔧 Browser Support

Works in all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## 📖 Next Steps

To expand this project, you could add:
- JavaScript for search functionality
- Filter by difficulty/time
- Recipe favorites (localStorage)
- Add recipe form
- Recipe categories/tags
- Sorting options
```

---

# Complete Responsive Breakpoint Summary

Let me create a visual reference showing exactly what changes at each breakpoint:

**Create file: `BREAKPOINT-REFERENCE.md`**

```markdown
<!-- Author: [YOUR NAME HERE] -->

# Breakpoint Reference Guide

## 📱 Mobile (320px - 767px)
**Base Styles - The Foundation**

### Layout
- Single column, vertical stacking
- Full-width cards (100%)
- Padding: 1rem (16px)

### Typography
- Base font: 16px (1rem)
- Title: 1.75rem (28px)
- Content: 1rem (16px)

### Recipe Cards
- Stacked content (all vertical)
- Ingredients: Full width
- Instructions: Full width
- Button: Full width

### Images
- 400x300px resolution
- Full card width
- Auto height (maintains aspect ratio)

### Search
- Full width with minimal padding
- Stacked on small screens if needed

---

## 📱 Tablet (768px - 1023px)
**Enhanced Layout with More Space**

### Layout Changes
- Max-width container: 1400px
- Padding: 2rem (36px with 18px base)
- Two-column card content

### Typography
- Base font: 18px (1rem)
- Title: 2.5rem (45px)
- Content scales proportionally

### Recipe Cards
- **Major Change**: Content uses flexbox
- Ingredients: Left column (flex: 1)
- Instructions: Right column (flex: 1)
- Button: Centered, max-width 400px

### Images
- 600x450px resolution
- Better quality for larger screens

### Search
- Max-width: 500px
- Centered in header

---

## 💻 Desktop (1024px - 1439px)
**Grid Layout Introduction**

### Layout Changes
- **Grid activated**: `grid-template-columns: repeat(auto-fit, minmax(500px, 1fr))`
- 2 cards per row (typically)
- Gap: 2rem between cards
- Padding: 3rem

### Typography
- Base font: 18px (same as tablet)
- Title: 3rem (54px)
- Larger subtitle: 1.25rem

### Recipe Cards
- Cards in grid cells
- Fixed image height: 300px
- **Hover effects enabled**:
  - Card lifts up (translateY)
  - Image zooms (scale: 1.05)
  - Enhanced shadow

### Images
- 800x600px resolution
- Height: 300px (object-fit: cover)
- Zoom animation on hover

### Search
- Max-width: 600px
- Larger input padding

---

## 🖥️ Large Desktop (1440px+)
**Optimized for Maximum Space**

### Layout Changes
- Grid: Can fit 3 columns
- Min column width: 450px (allows 3 across)
- Gap: 3rem
- Padding: 4rem
- Max-width: 1600px (prevents excessive stretch)

### Typography
- Base font: 20px (1rem)
- Title: 3rem (now 60px due to larger base)
- All text scales up automatically

### Recipe Cards
- Image height: 350px (taller for impact)
- Content padding: 2rem
- Better visual hierarchy

### Images
- Full 800x600px displayed
- More prominent in layout

---

## 🎯 Visual Comparison

```
MOBILE (320px)          TABLET (768px)         DESKTOP (1024px)        LARGE (1440px)
┌────────────┐         ┌──────────────────┐   ┌─────────┬─────────┐  ┌──────┬──────┬──────┐
│   HEADER   │         │     HEADER       │   │      HEADER       │  │      HEADER        │
├────────────┤         ├──────────────────┤   ├─────────┬─────────┤  ├──────┬──────┬──────┤
│  [IMAGE]   │         │    [IMAGE]       │   │ [IMAGE] │ [IMAGE] │  │[IMG] │[IMG] │[IMG] │
│            │         │                  │   │         │         │  │      │      │      │
│   Title    │         │     Title        │   │  Card1  │  Card2  │  │ C1   │ C2   │ C3   │
│            │         │                  │   │         │         │  │      │      │      │
│ Ingredients│         │  Ingr. │ Instr. │   ├─────────┼─────────┤  ├──────┼──────┼──────┤
│            │         │  (Left)│ (Right)│   │ [IMAGE] │ [IMAGE] │  │[IMG] │[IMG] │[IMG] │
│Instructions│         │        │        │   │         │         │  │      │      │      │
│            │         │     [Button]     │   │  Card3  │  Card4  │  │ C4   │ C5   │ C6   │
│  [Button]  │         └──────────────────┘   └─────────┴─────────┘  └──────┴──────┴──────┘
└────────────┘         
  Stacked              Two-col content        Grid 2-columns        Grid 3-columns
```

## 🔑 Key Breakpoint Decision Points

### Why 768px for Tablet?
- iPad portrait width
- Common tablet breakpoint
- Enough space for two-column content
- Standard industry practice

### Why 1024px for Desktop?
- iPad landscape width
- Most laptop minimum width
- Room for grid layouts
- Hover interactions make sense

### Why 1440px for Large Desktop?
- Common HD display width
- Can fit 3 cards comfortably
- Prevents over-stretching
- Optimal reading experience

## 🎨 CSS Unit Strategy

### rem (Root EM)
- **Use for**: Font sizes, padding, margins, gaps
- **Why**: Scales with base font size
- **Example**: When base is 16px, 2rem = 32px
- **Benefit**: Change one value, everything scales!

### % (Percentage)
- **Use for**: Widths, flexible spacing
- **Why**: Relative to parent element
- **Example**: width: 100% fills parent
- **Benefit**: Truly fluid layouts

### vh/vw (Viewport units)
- **Use for**: Full-height sections
- **Why**: Relative to viewport
- **Example**: min-height: 100vh = full screen height
- **Benefit**: Responsive to actual screen size

### When to Use px
- **Only for**: Borders, box-shadows, small fixed values
- **Example**: border: 1px solid, box-shadow: 0 2px 8px
- **Why**: These shouldn't scale with fonts

## ✨ Progressive Enhancement Examples

### Feature: Image Quality
```
Mobile:    400x300 (Low bandwidth, small screen)
Tablet:    600x450 (Medium quality)
Desktop:   800x600 (Full quality)
```

### Feature: Layout Complexity
```
Mobile:    Simple stack (easy to scroll)
Tablet:    Two columns (more info visible)
Desktop:   Grid + hover (rich interactions)
```

### Feature: Typography
```
Mobile:    16px base (readable on small screen)
Tablet:    18px base (comfortable on medium)
Desktop:   18-20px base (optimal for reading)
```
```

---

# Final Project Structure

Your completed project should have this structure:

```
recipe-app/
├── index.html                 (Main HTML file with 3 recipe cards)
├── styles.css                 (All responsive styles)
├── README.md                  (Project documentation)
├── TESTING-GUIDE.md          (Testing checklist)
├── BREAKPOINT-REFERENCE.md   (Detailed breakpoint guide)
└── images/                    (Optional: for local images)
```

---

# 🎓 Final Day Summary & Best Practices

## What You've Learned

### 1. Mobile-First Methodology ✅
- Start small, enhance larger
- Better performance on mobile
- Forced content prioritization

### 2. Responsive Design Patterns ✅
- Fluid grids with Flexbox and Grid
- Flexible images with `<picture>`
- Relative units (rem, %, vh)
- Media queries (4 breakpoints)

### 3. Modern CSS Techniques ✅
- CSS Grid for page layouts
- Flexbox for components
- Custom properties for theming
- Animations and transitions
- Accessibility features

### 4. User Experience Principles ✅
- Touch-friendly tap targets (44px min)
- Readable text without zooming
- Fast-loading images
- Smooth interactions
- Accessible to all users

## 🚀 Deployment Checklist

Before sharing your app:

- [ ] Test all 4 breakpoints
- [ ] Check all 3 recipe cards display correctly
- [ ] Verify images load properly
- [ ] Test with browser DevTools
- [ ] Check on actual mobile device if possible
- [ ] Validate HTML (https://validator.w3.org/)
- [ ] Verify accessibility with keyboard navigation
- [ ] Test in multiple browsers

## 💡 Extension Ideas

Want to keep learning? Try adding:

1. **More interactivity (JavaScript)**
   - Working search functionality
   - Filter by cooking time/difficulty
   - Save favorites to localStorage

2. **More content**
   - 10+ recipe cards
   - Categories (breakfast, lunch, dinner)
   - Nutritional information

3. **Advanced CSS**
   - CSS animations for page transitions
   - SVG icons instead of emojis
   - Custom fonts from Google Fonts

4. **Accessibility improvements**
   - Skip navigation link
   - ARIA labels for screen readers
   - High contrast mode

## 📚 Resources for Continued Learning

- **MDN Web Docs**: https://developer.mozilla.org
- **CSS-Tricks**: https://css-tricks.com
- **Can I Use**: https://caniuse.com (browser support)
- **A11y Project**: https://www.a11yproject.com (accessibility)

---

## Congratulations! 🎉

You've built a fully responsive, mobile-first web application using only HTML and CSS. You now understand:

- How to structure semantic HTML
- How to style with mobile-first CSS
- How responsive breakpoints work
- How to use Flexbox and Grid
- How to optimize images for different devices
- How to create accessible, user-friendly interfaces

This foundation will serve you well as you continue your web development journey!

---

**Remember to add your name as the author in all files!**