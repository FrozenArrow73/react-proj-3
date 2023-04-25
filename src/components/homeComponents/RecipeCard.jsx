import React from "react";

const RecipeCard = ({recipe}) => {
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
                <button>See More</button>
            </div>
        </div>
    )
}

export default RecipeCard