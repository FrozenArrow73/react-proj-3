import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailScreen = () => {  
  const {id} = useParams()
  const [recipe, setRecipe] = useState({})

  useEffect(()=>{
    axios.get(`https://recipes.devmountain.com/recipes/${id}`).then((result)=>{
      setRecipe(result.data)
    })
  },[])
  let ingredentDisplay = "";
  if(recipe.ingredients){
    ingredentDisplay = recipe.ingredients.map((ingredient, index)=> {
      return <h4>{ingredient.quantity} {ingredient.ingredient}</h4>
    })
  }

  let detailsDisplay = ""
  if (recipe.instructions) {
    detailsDisplay = JSON.parse(recipe.instructions)
  }
  return (
    <section>
      <div
      style={{
        backgroundImage: `linear-gradient(
            190deg,
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.8)),
        url(${recipe.image_url})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "300px",
      }}
    >
      <div className="ad-content">
        <h1>{recipe.recipe_name}</h1>
      </div>
    </div>
    <div className='details-section'>
      <div className='recipe-ingredients'>
        <h2>Recipe</h2>
        <h4>Prep Time: {recipe.prep_time}</h4>
        <h4>Cook Time: {recipe.cook_time}</h4>
        <h4>Serves: {recipe.serves}</h4>
        <h2>Ingredents</h2>
        {ingredentDisplay}
      </div>
      <div className='recipe-details'>
        <h2>Details</h2>
        <p style={{whiteSpace: "pre-wrap"}}>{detailsDisplay}</p>
      </div>
    </div>
    </section>
  );
};

export default DetailScreen;
