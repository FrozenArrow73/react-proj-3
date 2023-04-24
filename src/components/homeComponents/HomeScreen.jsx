import React, {useEffect, useState}from 'react'
import AdBanner from './AdBanner'
import axios from 'axios'

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
      {/* Much code from Part 2 will be placed around here. Do your best! */}
    </div>
  )
}

export default HomeScreen