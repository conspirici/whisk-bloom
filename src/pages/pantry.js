import ReactMarkdown from 'react-markdown';
import {X, ChevronDown } from 'lucide-react'
import {useState} from 'react';
function Pantry({likedRecipes,deleteLikedRecipe}){
    const [openRecipeIndex, setOpenRecipeIndex] = useState(null);
    const toggleRecipeDisplay = (index) => {
        setOpenRecipeIndex(openRecipeIndex === index ? null : index);
    }
    return(
        <div className="pantry">
            <h1 className="pantry__title">Pantry</h1>
            <div className="pantry__items">
                {likedRecipes.map((recipe, index) => {
                    const title = recipe.split('\n')[0];
                    const isOpen = openRecipeIndex === index;
                    return(<div className='pantry-item'>
                        <h2 className='pantry__item__title'>{title}</h2>
                        <X className='delete-icon' onClick={() => deleteLikedRecipe(recipe)} />
                        <ChevronDown className="increase-icon" onClick={() => toggleRecipeDisplay(index)}/>
                        {isOpen && (
                        <div className="full-recipe">
                         <ReactMarkdown>{recipe}</ReactMarkdown>
                        </div>
              )}
                        </div>  
                    )
                })}
            </div>
        </div>
    )
}

export default Pantry;