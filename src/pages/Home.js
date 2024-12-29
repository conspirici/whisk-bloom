import { useState } from 'react';
import axios from 'axios';
import Input from '../components/input';
import Chip from '../components/chip';
import Recipe from '../components/recipe';
import '../styles.css'; 

function Home({ Liked, likedRecipes}){
    const [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe] = useState('');
    
  
    const addIngredient = (newIngredient) => {
      setIngredients([...ingredients, newIngredient]);
    };
  
    const deleteChip = (ingredientToDelete) => {
      setIngredients(ingredients.filter((ingredient) => ingredient !== ingredientToDelete));
    };
  
    const deleteRecipe = () => {
      setRecipe('')
  
    }

    
  
   

    const findRecipe = async () => {
      if (ingredients.length === 0) {
        return;
      }
      const prompt = `Find a recipe that uses the ingredients: ${ingredients.join()}`;
  
      try {
        const response = await axios.post(
          'https://api.groq.com/openai/v1/chat/completions',
          {
            model: 'llama3-8b-8192',
            messages: [
              {
                role: 'system',
                content: 'Write a complete recipe that matches most with the entered ingredients, step-by-step instructions, dont write anything else, just return the recipe, firstline will always be recipe name',
              },
              {
                role: 'user',
                content: prompt,
              },
            ],
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer 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`, 
            },
          }
        );
        console.log(response);
        setRecipe(response.data.choices[0].message.content);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    return(
        <div className="home"> 
        <h1 className="app-heading">Generate Recipe with AI</h1>
      <Input onInput={addIngredient} />
      
      <div className="chips-container">
        {ingredients.map((ingredient, index) => (
          <Chip key={index} ingredient={ingredient} Delete={deleteChip} />
        ))}
      </div>

      <button className="find-recipe-btn" onClick={findRecipe}>
        Find Recipe
      </button>

      <div>
        {recipe && <Recipe recipe={recipe} Delete={deleteRecipe} Liked={Liked} likedRecipes={likedRecipes} />}
      </div>

      {ingredients.length === 0 && <p>Enter ingredients</p>}
      </div>
    )
}

export default Home;