import React, {useEffect, useState}from 'react'
import AdBanner from './AdBanner'
import axios from 'axios'
import RecipeCard from './RecipeCard'
import {BiSearchAlt2} from "react-icons/bi"

const HomeScreen = () => {  
  const [recipes, setRecipes] = useState({})
  const [search, setSearch] = useState("")

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
          <BiSearchAlt2 size="2em" color="#DA7635"/>
          <input 
            className='search-bar'
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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