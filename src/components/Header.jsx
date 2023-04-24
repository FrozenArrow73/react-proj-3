import React from "react";
import { Link } from "react-router-dom";
import HomeScreen from "./homeComponents/HomeScreen";
import NewRecipeScreen from "./newRecipeComponents/NewRecipeScreen";

const Header = () => {
  return (
    <header>
      <h2>Devmountain Eatery</h2>
      <nav>
          <Link to="">
            <button className="nav-button">Home</button>
          </Link>
          <Link to="/newRecipe">
            <button className="nav-button">Add Recipe</button>
          </Link>
      </nav>
    </header>
  );
};

export default Header;
