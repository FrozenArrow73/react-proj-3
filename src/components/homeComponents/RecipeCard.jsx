import React from "react";

const RecipeCard = () => {
    return (
        <div className="recipe-card">
            <div style={{
                backgroundImage: "url(https://thefirstyearblog.com/wp-content/uploads/2015/11/Chocolate-Chocolate-Cake-8.jpg)",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                height: "300px",
                width: "300px",
            }}>

            </div>
            <div className="recipe-card-values">
                <p className="recipe-text">Triple Chocolate Mouse Cake</p>
                <button>See More</button>
            </div>
        </div>
    )
}

export default RecipeCard