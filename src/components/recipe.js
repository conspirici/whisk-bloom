import ReactMarkdown from 'react-markdown';
import { X, Heart, Download } from 'lucide-react';
import html2canvas from 'html2canvas';
function Recipe({ recipe, Delete, Liked, likedRecipes}) {
  const downloadImage = ()=>{
    const recipeElement = document.getElementById('recipe-to-download');
    html2canvas(recipeElement).then(canvas => {
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'recipe.png'
      link.click();
    })
  }
  return (
    <div className="recipe-container" id='recipe-to-download'>
      <X className="recipe-delete-icon" onClick={Delete } />
      <Heart className={`heart-icon ${likedRecipes.includes(recipe) ? 'liked' : ''}`} onClick={() => Liked(recipe)} />
      <Download className='download-icon' onClick={downloadImage}/>
      <ReactMarkdown>{recipe}</ReactMarkdown>
    </div>
  );
}

export default Recipe;
