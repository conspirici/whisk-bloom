import Home from './pages/Home';
import Pantry from './pages/pantry';
import Navbar from './components/navbar';
import { useState } from 'react';
import './styles.css'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/notfound';
import About from './pages/about';

function App() {
  const [likedRecipes, setLikedRecipes] = useState([]);

  const Liked = (recipe) => {
    setLikedRecipes((prevRecipes) => {
      if (prevRecipes.includes(recipe)) {
        return prevRecipes.filter((likedRecipe) => likedRecipe !== recipe);
      } else {
        return [...prevRecipes, recipe];
      }
    });
  };

  const deleteLikedRecipe = (LikedRecipeToDelete) => {
    setLikedRecipes((prevRecipes) => prevRecipes.filter((likedRecipe) => likedRecipe !== LikedRecipeToDelete));
  }
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home Liked={Liked} likedRecipes={likedRecipes} />} />
          <Route path="/pantry" element={<Pantry likedRecipes={likedRecipes} deleteLikedRecipe={deleteLikedRecipe}/>} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
