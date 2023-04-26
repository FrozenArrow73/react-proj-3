import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({recipe}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/recipe/${recipe.recipe_id}`)
    }

    return (
        <div className="recipe-card">
            <div style={{
                backgroundImage: `url(${recipe.image_url})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                height: "300px",
                width: "300px",
            }}>

            </div>
            <div className="recipe-card-values">
                <p className="recipe-text">{recipe.recipe_name}</p>
                <button onClick={handleClick}>See More</button>
            </div>
        </div>
    )
}

export default RecipeCard