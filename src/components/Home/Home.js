import React from 'react';
import { Link } from 'react-router-dom';
import '../Home/Home.css';

const Home = () => {
  return (
    <div className="container home">
  <div className="overlay"></div>
    <div className="content">
      <h1>AI-Based BCI for Alzheimer's Disease Diagnosis</h1>
      <p>Welcome to the AI-based Brain-Computer Interface for Alzheimer's Disease Diagnosis website.</p>
      <p>Here, you can submit brain images along with your personal details for analysis.</p>
      <Link to="/forms" className="link">Submit Details</Link>
    </div>
</div>

  );
}

export default Home;
