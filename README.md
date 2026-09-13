🚀 Project Name: Dev Stack Builder

A modern and responsive technology stack builder for developers

Dev Stack Builder is a React-based web application where developers can explore popular 
web development technologies and build their own custom technology stack. 
Users can browse technologies, view their category, difficulty, rating, and 
add or remove technologies from their personal stack.

🛠️ Technologies Used
React.js — Building the user interface
Tailwind CSS — Styling and responsive design
React Toastify — Showing success and warning notifications
JavaScript (ES6+) — Application logic and functionality
JSON — Storing and loading technology data
React Icons — Icons used throughout the interface
Vite — Development and build tool

✨ Features
1. 🔎 Explore Technologies

Users can explore different technologies such as React, PostgreSQL, JavaScript, Node.js, Docker, and more. 
Each technology card displays its icon, category, description, difficulty level, rating, and badge.

2. 🧰 Build Your Own Stack

Users can add technologies to their personal Your Stack section. 
The same technology cannot be added twice, and users can remove individual 
technologies or clear the entire stack with the Remove All button.

3. 📱 Fully Responsive Design

The website is responsive across mobile, tablet, and desktop devices. 
It includes a responsive navbar, technology grid, stack sidebar, hero section, and footer.

🎨 Design Highlights
Shared Orange → Pink → Violet gradient theme
Sticky responsive navbar
Two-tone hero heading
Responsive technology card grid
Personal "Your Stack" sidebar
Loading state while fetching JSON data
Toast notifications for add, duplicate, remove, and remove-all actions
Clean and modern developer-focused UI

📂 Data Source

Technology information is stored in a separate JSON file and loaded dynamically into the application.

Each technology contains information such as:

ID
Name
Category
Description
Icon
Rating
Difficulty
Badge
📱 Responsive Layout

🔔 User Interactions

React Toastify is used to provide feedback when users:

Add a technology to their stack
Try to add the same technology twice
Remove a technology
Remove all technologies

📄 React Concepts Used

This project also demonstrates important React concepts such as:

Components
Props
State management with useState
Side effects with useEffect
Conditional rendering
List rendering with .map()
Unique key props
Parent-to-child data passing
Child-to-parent communication



React Questions Answers:

1.
JSX is a syntax that lets us write HTML-like code inside JavaScript.
React uses JSX to make UI code easier to read and write.

2.
Props are data passed from a parent component to a child component.
State is data managed inside a component that can change over time.

3.
useState is used to create and update data that can change in a component.
I used it to manage the application data and update the UI when the data changes.

4.
useEffect runs code after a component renders.
I used it to load the JSON data when the component first loads.

5.
React needs a unique key to identify each item in a list.
It helps React efficiently update, add, or remove items when the list changes.

6.
Conditional rendering means showing different UI depending on a condition.
For example, I showed an empty stack message when there were no items in the stack.

{stack.length === 0 && (
  <p>Your stack is empty.</p>
)}

7.
A parent passes data to a child using props.
A child can send data back by calling a function that the parent passes to it as a prop.

For example:

function Parent() {
  const handleClick = (data) => {
    console.log(data);
  };

  return <Child onSend={handleClick} />;
}

function Child({ onSend }) {
  return (
    <button onClick={() => onSend("Hello Parent")}>
      Send
    </button>
  );
}