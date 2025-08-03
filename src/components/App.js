import React from "react";

// Navbar Component (already provided)
function Navbar() {
  return (
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
    </nav>
  );
}

// Home Component (already provided)
function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

// About Component (YOU NEED TO CREATE THIS)
function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

// App Component - Modify this return statement
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;