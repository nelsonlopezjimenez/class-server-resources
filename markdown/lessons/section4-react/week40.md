---
title: "Introduction to React - Components, JSX, and State Management"
description: "Week 2 - React fundamentals: understanding components, JSX syntax, props and state management, hooks (useState, useEffect), component lifecycle, event handling, conditional rendering, and list rendering. Assignments: build a counter app, create a todo list component, develop a user profile card with props"
week: 40
---

<h1 id="day1">Welcome to React Development!</h1>

<h2 id="table-of-contents">📚 Table of Contents</h2>

- [Course Overview](#overview)
- [Prerequisites](#prerequisites)
- [Development Environment](#environment)
- [React Resources](#resources)
- [Day 1](#day1)
- [Day 2](#day2)
- [Day 3](#day3)
- [Day 4](#day4)
- 🧪 [Assignments](#assignments)
- [Next Week Preview](#nextweek)

<br id="overview">

## Course Overview

This week introduces you to React, a powerful JavaScript library for building user interfaces. You'll learn the foundational concepts that make React one of the most popular frontend frameworks, including components, JSX, state management, and the modern hooks API.

<br id="prerequisites">

## Prerequisites

Before starting this React course, you should be comfortable with:
- HTML and CSS fundamentals
- JavaScript basics (variables, functions, arrays, objects)
- ES6+ features (arrow functions, destructuring, template literals)
- Basic understanding of the DOM
- Node.js and npm installed on your machine

<br id="environment">

## Development Environment Setup

**Required Tools:**
- Node.js (v16 or higher) and npm
- Code editor (VS Code recommended)
- Modern web browser (Chrome, Firefox, or Edge)
- React Developer Tools browser extension

**Creating Your First React App:**
```bash
npm create vite@latest
cd my-first-react-app
npm start
```

<br id="resources">

## React Resources

Official Documentation:

React Official Docs: react.dev
Create React App Documentation
React Developer Tools

[↑ Back to Top](#table-of-contents)

## Additional Learning:

MDN Web Docs for JavaScript review
CSS-Tricks for styling techniques
Stack Overflow for community support


## Daily Activities

<br id="day1">

## Day 1: React Fundamentals and Components
### What is React?

React is a declarative, component-based JavaScript library for building user interfaces. Created by Facebook, it allows developers to create reusable UI components that manage their own state.
Key Concepts Covered:

Understanding the Virtual DOM and how React optimizes rendering
Component-based architecture and thinking in React
Functional components vs. class components (focus on functional)
Creating your first React component
Project structure in a React application
The role of index.js and App.js

### Introduction to JSX:
JSX (JavaScript XML) is a syntax extension that allows you to write HTML-like code in JavaScript. It makes React components more readable and expressive.
JSX Rules:

Must return a single parent element (use fragments <>...</> if needed)
Use className instead of class
Use camelCase for attributes (onClick, onChange)
JavaScript expressions go inside curly braces {}
Self-closing tags must include forward slash <img />

Basic Component Example:
```jsx
jsxfunction Welcome() {
  const name = "React Developer";
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Welcome to your first React component.</p>
    </div>
  );
}
```
### Activities:

Set up Create React App environment
Explore the default project structure
Create your first functional component
Practice JSX syntax with expressions and attributes
Learn to import and export components

<br id="day2">

## Day 2: Props - Passing Data Between Components
###  Understanding Props:
Props (properties) are how components communicate. They allow you to pass data from parent components to child components, making your code modular and reusable.
Key Concepts:

### Props are read-only (immutable)
Passing multiple props to components
Destructuring props for cleaner code
Default props and prop validation
Children prop for nested content
Props vs. state (props are passed down, state is internal)

Props Examples:
```jsx
jsx// Parent component passing props
function App() {
  return (
    <UserCard 
      name="Jane Doe" 
      age={28} 
      email="jane@example.com"
      isActive={true}
    />
  );
}

// Child component receiving props
function UserCard({ name, age, email, isActive }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
    </div>
  );
}
```
[↑ Back to Top](#table-of-contents)

### Component Composition:
Learn how to build complex UIs by composing smaller, reusable components that accept props.
Activities:

### Create reusable card components with props
Practice prop destructuring
Build a component hierarchy (parent-child relationships)
Pass different data types as props (strings, numbers, booleans, arrays, objects)
Use the children prop for flexible component composition

<br id="day3">

## Day 3: State Management with useState Hook
### Introduction to State:
State is data that changes over time within a component. Unlike props, state is managed internally and can be modified by the component itself.
The useState Hook:
useState is a React Hook that lets you add state to functional components. It returns an array with two elements: the current state value and a function to update it.
useState Syntax:
```jsx
jsximport { useState } from 'react';

function Counter() {
  // Declare state variable
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}
```
### Key Concepts:

Declaring state with initial values
Updating state with setter functions
State updates are asynchronous
Never modify state directly (always use setter function)
Multiple state variables in one component
State with objects and arrays (immutability)

Event Handling in React:

onClick, onChange, onSubmit events
Preventing default behavior
Handling form inputs with state

Common State Patterns:

```jsx
jsx// Form input state
const [inputValue, setInputValue] = useState('');

// Toggle state
const [isVisible, setIsVisible] = useState(false);

// Array state (todo list)
const [todos, setTodos] = useState([]);

// Object state (form data)
const [formData, setFormData] = useState({
  username: '',
  email: ''
});
```
[↑ Back to Top](#table-of-contents)

## Activities:

1. Build a counter application
1. Create a toggle button component
1. Implement form input handling with controlled components
1. Practice updating arrays and objects in state
1. Handle multiple state variables

<br id="day4">

## Day 4: Advanced Concepts - Conditional Rendering, Lists, and useEffect

### Conditional Rendering:
Display different content based on conditions using JavaScript logical operators and ternary expressions.
Techniques:
```jsx
jsx// If/else with variables
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please sign in.</h1>;
}

// Ternary operator
function Status({ isActive }) {
  return (
    <div>
      {isActive ? <span>🟢 Online</span> : <span>🔴 Offline</span>}
    </div>
  );
}

// Logical && operator
function Notification({ hasMessages, messageCount }) {
  return (
    <div>
      {hasMessages && <p>You have {messageCount} new messages</p>}
    </div>
  );
}
```

### Rendering Lists:
Use the map() method to render arrays of data. Always include a unique key prop for each list item.
```jsx
jsxfunction TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: false }
  ]);
  
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
        </li>
      ))}
    </ul>
  );
}
```

### Introduction to useEffect Hook:
useEffect lets you perform side effects in functional components (data fetching, subscriptions, DOM manipulation).
useEffect Basics:
```jsx
jsximport { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
    
    // Cleanup function
    return () => clearInterval(interval);
  }, []); // Empty dependency array - runs once
  
  return <p>Seconds: {seconds}</p>;
}
```
[↑ Back to Top](#table-of-contents)

### useEffect Dependency Array:

[] - Runs once after initial render
[variable] - Runs when variable changes
No array - Runs after every render

### Activities:

1. Practice conditional rendering patterns
1. Build a dynamic list component with filtering
1. Implement a todo list with add/remove functionality
1. Create a simple timer using useEffect
1. Experiment with different useEffect dependency patterns

<br id="assignments">

## 🧪 Weekly Assignments
### Assignment 1: Interactive Counter App
Build a counter application with the following features:

1. Increment, decrement, and reset buttons
1. Display current count
1. Add a feature to increment/decrement by custom amounts
1. Style your component with CSS
1. Due: End of Day 3

### Assignment 2: Todo List Component
Create a functional todo list that includes:

1. Input field to add new todos
1. Display list of todos
1. Mark todos as complete (toggle)
1. Delete todos
1. Show total number of active todos
1. Due: End of Day 4

### Assignment 3: User Profile Card with Props
Design a reusable user profile card component:

1. Accept props for name, avatar, bio, location, and social links
1. Display information in an attractive card layout
1. Create at least 3 different user cards in your App component
1. Make it responsive
1. Due: End of week

### Bonus Challenge: Color Theme Switcher
Build a button that toggles between light and dark themes:

1. Use useState to manage theme state
1. Apply different CSS classes based on state
1. Store preference in localStorage using useEffect

<br id="nextweek">

## Next Week Preview

## Week 2: Advanced React Patterns

1. Component lifecycle in depth
1. Custom hooks creation
1. Context API for global state
1. React Router for navigation
1. Form validation techniques
1. API integration and data fetching
1. Error boundaries and error handling

Prepare for next week by:

Reviewing ES6+ array methods (filter, reduce, find)
Understanding async/await and Promises
Exploring the Fetch API
Completing all assignments from this week


Happy Coding! 🚀
Remember: React has a learning curve, but practice makes perfect. Don't hesitate to experiment, break things, and learn from errors. The React community is vast and supportive—use it!

[↑ Back to Top](#table-of-contents)