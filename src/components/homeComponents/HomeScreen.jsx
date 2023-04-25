import React, {useEffect, useState}from 'react'
import AdBanner from './AdBanner'
import axios from 'axios'
import RecipeCard from './RecipeCard'
import {AiOutlineSearch} from "react-icons/ai"

const HomeScreen = () => {  
  const [recipes, setRecipes] = useState({})

  const getRecipes = () => {
    axios.get("https://recipes.devmountain.com/recipes").then((result) => {
      setRecipes(result.data)
      console.log(result.data)
    })
  }

  useEffect(() => {
    getRecipes()
  }, [])

  
  return (
    <div>
      <AdBanner />
      <div className='search-section'>
        <div className='search-bar-container'>
          <AiOutlineSearch/>
          <input 
            className='search-bar'
            type='text'
            placeholder='Search for a Recipe'
          />
        </div>
      </div>
      <div className="recipe-card-container">
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
      </div>
    </div>
  )
}

export default HomeScreen