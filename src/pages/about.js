import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Ensure your styles are included

function About() {
  return (
    <div className="about-page">
      <h1 className="about-heading">Welcome to Whisk & Bloom</h1>
      <div className="about-content">
        <p>
          Whisk & Bloom is an AI-powered app that helps you discover recipes based on the ingredients you have on hand.
          Just input your ingredients, and the app will suggest a recipe you can try.
        </p>
        <p>
          You can also save your favorite recipes to your pantry for later use, ensuring you never forget the best recipes you've tried.
        </p>
        <p>
          This app was created by Mansoor as part of a semester project. He thought it would be both a helpful and interesting app to build.
        </p>
        <p>
          You can explore the source code and contribute to the project on GitHub:
        </p>
        <div className="github-links">
          <a
            href="https://github.com/conspirici"
            target="_blank"
            className="github-link"
          >
            Mansoor's GitHub Profile (@conspirici)
          </a>
          <br />
          <a
            href="https://github.com/conspirici/whisk-bloom"
            target="_blank"
            className="github-link"
          >
            Whisk & Bloom Repository
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
