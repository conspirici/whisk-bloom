import ReactMarkdown from 'react-markdown';
import {X, Heart} from 'lucide-react'
function Recipe({ recipe, Delete, Liked}) {
  return (
    <div className="recipe-container">
      <X className="delete-icon" onClick={Delete } />
      <Heart className={`heart-icon ${Liked ? 'liked' : ''}`} onClick={Liked} />
      <ReactMarkdown>{recipe}</ReactMarkdown>
    </div>
  );
}

export default Recipe;
