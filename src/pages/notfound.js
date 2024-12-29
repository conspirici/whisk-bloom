import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-message">
        <h1>Oops! You're lost in the kitchen...</h1>
        <p>Lets get back to cooking!</p>
        <Link to="/" className="home-link">Go Back to the Kitchen (Home)</Link>
      </div>
    </div>
  );
};

export default NotFound;
